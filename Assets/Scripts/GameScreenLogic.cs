using UnityEngine;
using System.Collections.Generic;

public class GameScreenLogic : MonoBehaviour
{
    [Header("Dependencies")]
    [SerializeField] private DataManager dataManager;
    [SerializeField] private GamePreferences gamePrefs;
    [SerializeField] private SoundManager soundManager;
    [SerializeField] private GameModels gameModels;

    [Header("State Variables")]
    public bool isPlaying = false;
    public bool isGameOver = false;
    public bool isPaused = false;
    
    public int score = 0;
    public int collectedCoins = 0;

    [Header("Hero Settings")]
    public int currentCharacterId = 1;
    private HeroData currentHero;
    
    [Header("Physics & Movement")]
    public float charY = 0f;
    public float velocityY = 0f;
    public float gravity = 1.6f;
    private float baseJumpStrength;
    private float baseSpeed;
    private float effectiveGameSpeed;

    [Header("Abilities & Powerups")]
    public bool isSliding = false;
    private int slideTimer = 0;
    
    public int maxShieldUses;
    public int shieldUsesLeft;
    public bool isShieldActive = false;
    public int shieldTimer = 0;
    
    public bool isInvincible = false;
    public int invincibilityTimer = 0;
    
    private int campfireLevel;
    private int dummyLevel;

    private void Start()
    {
        InitializeGame();
    }

    public void InitializeGame()
    {
        currentHero = gameModels.GetCharacterById(currentCharacterId);
        if (currentHero == null) return;

        baseJumpStrength = 22f + (currentHero.jumpStars * 1.5f);
        baseSpeed = 5f + (currentHero.speedStars * 0.4f);

        int baseShields = currentHero.durabilityStars >= 4 ? 1 : 0;
        maxShieldUses = baseShields + gamePrefs.TentLevel;
        shieldUsesLeft = maxShieldUses;
        
        campfireLevel = gamePrefs.CampfireLevel;
        dummyLevel = gamePrefs.DummyLevel;
        
        score = 0;
        collectedCoins = 0;
        charY = 0f;
        velocityY = 0f;
        isSliding = false;
        isShieldActive = false;
        isInvincible = false;
        isGameOver = false;
    }

    public void StartRunning()
    {
        isPlaying = true;
    }

    private void FixedUpdate()
    {
        if (!isPlaying || isGameOver || isPaused) return;

        // Speed calculation
        float speedIncreaseFactor = 1f + (score / 150f);
        effectiveGameSpeed = baseSpeed * speedIncreaseFactor;

        // Timers
        if (isInvincible)
        {
            invincibilityTimer--;
            if (invincibilityTimer <= 0) isInvincible = false;
        }

        if (isShieldActive)
        {
            shieldTimer--;
            if (shieldTimer <= 0) isShieldActive = false;
        }

        if (isSliding)
        {
            slideTimer--;
            if (slideTimer <= 0) isSliding = false;
        }

        // Gravity & Jump Physics
        if (charY > 0f || velocityY > 0f)
        {
            charY += velocityY;
            velocityY -= gravity;
            if (charY <= 0f)
            {
                charY = 0f;
                velocityY = 0f;
            }
        }
        
        // Note: Obstacle spawning and movement logic would typically be handled 
        // by a separate Spawner/ObjectPool component in Unity, but the variables
        // are controlled by effectiveGameSpeed here.
    }

    // Input actions mapped from UI/Gestures
    public void OnSwipeUp()
    {
        if (isPlaying && !isGameOver && !isPaused && charY == 0f)
        {
            velocityY = baseJumpStrength;
            isSliding = false;
            soundManager.PlayJump();
        }
    }

    public void OnSwipeDown()
    {
        if (isPlaying && !isGameOver && !isPaused && charY == 0f && !isSliding)
        {
            isSliding = true;
            slideTimer = 35; // Frames based on FixedUpdate
        }
    }

    public void ActivateShield()
    {
        if (shieldUsesLeft > 0 && !isShieldActive)
        {
            shieldUsesLeft--;
            isShieldActive = true;
            shieldTimer = 1200 + (campfireLevel * 300); // Frame based
        }
    }

    public void OnPause()
    {
        if (isPlaying && !isGameOver)
        {
            isPlaying = false;
            isPaused = true;
        }
    }

    public void OnResume()
    {
        isPaused = false;
        isPlaying = true;
    }

    public void OnCoinCollected()
    {
        collectedCoins++;
        score += 5;
        soundManager.PlayCollect();
    }

    public void OnObstacleHit()
    {
        if (isInvincible) return;

        if (isShieldActive)
        {
            isShieldActive = false;
            shieldTimer = 0;
            isInvincible = true;
            invincibilityTimer = 45;
            soundManager.PlayJump();
        }
        else
        {
            GameOver();
        }
    }

    private void GameOver()
    {
        isPlaying = false;
        isGameOver = true;
        soundManager.StopBackgroundMusic();
        soundManager.PlayGameOver();
        
        // Check Highscore
        if (score > dataManager.HighScore)
        {
            Debug.Log("YENİ REKOR!");
        }
    }

    public void OnReturnToMenu()
    {
        dataManager.AddCoins(collectedCoins);
        dataManager.SaveHighScore(score);
        dataManager.SaveLastScore(score);
        
        // SceneManager.LoadScene("MainMenuScene");
    }

    public void OnRestartGame()
    {
        dataManager.AddCoins(collectedCoins);
        dataManager.SaveHighScore(score);
        dataManager.SaveLastScore(score);
        InitializeGame();
        StartRunning();
    }
}
