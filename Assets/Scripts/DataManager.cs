using UnityEngine;
using System.Collections.Generic;
using System.Linq;

public class DataManager : MonoBehaviour
{
    private const string KEY_TOTAL_COINS = "total_coins";
    private const string KEY_HIGH_SCORE = "high_score";
    private const string KEY_LAST_SCORES = "last_scores";

    // --- BÖLÜM (LEVEL) SİSTEMİ ---
    public enum LevelState
    {
        Locked = 0,       // Erişime kapalı
        QrRequired = 1,   // Açılması için QR okutulmalı
        Unlocked = 2,     // Doğrudan oynanabilir (QR taranmış veya İlk bölüm)
        Completed = 3     // Bölüm bitirilmiş
    }

    [Header("Geliştirici Ayarları")]
    [Tooltip("Bunu İŞARETLEYİP oyunu başlatırsanız cihazdaki hatalı kayıtları siler, bölümleri ve satın alınan karakterleri sıfırlar.")]
    public bool kayitlariZorlaSifirla = false;

    private void Awake()
    {
        // EĞER KUTUCUK İŞARETLİYSE GEÇMİŞİ DİREKT EZER (NÜKLEER SIFIRLAMA)
        if (kayitlariZorlaSifirla)
        {
            // 1. Bölüm (İndeks 0) kesin açık
            SetLevelState(0, LevelState.Unlocked); 
            
            // 2'den 10'a kadar olan bölümler (İndeks 1 ile 9 arası) KESİN KİLİTLİ
            for (int i = 1; i <= 9; i++)
            {
                SetLevelState(i, LevelState.Locked);
            }

            // Satın alınan karakterleri de sıfırla ki mağaza testi yapılabilsin
            PlayerPrefs.DeleteKey("SelectedCharacterID");
            for (int i = 2; i <= 10; i++)
            {
                PlayerPrefs.DeleteKey($"unlocked_char_{i}");
            }
            
            PlayerPrefs.Save();
            Debug.LogWarning("NÜKLEER SIFIRLAMA YAPILDI: 1. Bölüm ve Tilki hariç her şey kilitlendi! Lütfen Inspector'dan tiki kaldırın.");
        }
        else
        {
            // Kutucuk işaretli değilse normal kontrolleri yap
            InitializeDefaultLevels();
        }
    }

    private void InitializeDefaultLevels()
    {
        // Oyun ilk kez açıldığında çalışacak kısım (0. indeks = 1. bölüm)
        if (!PlayerPrefs.HasKey("LevelState_0"))
        {
            SetLevelState(0, LevelState.Unlocked); // SADECE 1. BÖLÜM AÇIK

            // İndeks 1'den 9'a kadar (Yani 2. ve 10. bölümler arası) kilitli
            for (int i = 1; i <= 9; i++)
            {
                SetLevelState(i, LevelState.Locked);
            }
        }
    }
    
    public void SetLevelState(int levelIndex, LevelState state)
    {
        PlayerPrefs.SetInt("LevelState_" + levelIndex, (int)state);
        PlayerPrefs.Save();
    }

    public LevelState GetLevelState(int levelIndex)
    {
        // Veri yoksa güvenlik için Locked (0) döndürür
        return (LevelState)PlayerPrefs.GetInt("LevelState_" + levelIndex, 0);
    }
    // ------------------------------------------

    public int TotalCoins
    {
        get => PlayerPrefs.GetInt(KEY_TOTAL_COINS, 0);
        set
        {
            PlayerPrefs.SetInt(KEY_TOTAL_COINS, value);
            PlayerPrefs.Save();
        }
    }

    public void AddCoins(int amount)
    {
        TotalCoins += amount;
    }

    public bool SpendCoins(int amount)
    {
        if (TotalCoins >= amount)
        {
            TotalCoins -= amount;
            return true;
        }
        return false;
    }

    public bool SpendCoins(GamePreferences gamePrefs, int amount)
    {
        if (gamePrefs != null && gamePrefs.TotalScore >= amount)
        {
            gamePrefs.AddScore(-amount);
            return true;
        }
        return false;
    }

    public int HighScore
    {
        get => PlayerPrefs.GetInt(KEY_HIGH_SCORE, 0);
    }

    public void SaveHighScore(int score)
    {
        if (score > HighScore)
        {
            PlayerPrefs.SetInt(KEY_HIGH_SCORE, score);
            PlayerPrefs.Save();
        }
    }

    public List<int> GetLastScores()
    {
        string scoreStr = PlayerPrefs.GetString(KEY_LAST_SCORES, "");
        if (string.IsNullOrEmpty(scoreStr))
        {
            return new List<int>();
        }
        
        return scoreStr.Split(',')
            .Where(s => int.TryParse(s, out _))
            .Select(int.Parse)
            .ToList();
    }

    public void SaveLastScore(int score)
    {
        List<int> scores = GetLastScores();
        scores.Insert(0, score);
        
        if (scores.Count > 10)
        {
            scores = scores.Take(10).ToList();
        }

        PlayerPrefs.SetString(KEY_LAST_SCORES, string.Join(",", scores));
        PlayerPrefs.Save();
    }

    public bool IsCharacterUnlocked(int characterId)
    {
        // ID'si 1 olan karakter (Tilki) her zaman ücretsiz ve açıktır
        if (characterId == 1) return true; 
        
        return PlayerPrefs.GetInt($"unlocked_char_{characterId}", 0) == 1;
    }

    public void UnlockCharacter(int characterId)
    {
        PlayerPrefs.SetInt($"unlocked_char_{characterId}", 1);
        PlayerPrefs.Save();
    }
}