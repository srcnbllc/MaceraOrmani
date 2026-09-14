using UnityEngine;
using System.Collections.Generic;

public class GamePreferences : MonoBehaviour
{
    private const string KEY_SELECTED_CHARACTER = "selected_character";
    private const string KEY_TOTAL_SCORE = "total_score";
    private const string KEY_TUTORIAL_SHOWN = "tutorial_shown";
    private const string KEY_MUSIC_ENABLED = "music_enabled";
    private const string KEY_SFX_ENABLED = "sfx_enabled";
    private const string KEY_UNLOCKED_CHAPTER = "unlocked_chapter";
    private const string KEY_TENT_LEVEL = "tent_level";
    private const string KEY_CAMPFIRE_LEVEL = "campfire_level";
    private const string KEY_DUMMY_LEVEL = "dummy_level";
    private const string KEY_LANGUAGE = "current_language";

    public int SelectedCharacter
    {
        get => PlayerPrefs.GetInt(KEY_SELECTED_CHARACTER, 1);
        set
        {
            PlayerPrefs.SetInt(KEY_SELECTED_CHARACTER, value);
            PlayerPrefs.Save();
        }
    }

    public int TotalScore
    {
        get => PlayerPrefs.GetInt(KEY_TOTAL_SCORE, 0);
        set
        {
            PlayerPrefs.SetInt(KEY_TOTAL_SCORE, value);
            PlayerPrefs.Save();
        }
    }

    public bool IsTutorialShown
    {
        get => PlayerPrefs.GetInt(KEY_TUTORIAL_SHOWN, 0) == 1;
        set
        {
            PlayerPrefs.SetInt(KEY_TUTORIAL_SHOWN, value ? 1 : 0);
            PlayerPrefs.Save();
        }
    }

    public bool IsMusicEnabled
    {
        get => PlayerPrefs.GetInt(KEY_MUSIC_ENABLED, 1) == 1;
        set
        {
            PlayerPrefs.SetInt(KEY_MUSIC_ENABLED, value ? 1 : 0);
            PlayerPrefs.Save();
        }
    }

    public bool IsSfxEnabled
    {
        get => PlayerPrefs.GetInt(KEY_SFX_ENABLED, 1) == 1;
        set
        {
            PlayerPrefs.SetInt(KEY_SFX_ENABLED, value ? 1 : 0);
            PlayerPrefs.Save();
        }
    }

    public string CurrentLanguage
    {
        get => PlayerPrefs.GetString(KEY_LANGUAGE, "TR");
        set
        {
            PlayerPrefs.SetString(KEY_LANGUAGE, value);
            PlayerPrefs.Save();
        }
    }

    public int UnlockedChapter
    {
        get => PlayerPrefs.GetInt(KEY_UNLOCKED_CHAPTER, 1);
    }

    public void UnlockChapter(int chapterId)
    {
        int currentMax = UnlockedChapter;
        int clamped = Mathf.Min(chapterId, 10);
        if (clamped > currentMax)
        {
            PlayerPrefs.SetInt(KEY_UNLOCKED_CHAPTER, clamped);
            PlayerPrefs.Save();
        }
    }

    public void AddScore(int points)
    {
        TotalScore += points;
    }

    public bool IsLevelCompleted(int levelId)
    {
        return PlayerPrefs.GetInt($"level_{levelId}_completed", 0) == 1;
    }

    public int GetLevelStars(int levelId)
    {
        return PlayerPrefs.GetInt($"level_{levelId}_stars", 0);
    }

    public int GetLevelBestScore(int levelId)
    {
        return PlayerPrefs.GetInt($"level_{levelId}_best_score", 0);
    }

    public void SetLevelResult(int levelId, int starsEarned, int score)
    {
        int safeStars = Mathf.Clamp(starsEarned, 0, 3);
        int currentStars = GetLevelStars(levelId);
        int currentBest = GetLevelBestScore(levelId);

        PlayerPrefs.SetInt($"level_{levelId}_completed", 1);
        PlayerPrefs.SetInt($"level_{levelId}_stars", Mathf.Max(currentStars, safeStars));
        PlayerPrefs.SetInt($"level_{levelId}_best_score", Mathf.Max(currentBest, score));
        PlayerPrefs.Save();
    }

    // Badge system: PlayerPrefs doesn't support string sets natively. We can use a comma-separated string.
    public HashSet<string> GetBadges()
    {
        string badgesStr = PlayerPrefs.GetString("badges", "");
        if (string.IsNullOrEmpty(badgesStr)) return new HashSet<string>();
        return new HashSet<string>(badgesStr.Split(','));
    }

    public void AddBadge(string badgeId)
    {
        HashSet<string> badges = GetBadges();
        if (badges.Add(badgeId))
        {
            PlayerPrefs.SetString("badges", string.Join(",", badges));
            PlayerPrefs.Save();
        }
    }

    // Camp System
    public int TentLevel
    {
        get => PlayerPrefs.GetInt(KEY_TENT_LEVEL, 0);
        set
        {
            PlayerPrefs.SetInt(KEY_TENT_LEVEL, Mathf.Clamp(value, 0, 2));
            PlayerPrefs.Save();
        }
    }

    public int CampfireLevel
    {
        get => PlayerPrefs.GetInt(KEY_CAMPFIRE_LEVEL, 0);
        set
        {
            PlayerPrefs.SetInt(KEY_CAMPFIRE_LEVEL, value);
            PlayerPrefs.Save();
        }
    }

    public int DummyLevel
    {
        get => PlayerPrefs.GetInt(KEY_DUMMY_LEVEL, 0);
        set
        {
            PlayerPrefs.SetInt(KEY_DUMMY_LEVEL, value);
            PlayerPrefs.Save();
        }
    }

    public int GetCharacterShieldUpgradeLevel(int characterId)
    {
        return PlayerPrefs.GetInt($"shield_upgrade_char_{characterId}", 0);
    }

    public bool UpgradeCharacterShield(int characterId)
    {
        int currentLevel = GetCharacterShieldUpgradeLevel(characterId);
        if (currentLevel < 8)
        {
            PlayerPrefs.SetInt($"shield_upgrade_char_{characterId}", currentLevel + 1);
            PlayerPrefs.Save();
            return true;
        }
        return false;
    }
}
