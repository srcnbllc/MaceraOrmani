using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

public class MainMenuLogic : MonoBehaviour
{
    [Header("Managers")]
    [SerializeField] private DataManager dataManager;
    [SerializeField] private SoundManager soundManager;
    [SerializeField] private GamePreferences gamePrefs;

    [Header("UI Elements")]
    [SerializeField] private TextMeshProUGUI totalCoinsText;
    [SerializeField] private TextMeshProUGUI highScoreText;

    [Header("Settings Panel UI")]
    [SerializeField] private GameObject settingsPanel;
    
    [Header("Toggle Visuals (Noktalar ve Yazılar)")]
    [SerializeField] private Image musicDotImage; 
    [SerializeField] private Image sfxDotImage;   
    [SerializeField] private TextMeshProUGUI musicStatusText; 
    [SerializeField] private TextMeshProUGUI sfxStatusText;   
    [SerializeField] private Color toggleOnColor = Color.green;
    [SerializeField] private Color toggleOffColor = Color.gray;

    [Header("Localization Texts")]
    [SerializeField] private TextMeshProUGUI settingsTitleText;
    [SerializeField] private TextMeshProUGUI closeButtonText;
    [SerializeField] private TextMeshProUGUI musicLabelText;
    [SerializeField] private TextMeshProUGUI sfxLabelText;
    [SerializeField] private TextMeshProUGUI languageLabelText;

    [Header("Language Buttons")]
    [SerializeField] private TextMeshProUGUI trButtonText;
    [SerializeField] private TextMeshProUGUI enButtonText;
    [SerializeField] private Color selectedColor = new Color(1f, 0.8f, 0f); 
    [SerializeField] private Color normalColor = Color.white; 

    [Header("Audio")]
    [SerializeField] private AudioClip backgroundMusic;

    [Header("Maceracı Pasaportu / Başarımlar UI")]
    [SerializeField] private GameObject passportPanel; 
    [SerializeField] private GameObject[] passportLevelCards; 

    [Header("Pasaport Özel Ödüller")]
    [SerializeField] private GameObject belturRewardRow;  
    [SerializeField] private GameObject ziplineRewardRow; 

    [Header("Pasaport İkonları")]
    [SerializeField] private Sprite lockedIcon;       
    [SerializeField] private Sprite completedIcon;    
    [SerializeField] private Sprite lockedRewardIcon; 
    [SerializeField] private Sprite unlockedRewardIcon; 

    [Header("Gelişim Vadisi / Kamp UI")]
    [SerializeField] private GameObject campPanel;

    [Header("Bölümler / Harita UI")]
    [SerializeField] private GameObject bolumlerPanel;

    [Header("Bölüm Seçim UI (QR Ekranı)")]
    [SerializeField] private GameObject bolumSecimPanel; 

    [Header("Panel Ayarları")]
    [SerializeField] private GameObject mainMenuPanel; 
    [SerializeField] private GameObject characterSelectionPanel; 

    // ==========================================
    // BAŞLANGIÇ KONTROLLERİ & PERFORMANS
    // ==========================================
    private void Awake()
    {
        // 1. Motor & Zaman Ölçeği Garantisi (Oyun sahnesinden dönüşte TimeScale=0 kalmasını önler)
        Time.timeScale = 1f;

        // 2. Mobil Cihazlar İçin Sabit 60 FPS Kilidi
        Application.targetFrameRate = 60;

        // 3. Ormanda Yürürken Ekranın Kapanmasını Önle
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
    }

    private void Start()
    {
        // HER BAŞLANGIÇTA BÖLÜM KİLİTLERİNİ GÜNCELLE
        UpdatePassportUI(); 
        UpdateUI();

        // Oyun sahnesinden "Bölüm Seçimine Dön" butonuyla gelindiyse
        if (PlayerPrefs.GetInt("BolumPaneliAc") == 1)
        {
            OnOpenBolumSecimPanel(); 
            PlayerPrefs.SetInt("BolumPaneliAc", 0); // Notu temizler
        }
        else if (PlayerPrefs.GetInt("PasaportuAc") == 1)
        {
            OnOpenPassport();
            PlayerPrefs.SetInt("PasaportuAc", 0);
        }

        // Boğaziçi Yönetim & Kemerburgaz Kent Ormanı Resmi Markalama
        if (FindFirstObjectByType<BogaziciForestBranding>() == null)
        {
            GameObject brandingObj = new GameObject("BogaziciForestBranding");
            brandingObj.AddComponent<BogaziciForestBranding>();
        }
    }

    private void Update()
    {
        // Android / Mobil Geri Tuşu (Back Button) Desteği
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            HandleAndroidBackButton();
        }
    }

    private void HandleAndroidBackButton()
    {
        if (settingsPanel != null && settingsPanel.activeSelf) { OnCloseSettings(); return; }
        if (passportPanel != null && passportPanel.activeSelf) { OnClosePassport(); return; }
        if (campPanel != null && campPanel.activeSelf) { OnCloseCampPanel(); return; }
        if (bolumlerPanel != null && bolumlerPanel.activeSelf) { OnCloseBolumlerPanel(); return; }
        if (bolumSecimPanel != null && bolumSecimPanel.activeSelf) { OnCloseBolumSecimPanel(); return; }
        if (characterSelectionPanel != null && characterSelectionPanel.activeSelf) { OnCloseCharacterSelection(); return; }
    }

    private void OnEnable()
    {
        Time.timeScale = 1f;
        UpdateUI();
        UpdatePassportUI(); // Sahne her aktif olduğunda kilitleri ve altınları kontrol et
        
        if (soundManager != null && backgroundMusic != null)
        {
            soundManager.PlayBackgroundMusic(backgroundMusic);
        }
    }

    private void OnDisable()
    {
        if (soundManager != null) soundManager.StopBackgroundMusic();
    }

    public void UpdateUI()
    {
        // 1. Verileri aracı kullanmadan DOĞRUDAN cihaz hafızasından kesin olarak okuyoruz
        int guncelAltin = PlayerPrefs.GetInt("total_coins", 0);
        int guncelSkor = PlayerPrefs.GetInt("high_score", 0); 

        // 2. Altın metni bağlıysa ekrana yazdır
        if (totalCoinsText != null) 
        {
            totalCoinsText.text = guncelAltin.ToString();
        }

        // 3. Skor metni bağlıysa ekrana yazdır
        if (highScoreText != null) 
        {
            highScoreText.text = guncelSkor.ToString(); 
        }

        Debug.Log($"Menü Güncellendi -> Ekrana Yazılan Altın: {guncelAltin} | Skor: {guncelSkor}");
    }

    public void CloseAllSubPanels()
    {
        if (settingsPanel != null) settingsPanel.SetActive(false);
        if (passportPanel != null) passportPanel.SetActive(false);
        if (campPanel != null) campPanel.SetActive(false);
        if (bolumlerPanel != null) bolumlerPanel.SetActive(false);
        if (bolumSecimPanel != null) bolumSecimPanel.SetActive(false);
        if (characterSelectionPanel != null) characterSelectionPanel.SetActive(false);
    }

    public void OnOpenSettings()
    {
        CloseAllSubPanels();
        if (mainMenuPanel != null) mainMenuPanel.SetActive(false);
        if (settingsPanel != null) settingsPanel.SetActive(true);
        UpdateSettingsVisuals();
    }

    public void OnCloseSettings()
    {
        if (settingsPanel != null) settingsPanel.SetActive(false);
        if (mainMenuPanel != null) mainMenuPanel.SetActive(true);
    }

    public void ToggleMusic()
    {
        gamePrefs.IsMusicEnabled = !gamePrefs.IsMusicEnabled;
        if (gamePrefs.IsMusicEnabled) soundManager.PlayBackgroundMusic(backgroundMusic);
        else soundManager.StopBackgroundMusic();
        UpdateSettingsVisuals();
    }

    public void ToggleSFX()
    {
        gamePrefs.IsSfxEnabled = !gamePrefs.IsSfxEnabled;
        UpdateSettingsVisuals();
    }

    public void SetLanguageTR()
    {
        gamePrefs.CurrentLanguage = "TR";
        UpdateSettingsVisuals();
        if (passportPanel != null && passportPanel.activeSelf) UpdatePassportUI();
    }

    public void SetLanguageEN()
    {
        gamePrefs.CurrentLanguage = "EN";
        UpdateSettingsVisuals();
        if (passportPanel != null && passportPanel.activeSelf) UpdatePassportUI();
    }

    private void UpdateSettingsVisuals()
    {
        if (gamePrefs == null) return;

        bool isMusicOn = gamePrefs.IsMusicEnabled;
        bool isSfxOn = gamePrefs.IsSfxEnabled;
        bool isTR = gamePrefs.CurrentLanguage == "TR";

        if (musicDotImage != null) musicDotImage.color = isMusicOn ? toggleOnColor : toggleOffColor;
        if (sfxDotImage != null) sfxDotImage.color = isSfxOn ? toggleOnColor : toggleOffColor;

        if (musicStatusText != null) 
            musicStatusText.text = isTR ? (isMusicOn ? "AÇIK" : "KAPALI") : (isMusicOn ? "ON" : "OFF");
            
        if (sfxStatusText != null) 
            sfxStatusText.text = isTR ? (isSfxOn ? "AÇIK" : "KAPALI") : (isSfxOn ? "ON" : "OFF");

        if (trButtonText != null) trButtonText.color = isTR ? selectedColor : normalColor;
        if (enButtonText != null) enButtonText.color = !isTR ? selectedColor : normalColor;

        if (settingsTitleText != null) settingsTitleText.text = isTR ? "AYARLAR" : "SETTINGS";
        if (closeButtonText != null) closeButtonText.text = isTR ? "KAPAT" : "CLOSE";
        if (musicLabelText != null) musicLabelText.text = isTR ? "MÜZİK" : "MUSIC";
        if (sfxLabelText != null) sfxLabelText.text = isTR ? "SES" : "SOUND";
        if (languageLabelText != null) languageLabelText.text = isTR ? "DİL" : "LANGUAGE";
    }

    // ==========================================
    // MACERACI PASAPORTU / BAŞARIMLAR MANTIĞI
    // ==========================================

    public void OnOpenPassport()
    {
        CloseAllSubPanels();
        if (mainMenuPanel != null) mainMenuPanel.SetActive(false);
        if (passportPanel != null)
        {
            passportPanel.SetActive(true);
            UpdatePassportUI();
        }
    }

    public void OnClosePassport()
    {
        if (passportPanel != null) passportPanel.SetActive(false);
        if (mainMenuPanel != null) mainMenuPanel.SetActive(true);
        UpdateUI();
    }

    private void UpdatePassportUI()
    {
        bool isTR = gamePrefs != null && gamePrefs.CurrentLanguage == "TR";
        int currentReachedLevel = 1; 

        for (int i = 0; i < passportLevelCards.Length; i++)
        {
            int levelNumber = i + 1; // Ekranda yazan bölüm numarası (1, 2, 3)
            GameObject card = passportLevelCards[i];

            if (card == null) continue;

            Image iconImage = card.transform.Find("Icon").GetComponent<Image>();
            TextMeshProUGUI statusText = card.transform.Find("StatusText").GetComponent<TextMeshProUGUI>();
            Button cardButton = card.GetComponent<Button>();

            // Ekrana basmadan önce DataManager'a soruyoruz: "Bu bölümün kilidi ne alemde?"
            DataManager.LevelState state = DataManager.LevelState.Locked;
            if (dataManager != null) 
            {
                state = dataManager.GetLevelState(i);
                
                // Ödül satırları için en yüksek ulaşılan bölümü hesapla
                if (state == DataManager.LevelState.Unlocked || state == DataManager.LevelState.Completed)
                {
                    if (levelNumber > currentReachedLevel) currentReachedLevel = levelNumber;
                }
            }

            // DURUMA GÖRE KARTIN RENGİNİ VE YAZISINI DEĞİŞTİR
            if (state == DataManager.LevelState.Completed)
            {
                statusText.text = isTR ? "TAMAMLANDI" : "COMPLETED";
                statusText.color = new Color(0.4f, 0.8f, 0.2f); // Yeşil
                if (completedIcon != null) iconImage.sprite = completedIcon;
                cardButton.interactable = true;
            }
            else if (state == DataManager.LevelState.Unlocked || state == DataManager.LevelState.QrRequired)
            {
                statusText.text = isTR ? "OYNANABİLİR" : "PLAYABLE";
                statusText.color = new Color(1f, 0.7f, 0f); // Turuncu
                if (lockedIcon != null) iconImage.sprite = lockedIcon; 
                cardButton.interactable = true;
            }
            else // Eğer kilitliyse (Locked)
            {
                statusText.text = isTR ? "KİLİTLİ" : "LOCKED";
                statusText.color = Color.gray; // Gri
                if (lockedIcon != null) iconImage.sprite = lockedIcon;
                cardButton.interactable = false;
            }
        }

        UpdateRewardRowVisual(5, currentReachedLevel, belturRewardRow);
        UpdateRewardRowVisual(10, currentReachedLevel, ziplineRewardRow);
    }

    private void UpdateRewardRowVisual(int requiredLevel, int currentLevel, GameObject rewardRow)
    {
        if (rewardRow == null) return;
        Transform lockIconTransform = rewardRow.transform.Find("LockIcon");
        if (lockIconTransform == null) return;

        Image rowLockImage = lockIconTransform.GetComponent<Image>();

        if (currentLevel > requiredLevel)
        {
            if (unlockedRewardIcon != null) rowLockImage.sprite = unlockedRewardIcon;
        }
        else
        {
            if (lockedRewardIcon != null) rowLockImage.sprite = lockedRewardIcon;
        }

        // Ödül satırına tıklanınca kupon modalını açma bağlantısı
        Button rowButton = rewardRow.GetComponent<Button>();
        if (rowButton == null) rowButton = rewardRow.AddComponent<Button>();
        if (rowButton != null)
        {
            rowButton.onClick.RemoveAllListeners();
            rowButton.onClick.AddListener(() =>
            {
                RewardVoucherManager.VoucherType type = requiredLevel == 5 
                    ? RewardVoucherManager.VoucherType.Beltur 
                    : RewardVoucherManager.VoucherType.Zipline;

                if (RewardVoucherManager.Instance != null)
                {
                    RewardVoucherManager.Instance.ShowVoucherModal(type);
                }
            });
        }
    }

    public void OnPassportLevelSelected(int levelIndex)
    {
        Time.timeScale = 1f;
        // ARTIK SENİN LEVELMANAGER'IN TANIDIĞI "SecilenBolumID" ANAHTARINI YAZIYORUZ!
        PlayerPrefs.SetInt("SecilenBolumID", levelIndex);
        PlayerPrefs.Save();
        
        Debug.Log("Pasaport Ekranından Seçilen Bölüm Yükleniyor: " + levelIndex);
        SceneManager.LoadScene("GameScene");
    }

    // ==========================================
    // GELİŞİM VADİSİ / KAMP AÇMA KAPATMA MANTIĞI
    // ==========================================

    public void OnOpenCampPanel()
    {
        CloseAllSubPanels();
        if (mainMenuPanel != null) mainMenuPanel.SetActive(false);
        if (campPanel != null) campPanel.SetActive(true);
    }

    public void OnCloseCampPanel()
    {
        if (campPanel != null) campPanel.SetActive(false);
        if (mainMenuPanel != null) mainMenuPanel.SetActive(true);
        UpdateUI();
    }

    public void OnOpenBolumlerPanel()
    {
        CloseAllSubPanels();
        if (mainMenuPanel != null) mainMenuPanel.SetActive(false);
        if (bolumlerPanel != null) bolumlerPanel.SetActive(true);
    }

    public void OnCloseBolumlerPanel()
    {
        if (bolumlerPanel != null) bolumlerPanel.SetActive(false);
        if (mainMenuPanel != null) mainMenuPanel.SetActive(true);
        UpdateUI();
    }

    // ==========================================
    // BÖLÜM SEÇİM PANELİ (QR EKRANI) FONKSİYONLARI
    // ==========================================
    public void OnOpenBolumSecimPanel()
    {
        CloseAllSubPanels();
        if (mainMenuPanel != null) mainMenuPanel.SetActive(false);
        if (bolumSecimPanel != null) bolumSecimPanel.SetActive(true);
    }

    public void OnCloseBolumSecimPanel()
    {
        if (bolumSecimPanel != null) bolumSecimPanel.SetActive(false);
        if (mainMenuPanel != null) mainMenuPanel.SetActive(true);
        UpdateUI();
    }

    public void OnOpenCharacterSelection()
    {
        CloseAllSubPanels();
        if (mainMenuPanel != null) mainMenuPanel.SetActive(false);
        
        if (characterSelectionPanel != null) 
        {
            characterSelectionPanel.SetActive(true);
            CanvasGroup cg = characterSelectionPanel.GetComponent<CanvasGroup>();
            if(cg != null) { cg.alpha = 1; cg.interactable = true; cg.blocksRaycasts = true; }
        }
    }

    public void OnCloseCharacterSelection()
    {
        if (characterSelectionPanel != null) characterSelectionPanel.SetActive(false);
        if (mainMenuPanel != null) mainMenuPanel.SetActive(true);
        UpdateUI();
    }
}