using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;
using System.Collections;

public class RewardScreenLogic : MonoBehaviour
{
    [Header("Managers")]
    [SerializeField] private DataManager dataManager;
    
    [Header("Reward State")]
    public int score;
    public int stars;
    public bool isVictory = true;
    public int characterId = 1;
    public string chapterName = "";

    [Header("UI Feedback")]
    public System.Action<int> OnStarEarned; // Emits 1, 2, or 3 as stars appear

    public void Initialize(int score, int stars, bool isVictory, int characterId, string chapterName)
    {
        this.score = score;
        this.stars = stars;
        this.isVictory = isVictory;
        this.characterId = characterId;
        this.chapterName = chapterName;
        
        if (isVictory)
        {
            StartCoroutine(ShowStarsRoutine());
        }
    }

    private IEnumerator ShowStarsRoutine()
    {
        yield return new WaitForSeconds(0.4f);
        if (stars >= 1) OnStarEarned?.Invoke(1);
        
        yield return new WaitForSeconds(0.4f);
        if (stars >= 2) OnStarEarned?.Invoke(2);
        
        yield return new WaitForSeconds(0.4f);
        if (stars >= 3) OnStarEarned?.Invoke(3);
    }

    public void OnNextLevel()
    {
        Time.timeScale = 1f;
        int suankiID = PlayerPrefs.GetInt("SecilenBolumID", 1);
        if (suankiID < 10)
        {
            PlayerPrefs.SetInt("SecilenBolumID", suankiID + 1);
            PlayerPrefs.Save();
            SceneManager.LoadScene("GameScene");
        }
        else
        {
            OnMap();
        }
    }

    public void OnMap()
    {
        Time.timeScale = 1f;
        PlayerPrefs.SetInt("BolumPaneliAc", 1);
        PlayerPrefs.Save();
        SceneManager.LoadScene("MainMenuScene");
    }

    public void OnReplay()
    {
        Time.timeScale = 1f;
        SceneManager.LoadScene("GameScene");
    }
}
