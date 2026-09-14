using UnityEngine;
using UnityEngine.SceneManagement;

public class TutorialLogic : MonoBehaviour
{
    [SerializeField] private GamePreferences gamePrefs;

    public void OnCompleteTutorial()
    {
        if (gamePrefs != null)
        {
            gamePrefs.IsTutorialShown = true;
        }
        
        // Go back or proceed to game
        Time.timeScale = 1f;
        SceneManager.LoadScene("MainMenuScene");
    }
}
