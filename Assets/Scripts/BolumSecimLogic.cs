using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement; 

public class BolumSecimLogic : MonoBehaviour
{
    [System.Serializable]
    public class BolumUIElement
    {
        public int levelIndex;          
        public Button levelButton;      
        public GameObject kilitIkonu;   
        public GameObject qrIkonu;      
    }

    [System.Serializable]
    public class BolumDetayi
    {
        public int levelIndex;
        public string lokasyonAdi; 
    }

    [Header("Managers")]
    [SerializeField] private DataManager dataManager;

    [Header("Çerçeve Görselleri (Sprite)")]
    [SerializeField] private Sprite cerceveStandart; 
    [SerializeField] private Sprite cerceveOzel;      

    [Header("Bölüm Butonları")]
    [SerializeField] private BolumUIElement[] tumBolumler;

    [Header("Bölüm Lokasyonları")]
    [SerializeField] private BolumDetayi[] bolumDetaylari;

    [Header("Alt Bilgi Kutusu UI Elemanları")]
    [SerializeField] private GameObject levelInfoCardPanel; 
    [SerializeField] private TextMeshProUGUI kartBaslikText;  
    public Button kartOynaButon;          
    [SerializeField] private TextMeshProUGUI kartOynaButonText; 

    [Header("QR Sistemi Bağlantıları")]
    public GameObject qrOkutmaPaneli; 

    [Header("Geliştirici Ayarları")]
    public bool hafizayiSifirla = false;

    private int secilenLevelIndex;

  private void Awake()
    {
        Time.timeScale = 1f;

        if (hafizayiSifirla)
        {
            PlayerPrefs.DeleteAll();
            PlayerPrefs.Save();
            Debug.LogWarning("Oyun hafızası sıfırlandı!");
        }
    }

    private void Start()
    {
        if (levelInfoCardPanel != null) levelInfoCardPanel.SetActive(false);
        HaritayiYenile();
    }

    public void HaritayiYenile()
    {
        if (dataManager == null || tumBolumler == null) return;

        foreach (var bolum in tumBolumler)
        {
            if (bolum == null || bolum.levelButton == null) continue;

            bolum.levelButton.transition = Selectable.Transition.None;

            Image butonResmi = bolum.levelButton.GetComponent<Image>();
            PulseAnimation pulseAnim = bolum.levelButton.GetComponent<PulseAnimation>();

            if (butonResmi != null)
            {
                if (bolum.levelIndex == 4 || bolum.levelIndex == 9)
                    if (cerceveOzel != null) butonResmi.sprite = cerceveOzel;
                else
                    if (cerceveStandart != null) butonResmi.sprite = cerceveStandart;
            }

            DataManager.LevelState guncelDurum = dataManager.GetLevelState(bolum.levelIndex);

            // ==========================================
            // DEMİR YUMRUK: Oyun kilidi açsa bile QR okutulmadıysa kilitli göster!
            // ==========================================
            if (bolum.levelIndex == 0 || bolum.levelIndex == 1) 
            {
                qrIkonuGoster = false; 
            }
            else 
            {
                // 3. Bölüm ve sonrası için bizim özel damgamızı kontrol et
                bool qrOkutulduMu = PlayerPrefs.GetInt("QR_Zorunlu_Acildi_" + bolum.levelIndex, 0) == 1;
                
                // YALNIZCA sıradaki yeni açılan bölüm için (ve henüz QR okutulmadıysa) QR zorunlu tut!
                // Tamamlanan (Completed) bölümler tekrar serbestçe oynanabilir.
                if (guncelDurum == DataManager.LevelState.Unlocked && !qrOkutulduMu)
                {
                    guncelDurum = DataManager.LevelState.QrRequired;
                }
            }

            switch (guncelDurum)
            {
               case DataManager.LevelState.Locked:
                bolum.levelButton.interactable = true; 
                if (bolum.kilitIkonu != null) bolum.kilitIkonu.SetActive(true);
                if (bolum.qrIkonu != null) bolum.qrIkonu.SetActive(qrIkonuGoster); 
                if (pulseAnim != null) { pulseAnim.enabled = false; bolum.levelButton.transform.localScale = Vector3.one; }
                break;

                case DataManager.LevelState.QrRequired:
                    bolum.levelButton.interactable = true;  
                    if (bolum.kilitIkonu != null) bolum.kilitIkonu.SetActive(true);
                    if (bolum.qrIkonu != null) bolum.qrIkonu.SetActive(qrIkonuGoster); 
                    if (pulseAnim != null) pulseAnim.enabled = true;
                    break;

                case DataManager.LevelState.Unlocked:
                case DataManager.LevelState.Completed:
                    bolum.levelButton.interactable = true;  
                    if (bolum.kilitIkonu != null) bolum.kilitIkonu.SetActive(false); 
                    if (bolum.qrIkonu != null) bolum.qrIkonu.SetActive(false);
                    if (pulseAnim != null) pulseAnim.enabled = true;
                    break;
            }
        }
    }

    private static readonly string[] VarsayilanLokasyonlar = {
        "Mağlova Kapısı & Karşılama (A Kapısı | 🚲 Bisiklet | ℹ️ Danışma)",
        "Dev Atlıkarınca & Carousel Cafe (🎠 Çift Katlı 40 At | ☕ Waffle 50m)",
        "Çocuk Parkları & Rotamız Orman (🚸 23 Park Noktası | 🎨 Doğa Atölyesi)",
        "İBB BELTUR Restoran & Kafe (☕ BELTUR | 🎭 İBB Sahne | 🚻 WC)",
        "Macera Parkı & Zipline (🧗 Dev Zipline & İp Parkuru | 🎟️ BELTUR Kuponu)",
        "Fauna Alanı & Yaban Hayatı (🦌 Kemerburgaz Fauna | ☕ Yeşil Vadi Cafe)",
        "Mimar Sinan Kapısı & Gölet (B Kapısı | 🦆 2.4km Göl Parkuru | 🍔 BELTUR Burger)",
        "Ahşap Seyir Kulesi (🗼 360° Panoramik Kule | ☕ Big Forest Cafe)",
        "Yakamoz Burnu & Dere Boyu (🌊 Alibey Deresi Yarımadası | 🪵 Woodbox)",
        "MAĞLOVA SU KEMERİ (🏛️ Mimar Sinan 1564 Şaheseri | 🏆 Zipline Büyük Final)"
    };

    public void OnBolumTiklandi(int levelIndex)
    {
        secilenLevelIndex = levelIndex;

        string lokasyon = levelIndex < VarsayilanLokasyonlar.Length ? VarsayilanLokasyonlar[levelIndex] : "Kemerburgaz Parkuru";
        if (bolumDetaylari != null)
        {
            foreach (var detay in bolumDetaylari)
            {
                if (detay != null && detay.levelIndex == levelIndex && !string.IsNullOrEmpty(detay.lokasyonAdi))
                {
                    lokasyon = detay.lokasyonAdi;
                    break;
                }
            }
        }

        if (levelInfoCardPanel != null) levelInfoCardPanel.SetActive(true);
        if (kartBaslikText != null) kartBaslikText.text = $"{levelIndex + 1}. BÖLÜM\n<size=65%>{lokasyon}</size>";

        bool oncekiBolumBittiMi = false;
        
        if (levelIndex == 0) 
        {
            oncekiBolumBittiMi = true;
        }
        else
        {
            DataManager.LevelState oncekiDurum = dataManager.GetLevelState(levelIndex - 1);
            if (oncekiDurum == DataManager.LevelState.Completed || oncekiDurum == DataManager.LevelState.Unlocked)
            {
                oncekiBolumBittiMi = true;
            }
        }

        // ==========================================
        // 1. VE 2. BÖLÜM (QR İSTEMEYEN BÖLÜMLER)
        // ==========================================
        if (levelIndex == 0 || levelIndex == 1)
        {
            if (oncekiBolumBittiMi)
            {
                if (kartOynaButon != null) 
                {
                    kartOynaButon.interactable = true;
                    kartOynaButon.onClick.RemoveAllListeners();
                    kartOynaButon.onClick.AddListener(KartOynaButonunaBasildi); 
                }
                if (kartOynaButonText != null) kartOynaButonText.text = "OYUNA BAŞLA"; 
            }
            else
            {
                if (kartOynaButon != null) 
                {
                    kartOynaButon.interactable = false;
                    kartOynaButon.onClick.RemoveAllListeners();
                }
                if (kartOynaButonText != null) kartOynaButonText.text = "ÖNCEKİ BÖLÜMÜ TAMAMLA!"; 
            }
        }
        else
        {
            // ==========================================
            // 3. BÖLÜM VE SONRASI (QR ZORUNLU OLANLAR)
            // ==========================================
            bool qrOkutulduMu = PlayerPrefs.GetInt("QR_Zorunlu_Acildi_" + levelIndex, 0) == 1;
            bool zatenTamamlandiMi = (dataManager != null && dataManager.GetLevelState(levelIndex) == DataManager.LevelState.Completed);

            if (qrOkutulduMu || zatenTamamlandiMi)
            {
                // Damga var veya bölüm zaten daha önce bitirilmiş! Doğrudan oyuna başlayabilir.
                if (kartOynaButon != null) 
                {
                    kartOynaButon.interactable = true;
                    kartOynaButon.onClick.RemoveAllListeners();
                    kartOynaButon.onClick.AddListener(KartOynaButonunaBasildi); 
                }
                if (kartOynaButonText != null) kartOynaButonText.text = zatenTamamlandiMi ? "TEKRAR OYNA" : "OYUNA BAŞLA"; 
            }
            else
            {
                // Damga yok! Oyun "Açık" dese bile QR okutmak ZORUNDA.
                if (oncekiBolumBittiMi)
                {
                    if (kartOynaButon != null) 
                    {
                        kartOynaButon.interactable = true;
                        kartOynaButon.onClick.RemoveAllListeners();
                        kartOynaButon.onClick.AddListener(QRKamerasiniAc); 
                    }
                    if (kartOynaButonText != null) kartOynaButonText.text = $"{lokasyon} QR OKUT"; 
                }
                else
                {
                    if (kartOynaButon != null) 
                    {
                        kartOynaButon.interactable = false;
                        kartOynaButon.onClick.RemoveAllListeners();
                    }
                    if (kartOynaButonText != null) kartOynaButonText.text = "ÖNCEKİ BÖLÜMÜ TAMAMLA!"; 
                }
            }
        }
    }
    
private void QRKamerasiniAc()
    {
        // YENİ EKLENEN SATIR: Kameraya hangi bölümün QR'ını beklediğimizi söylüyoruz!
        PlayerPrefs.SetInt("BeklenenBolumQR", secilenLevelIndex + 1);

        if (levelInfoCardPanel != null) levelInfoCardPanel.SetActive(false);
        if (qrOkutmaPaneli != null) qrOkutmaPaneli.SetActive(true);
        
        Debug.Log($"Bölüm {secilenLevelIndex + 1} için kamera açıldı. SADECE 'BOLUM_{secilenLevelIndex + 1}' KABUL EDİLECEK!");
    }

    public void KartOynaButonunaBasildi()
    {
        Time.timeScale = 1f;
        PlayerPrefs.SetInt("SecilenBolumID", secilenLevelIndex + 1);
        PlayerPrefs.Save();
        
        Debug.Log($"Bölüm {secilenLevelIndex + 1} seçildi, GameScene yükleniyor...");
        SceneManager.LoadScene("GameScene");
    }

    public void OnKartiKapat()
    {
        if (levelInfoCardPanel != null)
        {
            levelInfoCardPanel.SetActive(false);
        }
    }

    public void OnHaritadanCikis()
    {
        OnKartiKapat();
        gameObject.SetActive(false);

        MainMenuLogic mainMenu = FindFirstObjectByType<MainMenuLogic>();
        if (mainMenu != null)
        {
            mainMenu.OnCloseBolumSecimPanel();
        }
        else
        {
            GameObject menu = GameObject.Find("MainMenuPanel");
            if (menu != null) menu.SetActive(true);
        }
    }
}