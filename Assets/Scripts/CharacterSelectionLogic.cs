using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;
using System.Collections.Generic;

public class CharacterSelectionLogic : MonoBehaviour
{
    [Header("Managers")]
    [SerializeField] private DataManager dataManager;
    [SerializeField] private GameManager gameManager;
    [SerializeField] private GameModels gameModels;
    [SerializeField] private SoundManager soundManager;

    [Header("UI Variables (Assign in Inspector)")]
    [SerializeField] private TextMeshProUGUI totalCoinsText;
    [SerializeField] private TextMeshProUGUI characterNameText;
    [SerializeField] private TextMeshProUGUI characterDescText;
    
    [Header("Custom UI")]
    [SerializeField] private Image characterDisplayImage; 
    [SerializeField] private Button selectButton; 
    [SerializeField] private TextMeshProUGUI selectButtonText; 
    
    // YENİ EKLENDİ: Kilit İkonu
    [SerializeField] private GameObject kilitIkonu;

    [Header("Panel Geçiş Ayarları")]
    [SerializeField] private GameObject characterSelectionPanel;
    [SerializeField] private GameObject bolumSecimPanel;        
    [SerializeField] private GameObject mainMenuPanel;        

    public int currentIndex = 0;
    private List<HeroData> heroList;

    [Header("Animation Settings")]
    public float animSpeed = 0.1f; 
    private float animTimer;
    private int animIndex;
    
    private Dictionary<int, int> characterPrices = new Dictionary<int, int>
    {
        { 1, 0 },    // Tilki (Ücretsiz)
        { 2, 50 },  // Maymun
        { 3, 100 }  // Diğer Karakter
    };

    private void Start()
    {
        if (gameModels != null)
        {
            heroList = gameModels.GetCharacters();
        }

        // Oyun ilk defa açılıyorsa varsayılan karakter olarak Tilki'yi (Id: 1) seçili yap
        if (!PlayerPrefs.HasKey("SelectedCharacterID"))
        {
            PlayerPrefs.SetInt("SelectedCharacterID", 1);
            PlayerPrefs.Save();
        }

        UpdateUI();
    }

private void Update()
    {
        // Animasyon Motoru
        if (heroList != null && heroList.Count > 0 && characterDisplayImage != null)
        {
            HeroData currentHero = heroList[currentIndex];
            if (currentHero.animFrames != null && currentHero.animFrames.Length > 0)
            {
                animTimer += Time.unscaledDeltaTime; 
                
                if (animTimer >= animSpeed)
                {
                    animTimer = 0f;
                    animIndex = (animIndex + 1) % currentHero.animFrames.Length;
                    characterDisplayImage.sprite = currentHero.animFrames[animIndex];
                }
            }
        }
    }

    public void UpdateUI()
    {
        if (dataManager != null && totalCoinsText != null)
            totalCoinsText.text = dataManager.TotalCoins.ToString();

        if (heroList != null && heroList.Count > 0)
        {
            HeroData currentHero = heroList[currentIndex];
            
            if (characterNameText != null) characterNameText.text = currentHero.heroName;
            if (characterDescText != null) characterDescText.text = currentHero.description;
            
            if (characterDisplayImage != null)
            {
                if (currentHero.animFrames != null && currentHero.animFrames.Length > 0)
                    characterDisplayImage.sprite = currentHero.animFrames[0];
                else if (currentHero.image != null)
                    characterDisplayImage.sprite = currentHero.image;
            }

            // --- KİLİT VE BUTON MANTIĞI ---
            bool isUnlocked = IsCurrentCharacterUnlocked();

            // Kilit ikonunu açık/kapalı yap
            if (kilitIkonu != null)
            {
                kilitIkonu.SetActive(!isUnlocked); 
            }

            if (selectButton != null && selectButtonText != null)
            {
                selectButton.interactable = true; 
                int savedId = PlayerPrefs.GetInt("SelectedCharacterID", 1); 
                
                if (isUnlocked)
                {
                    if (currentHero.Id == savedId)
                    {
                        selectButtonText.text = "Seçildi";
                    }
                    else
                    {
                        selectButtonText.text = "Seç";
                    }
                }
                else
                {
                    // Kilitliyse fiyatı yazdır
                    int price = characterPrices.ContainsKey(currentHero.Id) ? characterPrices[currentHero.Id] : 9999;
                    selectButtonText.text = $"{price} Altın ile Aç";
                }
            }
        }
    }

    public void NextCharacter()
    {
        if (heroList == null || heroList.Count == 0) return;
        currentIndex = (currentIndex + 1) % heroList.Count;
        animIndex = 0; 
        UpdateUI();
    }

    public void PreviousCharacter()
    {
        if (heroList == null || heroList.Count == 0) return;
        currentIndex = (currentIndex - 1 + heroList.Count) % heroList.Count;
        animIndex = 0; 
        UpdateUI();
    }

    public void SelectCurrentCharacter()
    {
        if (heroList == null || heroList.Count == 0) return;
        
        HeroData currentHero = heroList[currentIndex];

        if (IsCurrentCharacterUnlocked())
        {
            // --- 1. DURUM: KARAKTER AÇIKSA SEÇ VE HARİTAYA GEÇ ---
            PlayerPrefs.SetInt("SelectedCharacterID", currentHero.Id);
            PlayerPrefs.Save();
            
            UpdateUI();

            if (characterSelectionPanel != null) characterSelectionPanel.SetActive(false);
            
            if (bolumSecimPanel != null) 
            {
                bolumSecimPanel.SetActive(true);
                bolumSecimPanel.GetComponent<BolumSecimLogic>()?.HaritayiYenile();
            }
            else
            {
                MainMenuLogic mainMenu = FindFirstObjectByType<MainMenuLogic>();
                if (mainMenu != null) mainMenu.OnOpenBolumSecimPanel();
            }
        }
        else
        {
            // --- 2. DURUM: KARAKTER KİLİTLİYSE SATIN ALMA İŞLEMİ ---
            int price = characterPrices.ContainsKey(currentHero.Id) ? characterPrices[currentHero.Id] : 9999;
            
            if (dataManager != null && dataManager.SpendCoins(price))
            {
                // Altın yettiyse kilidi aç ve otomatik olarak onu "Seçili" yap
                dataManager.UnlockCharacter(currentHero.Id);
                PlayerPrefs.SetInt("SelectedCharacterID", currentHero.Id);
                PlayerPrefs.Save();
                
                ToastNotificationService.Show($"🎉 Tebrikler! {currentHero.heroName} aramıza katıldı!", ToastNotificationService.ToastType.Success);
                UpdateUI(); // Ekranı yenile, kilit kaybolsun, buton "Seçildi" olsun
            }
            else
            {
                ToastNotificationService.Show($"Yetersiz Altın! {currentHero.heroName} için {price} Altın gerekiyor.", ToastNotificationService.ToastType.Warning);
                Debug.LogWarning("Yetersiz Altın!");
            }
        }
    }

    public bool IsCurrentCharacterUnlocked()
    {
        if (heroList == null || heroList.Count == 0) return false;
        
        // Güvenlik: Tilki'nin (ID = 1) kilidi her zaman açık kalsın
        if (heroList[currentIndex].Id == 1) return true;

        return dataManager.IsCharacterUnlocked(heroList[currentIndex].Id);
    }

    public void OnBackClicked()
    {
        if (characterSelectionPanel != null) characterSelectionPanel.SetActive(false);
        
        MainMenuLogic mainMenu = FindFirstObjectByType<MainMenuLogic>();
        if (mainMenu != null)
        {
            mainMenu.OnCloseCharacterSelection();
        }
        else if (mainMenuPanel != null)
        {
            mainMenuPanel.SetActive(true);
        }
        else
        {
            // Panel referansı boşsa sahne içindeki objeyi ara veya fallback sahne yükle
            GameObject menu = GameObject.Find("MainMenuPanel");
            if (menu != null) menu.SetActive(true);
            else SceneManager.LoadScene("MainMenuScene");
        }
    }

   public void KarakterSecimineDon()
    {
        if (bolumSecimPanel != null) bolumSecimPanel.SetActive(false);
        if (characterSelectionPanel != null) 
        {
            characterSelectionPanel.SetActive(true);
            
            // YENİ EKLENEN KISIM: Animasyon motorunu uykudan uyandır ve sıfırla!
            animTimer = 0f;
            animIndex = 0;
            
            // Zaman durmuşsa (Time.timeScale = 0 ise Update çalışmaz) onu da kesinlikle düzelt:
            Time.timeScale = 1f; 
        }
    }
}