using System;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - Gerçek Dünya Ödül ve Kupon Yöneticisi
/// Pasaportta kazanılan Beltur İndirimi (5. Bölüm) ve Zipline Hakkı (10. Bölüm)
/// için benzersiz kupon kodları üretir, geçerlilik durumunu saklar ve gişe görevlisi
/// doğrulama arayüzünü yönetir.
/// </summary>
public class RewardVoucherManager : MonoBehaviour
{
    public static RewardVoucherManager Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = FindFirstObjectByType<RewardVoucherManager>();
                if (_instance == null)
                {
                    GameObject go = new GameObject("RewardVoucherManager");
                    _instance = go.AddComponent<RewardVoucherManager>();
                    DontDestroyOnLoad(go);
                }
            }
            return _instance;
        }
        private set => _instance = value;
    }
    private static RewardVoucherManager _instance;

    public enum VoucherType
    {
        Beltur = 5,
        Zipline = 10
    }

    [Header("Modal UI Elemanları (Opsiyonel - Sahne Bağlantısı)")]
    [SerializeField] private GameObject voucherModalPanel;
    [SerializeField] private TextMeshProUGUI voucherTitleText;
    [SerializeField] private TextMeshProUGUI voucherCodeText;
    [SerializeField] private TextMeshProUGUI voucherStatusText;
    [SerializeField] private TextMeshProUGUI voucherDescText;
    [SerializeField] private Button redeemButton;
    [SerializeField] private TextMeshProUGUI redeemButtonText;
    [SerializeField] private Button closeButton;

    private VoucherType aktifGosterilenKupon = VoucherType.Beltur;

    private void Awake()
    {
        if (_instance == null)
        {
            _instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else if (_instance != this)
        {
            Destroy(gameObject);
            return;
        }

        if (closeButton != null)
        {
            closeButton.onClick.RemoveAllListeners();
            closeButton.onClick.AddListener(CloseVoucherModal);
        }

        if (redeemButton != null)
        {
            redeemButton.onClick.RemoveAllListeners();
            redeemButton.onClick.AddListener(OnRedeemClicked);
        }

        if (voucherModalPanel != null)
        {
            voucherModalPanel.SetActive(false);
        }
    }

    /// <summary>
    /// Kupon kodunu getirir veya ilk kez çağrılıyorsa benzersiz bir kod üretir.
    /// </summary>
    public string GetOrCreateVoucherCode(VoucherType type)
    {
        string prefKey = $"VoucherCode_{type}";
        if (PlayerPrefs.HasKey(prefKey))
        {
            return PlayerPrefs.GetString(prefKey);
        }

        string prefix = type == VoucherType.Beltur ? "KB-BLTR" : "KB-ZPLN";
        int randomId = UnityEngine.Random.Range(1000, 9999);
        string newCode = $"{prefix}-{randomId}";

        PlayerPrefs.SetString(prefKey, newCode);
        PlayerPrefs.Save();
        return newCode;
    }

    /// <summary>
    /// Kuponun durumunu döner: 0=Kilitli, 1=Kullanıma Hazır, 2=Kullanıldı
    /// </summary>
    public int GetVoucherState(VoucherType type)
    {
        int levelIndex = (int)type - 1; // 5. bölüm -> index 4, 10. bölüm -> index 9
        int levelState = PlayerPrefs.GetInt($"LevelState_{levelIndex}", 0);

        // Bölüm henüz bitirilmemişse kilitli
        if (levelState != 3) // 3 = Completed
        {
            return 0; // Kilitli
        }

        // Bölüm tamamlandı, peki kullanıldı mı?
        bool isRedeemed = PlayerPrefs.GetInt($"VoucherRedeemed_{type}", 0) == 1;
        return isRedeemed ? 2 : 1;
    }

    /// <summary>
    /// Kullanıcı pasaportta Beltur veya Zipline ödülüne tıkladığında modalı açar.
    /// </summary>
    public void ShowVoucherModal(VoucherType type)
    {
        aktifGosterilenKupon = type;
        int state = GetVoucherState(type);

        if (voucherModalPanel == null)
        {
            string fallbackCode = GetOrCreateVoucherCode(type);
            if (state == 0)
            {
                ToastNotificationService.Show($"🔒 Bu ödülü açmak için {(int)type}. Bölümü tamamlamalısınız!", ToastNotificationService.ToastType.Warning);
            }
            else if (state == 2)
            {
                ToastNotificationService.Show($"✔️ Kupon ({fallbackCode}) daha önce gişede kullanılmıştır.", ToastNotificationService.ToastType.Info);
            }
            else
            {
                GUIUtility.systemCopyBuffer = fallbackCode;
                string kuponIsmi = type == VoucherType.Beltur ? "BELTUR İkram Kuponu" : "Zipline Uçuş Kuponu";
                ToastNotificationService.Show($"🎟️ {kuponIsmi} Kodunuz: {fallbackCode} (Panoya Kopyalandı!)", ToastNotificationService.ToastType.Success);
            }
            Debug.Log($"[RewardVoucherManager] Kupon Tıklandı: {type} | Durum: {state} | Kod: {fallbackCode}");
            return;
        }

        voucherModalPanel.SetActive(true);

        string title = type == VoucherType.Beltur ? "İBB BELTUR İKRAM KUPONU" : "MACERA PARKI ZİPLİNE UÇUŞ KUPONU";
        string desc = type == VoucherType.Beltur
            ? "Kemerburgaz Kent Ormanı İBB BELTUR işletmelerinde geçerli ikram kuponu. Kasada görevliye kodu iletiniz."
            : "Kemerburgaz Kent Ormanı Macera Parkı gişesinde geçerli 1 adet ücretsiz Zipline uçuş hakkı.";

        if (voucherTitleText != null) voucherTitleText.text = title;
        if (voucherDescText != null) voucherDescText.text = desc;

        string code = GetOrCreateVoucherCode(type);

        if (state == 0) // Kilitli
        {
            if (voucherCodeText != null) voucherCodeText.text = "******";
            if (voucherStatusText != null)
            {
                voucherStatusText.text = $"KİLİTLİ ({(int)type}. Bölümü Tamamlayın)";
                voucherStatusText.color = Color.gray;
            }
            if (redeemButton != null) redeemButton.interactable = false;
            if (redeemButtonText != null) redeemButtonText.text = "HENÜZ KAZANILMADI";
        }
        else if (state == 1) // Kullanıma Hazır
        {
            if (voucherCodeText != null)
            {
                voucherCodeText.text = code;
                Button codeCopyBtn = voucherCodeText.GetComponent<Button>();
                if (codeCopyBtn == null) codeCopyBtn = voucherCodeText.gameObject.AddComponent<Button>();
                codeCopyBtn.onClick.RemoveAllListeners();
                codeCopyBtn.onClick.AddListener(() =>
                {
                    GUIUtility.systemCopyBuffer = code;
                    ToastNotificationService.Show("Kupon kodu panoya kopyalandı! 📋", ToastNotificationService.ToastType.Success);
                });
            }
            if (voucherStatusText != null)
            {
                voucherStatusText.text = "GEÇERLİ - KULLANIMA HAZIR (Kodu Kopyalamak İçin Dokunun)";
                voucherStatusText.color = new Color(0.2f, 0.8f, 0.2f);
            }
            if (redeemButton != null) redeemButton.interactable = true;
            if (redeemButtonText != null) redeemButtonText.text = "GÖREVLİ ONAYLA VE KULLAN";
        }
        else // 2 = Kullanıldı
        {
            if (voucherCodeText != null) voucherCodeText.text = code;
            if (voucherStatusText != null)
            {
                voucherStatusText.text = "BU KUPON DAHA ÖNCE KULLANILMIŞTIR";
                voucherStatusText.color = new Color(0.9f, 0.3f, 0.3f);
            }
            if (redeemButton != null) redeemButton.interactable = false;
            if (redeemButtonText != null) redeemButtonText.text = "KULLANILDI";
        }
    }

    public void OnRedeemClicked()
    {
        // Gişe personeli butona bastığında kupon harcanır
        PlayerPrefs.SetInt($"VoucherRedeemed_{aktifGosterilenKupon}", 1);
        PlayerPrefs.Save();

        Debug.Log($"[RewardVoucherManager] {aktifGosterilenKupon} kuponu başarıyla kullanıldı!");
        ToastNotificationService.Show("Kupon gişe personeli tarafından başarıyla kullanıldı!", ToastNotificationService.ToastType.Success);
        ShowVoucherModal(aktifGosterilenKupon); // Ekranı "Kullanıldı" durumuna güncelle
    }

    public void CloseVoucherModal()
    {
        if (voucherModalPanel != null)
        {
            voucherModalPanel.SetActive(false);
        }
    }
}
