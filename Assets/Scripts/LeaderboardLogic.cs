using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;
using System.Collections.Generic;

public class LeaderboardLogic : MonoBehaviour
{
    [SerializeField] private DataManager dataManager;
    
    // Using string instead of TextMeshProUGUI for flexibility, but normally we'd link to UI text fields or prefabs
    [SerializeField] private TextMeshProUGUI highScoreText;

    private List<int> lastScores;
    private int highScore;

    private void Start()
    {
        if (dataManager != null)
        {
            highScore = dataManager.HighScore;
            lastScores = dataManager.GetLastScores();
        }

        UpdateUI();
    }

    private void UpdateUI()
    {
        if (highScoreText != null)
        {
            highScoreText.text = highScore.ToString();
        }
        
        // The list of last 10 scores would typically be populated dynamically via a ScrollView + Prefabs
        // This is where you would instantiate score rows in Unity UI
    }

    public List<int> GetLastScores()
    {
        return lastScores;
    }

    public int GetHighScore()
    {
        return highScore;
    }

    public void OnNavigateBack()
    {
        gameObject.SetActive(false);
        MainMenuLogic menu = FindFirstObjectByType<MainMenuLogic>();
        if (menu != null) menu.UpdateUI();
    }
}
