using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections.Generic;

[System.Serializable]
public class BadgeItem
{
    public string title;
    public string description;
    public bool isUnlocked;
    public Color tintColor;
}

public class BadgePoolLogic : MonoBehaviour
{
    [SerializeField] private DataManager dataManager;

    private int highScore;
    private int totalCoins;
    private bool hasMonkey;
    private bool hasTiger;

    public List<BadgeItem> dynamicBadges = new List<BadgeItem>();

    private void Start()
    {
        if (dataManager != null)
        {
            highScore = dataManager.HighScore;
            totalCoins = dataManager.TotalCoins;
            hasMonkey = dataManager.IsCharacterUnlocked(2);
            hasTiger = dataManager.IsCharacterUnlocked(3);
        }

        GenerateBadges();
        UpdateUI();
    }

    private void GenerateBadges()
    {
        dynamicBadges.Clear();
        
        // 1. Acemi Koşucu
        dynamicBadges.Add(new BadgeItem { title = "Acemi Koşucu", description = "500 Puan barajını geç.", isUnlocked = highScore >= 500, tintColor = new Color(0.803f, 0.498f, 0.196f) }); // Bronze
        
        // 2. Orman İzcisi
        dynamicBadges.Add(new BadgeItem { title = "Orman İzcisi", description = "1.500 Puan barajını geç.", isUnlocked = highScore >= 1500, tintColor = new Color(0.878f, 0.878f, 0.878f) }); // Silver
        
        // 3. Efsanevi
        dynamicBadges.Add(new BadgeItem { title = "Efsanevi", description = "3.000 Puan barajını geç.", isUnlocked = highScore >= 3000, tintColor = new Color(1f, 0.843f, 0f) }); // Gold
        
        // 4. Tasarruf
        dynamicBadges.Add(new BadgeItem { title = "Tasarruf", description = "Kasanda 200 Altın biriktir.", isUnlocked = totalCoins >= 200, tintColor = new Color(0.298f, 0.686f, 0.313f) }); // Green
        
        // 5. Zengin
        dynamicBadges.Add(new BadgeItem { title = "Zengin", description = "Kasanda 1.000 Altın biriktir.", isUnlocked = totalCoins >= 1000, tintColor = new Color(0.298f, 0.686f, 0.313f) });
        
        // 6. Koleksiyoner
        dynamicBadges.Add(new BadgeItem { title = "Koleksiyoner", description = "Tüm karakterleri aç.", isUnlocked = hasMonkey && hasTiger, tintColor = new Color(0.611f, 0.152f, 0.69f) }); // Purple
    }

    private void UpdateUI()
    {
        // Typically updates the UI Grid displaying the badges based on dynamicBadges list
    }

    public void OnNavigateBack()
    {
        gameObject.SetActive(false);
        MainMenuLogic menu = FindFirstObjectByType<MainMenuLogic>();
        if (menu != null) menu.UpdateUI();
    }
}
