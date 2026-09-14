using UnityEngine;

public class GameManager : MonoBehaviour
{
    [SerializeField] private GamePreferences preferences;
    
    // In Unity, instead of Kotlin Flow, we can use events or standard properties
    public System.Action<int> OnCharacterSelected;
    public System.Action<int> OnChapterUnlocked;
    public System.Action<int> OnScoreUpdated;

    public int SelectedCharacter => preferences.SelectedCharacter;
    public int UnlockedChapter => preferences.UnlockedChapter;
    public int TotalScore => preferences.TotalScore;

    public void SelectCharacter(int id)
    {
        preferences.SelectedCharacter = id;
        OnCharacterSelected?.Invoke(id);
    }

    public void UnlockChapter(int id)
    {
        preferences.UnlockChapter(id);
        OnChapterUnlocked?.Invoke(id);
    }

    public void AddScore(int points)
    {
        preferences.AddScore(points);
        OnScoreUpdated?.Invoke(preferences.TotalScore);
    }
}
