using UnityEngine;
using UnityEngine.UI; // Image bileşenini kontrol etmek için bu şart!
using TMPro;

public class BasarimlarLogic : MonoBehaviour
{
    [System.Serializable]
    public class BolumBasarimi
    {
        public int bolumIndex; // Örn: 1. Bölüm için 0 yazılacak
        public Image basarimIkonu; // Sahnede zaten duran mevcut kilit Image bileşeni
        public TextMeshProUGUI durumText;
    }

    [Header("Yöneticiler")]
    [SerializeField] private DataManager dataManager;

    [Header("Görseller (Sadece 1'er kez sürüklenecek)")]
    [SerializeField] private Sprite kilitliSprite;      // Altın asma kilit resmi
    [SerializeField] private Sprite tamamlandiSprite;  // Gönderdiğin yeşil kalkan resmi

    [Header("Normal Bölüm Başarımları (İlk 6 Bölüm)")]
    public BolumBasarimi[] bolumBasarimlari;

    [Header("Özel Ödül İkonları (Mevcut Kilitler)")]
    public Image belturIkonu;   
    public Image ziplineIkonu;  

    // Panel her açıldığında otomatik tetiklenir
    private void OnEnable()
    {
        BasarimlariGuncelle();
    }

    public void BasarimlariGuncelle()
    {
        if (dataManager == null) dataManager = FindFirstObjectByType<DataManager>();
        if (dataManager == null) return;

        // 1. NORMAL BÖLÜM KİLİTLERİNİ KONTROL ET
        if (bolumBasarimlari != null)
        {
            foreach (var basarim in bolumBasarimlari)
            {
                if (basarim == null) continue;
                bool tamamlandiMi = dataManager.GetLevelState(basarim.bolumIndex) == DataManager.LevelState.Completed;

                if (basarim.basarimIkonu != null)
                {
                    if (tamamlandiMi && tamamlandiSprite != null) basarim.basarimIkonu.sprite = tamamlandiSprite;
                    else if (!tamamlandiMi && kilitliSprite != null) basarim.basarimIkonu.sprite = kilitliSprite;
                }

                if (basarim.durumText != null) 
                {
                    if (tamamlandiMi)
                    {
                        basarim.durumText.text = "Tamamlandı";
                        basarim.durumText.color = new Color(0.2f, 0.8f, 0.2f); // Yeşil
                    }
                    else
                    {
                        basarim.durumText.text = "Kilitli";
                        basarim.durumText.color = new Color(0.8f, 0.6f, 0.1f); // Sarı/Altın
                    }
                }
            }
        }

        // 2. ÖZEL ÖDÜLLERİ KONTROL ET
        // Beltur İndirimi (5. Bölüm -> Index 4)
        if (belturIkonu != null)
        {
            bool belturAcik = dataManager.GetLevelState(4) == DataManager.LevelState.Completed;
            if (belturAcik && tamamlandiSprite != null) belturIkonu.sprite = tamamlandiSprite;
            else if (!belturAcik && kilitliSprite != null) belturIkonu.sprite = kilitliSprite;

            Button btn = belturIkonu.GetComponent<Button>();
            if (btn == null) btn = belturIkonu.gameObject.AddComponent<Button>();
            if (btn != null)
            {
                btn.onClick.RemoveAllListeners();
                btn.onClick.AddListener(() =>
                {
                    if (RewardVoucherManager.Instance != null)
                    {
                        RewardVoucherManager.Instance.ShowVoucherModal(RewardVoucherManager.VoucherType.Beltur);
                    }
                });
            }
        }

        // Zipline Hakkı (10. Bölüm -> Index 9)
        if (ziplineIkonu != null)
        {
            bool ziplineAcik = dataManager.GetLevelState(9) == DataManager.LevelState.Completed;
            if (ziplineAcik && tamamlandiSprite != null) ziplineIkonu.sprite = tamamlandiSprite;
            else if (!ziplineAcik && kilitliSprite != null) ziplineIkonu.sprite = kilitliSprite;

            Button btn = ziplineIkonu.GetComponent<Button>();
            if (btn == null) btn = ziplineIkonu.gameObject.AddComponent<Button>();
            if (btn != null)
            {
                btn.onClick.RemoveAllListeners();
                btn.onClick.AddListener(() =>
                {
                    if (RewardVoucherManager.Instance != null)
                    {
                        RewardVoucherManager.Instance.ShowVoucherModal(RewardVoucherManager.VoucherType.Zipline);
                    }
                });
            }
        }
    }
}