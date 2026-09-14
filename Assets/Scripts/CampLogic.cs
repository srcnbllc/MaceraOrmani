using UnityEngine;
using TMPro;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class CampLogic : MonoBehaviour
{
    [Header("Managers")]
    [SerializeField] private DataManager dataManager;
    [SerializeField] private GamePreferences gamePrefs;

    [Header("Top UI Elements")]
    [SerializeField] private TextMeshProUGUI totalCoinsText;

    [Header("Upgrade Values")]
    public int maxTentLevel = 2;
    public int maxCampfireLevel = 8;
    public int maxDummyLevel = 5;

    public int tentLevel;
    public int campfireLevel;
    public int dummyLevel;

    [Header("Kart Referansları (Dinlenme Çadırı)")]
    [SerializeField] private GameObject tentLockedOverlay;
    [SerializeField] private Button tentUpgradeButton;
    [SerializeField] private TextMeshProUGUI tentCostText;

    [Header("Kart Referansları (Kamp Ateşi)")]
    [SerializeField] private GameObject campfireLockedOverlay;
    [SerializeField] private Button campfireUpgradeButton;
    [SerializeField] private TextMeshProUGUI campfireCostText;

    [Header("Kart Referansları (Eğitim Kuklası)")]
    [SerializeField] private GameObject dummyLockedOverlay;
    [SerializeField] private Button dummyUpgradeButton;
    [SerializeField] private TextMeshProUGUI dummyCostText;

    private void Start()
    {
        UpdateData();
    }

    private void OnEnable()
    {
        UpdateData();
    }

    private void UpdateData()
    {
        if (dataManager != null)
        {
            if (totalCoinsText != null)
            {
                totalCoinsText.text = dataManager.TotalCoins.ToString();
            }
        }
        
        if (gamePrefs != null)
        {
            tentLevel = gamePrefs.TentLevel;
            campfireLevel = gamePrefs.CampfireLevel;
            dummyLevel = gamePrefs.DummyLevel;
        }

        UpdateCardsUI();
    }

    // Kartların kilit ve buton durumlarını günceller
    private void UpdateCardsUI()
    {
        int playerGold = dataManager != null ? dataManager.TotalCoins : 0;

        // 1. DİNLENME ÇADIRI (Her zaman açık - Kilit overlay'i hep kapalı)
        if (tentLockedOverlay != null) tentLockedOverlay.SetActive(false);
        UpdateSingleCardUI(tentLevel, maxTentLevel, GetTentUpgradeCost(), playerGold, tentUpgradeButton, tentCostText);

        // 2. KAMP ATEŞİ (Çadır level 1 ve üstüyse açılır)
        bool isCampfireUnlocked = tentLevel > 0;
        if (campfireLockedOverlay != null) campfireLockedOverlay.SetActive(!isCampfireUnlocked);
        if (isCampfireUnlocked)
            UpdateSingleCardUI(campfireLevel, maxCampfireLevel, GetCampfireUpgradeCost(), playerGold, campfireUpgradeButton, campfireCostText);
        else
            DisableCardUI(campfireUpgradeButton, campfireCostText);

        // 3. EĞİTİM KUKLASI (Kamp Ateşi level 1 ve üstüyse açılır)
        bool isDummyUnlocked = campfireLevel > 0;
        if (dummyLockedOverlay != null) dummyLockedOverlay.SetActive(!isDummyUnlocked);
        if (isDummyUnlocked)
            UpdateSingleCardUI(dummyLevel, maxDummyLevel, GetDummyUpgradeCost(), playerGold, dummyUpgradeButton, dummyCostText);
        else
            DisableCardUI(dummyUpgradeButton, dummyCostText);
    }

    // Açık olan kartın buton ve fiyat durumunu ayarlar
    private void UpdateSingleCardUI(int currentLevel, int maxLevel, int cost, int playerGold, Button btn, TextMeshProUGUI costText)
    {
        if (btn == null || costText == null) return;

        if (currentLevel >= maxLevel)
        {
            btn.interactable = false;
            costText.text = "MAKSİMUM";
            costText.color = Color.white;
        }
        else
        {
            // Yazıyı senin sarı resimdeki gibi düzelttik (Küçük harflerle)
            costText.text = cost.ToString() + " Geliştir";
            
            // Para yetiyorsa buton aktif, yetmiyorsa pasif
            if (playerGold >= cost)
            {
                btn.interactable = true;
                // Rengi o istediğin sarı tona (Altın Sarısı) getiriyoruz
                costText.color = new Color(1f, 0.8f, 0f); 
            }
            else
            {
                btn.interactable = false;
                // Oyuncunun parası yetmediğinde yazının KIRMIZI olmasını sağlayan kısım burası.
                // Eğer "hayır, param yetmese de yazı hep sarı kalsın" dersen Color.red yazan yeri silip 
                // onun yerine de new Color(1f, 0.8f, 0f); yazabilirsin.
                costText.color = Color.red;
            }
        }
    }
    // Kilitli olan kartın butonunu ve fiyat yazısını pasif hale getirir
    private void DisableCardUI(Button btn, TextMeshProUGUI costText)
    {
        if (btn != null) btn.interactable = false;
        if (costText != null)
        {
            costText.text = "KİLİTLİ";
            costText.color = Color.gray;
        }
    }

    // --- FİYAT HESAPLAMALARI ---
    public int GetTentUpgradeCost()
    {
        return (tentLevel == 0) ? 500 : 1000;
    }

    public int GetCampfireUpgradeCost()
    {
        return 750 + (campfireLevel * 100);
    }

    public int GetDummyUpgradeCost()
    {
        return (dummyLevel + 1) * 300;
    }

    // --- BUTON TETİKLEYİCİLERİ ---
    public void UpgradeTent()
    {
        if (tentLevel >= maxTentLevel) return;

        int cost = GetTentUpgradeCost();
        if (dataManager != null && dataManager.SpendCoins(cost))
        {
            if (gamePrefs != null) gamePrefs.TentLevel = tentLevel + 1;
            UpdateData();
            ToastNotificationService.Show($"⛺ Çadır Seviye {tentLevel}'ye Yükseltildi! (+1 Can)", ToastNotificationService.ToastType.Success);
            Debug.Log("Çadır Geliştirildi!");
        }
        else
        {
            ToastNotificationService.Show("Yetersiz Altın! Koşuya çıkıp altın toplayabilirsiniz.", ToastNotificationService.ToastType.Warning);
            Debug.Log("Yetersiz Altın!");
        }
    }

    public void UpgradeCampfire()
    {
        if (tentLevel == 0) return; // UI kilitli olsa da güvenlik kontrolü
        if (campfireLevel >= maxCampfireLevel) return;

        int cost = GetCampfireUpgradeCost();
        if (dataManager != null && dataManager.SpendCoins(cost))
        {
            if (gamePrefs != null) gamePrefs.CampfireLevel = campfireLevel + 1;
            UpdateData();
            ToastNotificationService.Show($"🔥 Kamp Ateşi Seviye {campfireLevel}'ye Yükseltildi! (Altın Çarpanı Arttı)", ToastNotificationService.ToastType.Success);
            Debug.Log("Ateş Güçlendirildi!");
        }
        else
        {
            ToastNotificationService.Show("Yetersiz Altın! Koşuya çıkıp altın toplayabilirsiniz.", ToastNotificationService.ToastType.Warning);
        }
    }

    public void UpgradeDummy()
    {
        if (campfireLevel == 0) return; // Güvenlik kontrolü
        if (dummyLevel >= maxDummyLevel) return;

        int cost = GetDummyUpgradeCost();
        if (dataManager != null && dataManager.SpendCoins(cost))
        {
            if (gamePrefs != null) gamePrefs.DummyLevel = dummyLevel + 1;
            UpdateData();
            ToastNotificationService.Show($"🎯 Eğitim Kuklası Seviye {dummyLevel}'ye Yükseltildi! (+Akrobasi Puanı)", ToastNotificationService.ToastType.Success);
            Debug.Log("Kukla Geliştirildi!");
        }
        else
        {
            ToastNotificationService.Show("Yetersiz Altın! Koşuya çıkıp altın toplayabilirsiniz.", ToastNotificationService.ToastType.Warning);
        }
    }

    public void OnNavigateBack()
    {
        MainMenuLogic menu = FindFirstObjectByType<MainMenuLogic>();
        if (menu != null)
        {
            menu.OnCloseCampPanel();
            menu.UpdateUI();
        }
        else
        {
            gameObject.SetActive(false);
        }
    }
}