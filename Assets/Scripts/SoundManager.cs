using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public static SoundManager Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = FindFirstObjectByType<SoundManager>();
            }
            return _instance;
        }
        private set => _instance = value;
    }
    private static SoundManager _instance;

    [SerializeField] private GamePreferences gamePrefs;
    
    [Header("Audio Sources")]
    [SerializeField] private AudioSource sfxSource;
    [SerializeField] private AudioSource musicSource;

    [Header("SFX Clips")]
    [SerializeField] private AudioClip jumpSound;
    [SerializeField] private AudioClip collectSound;
    [SerializeField] private AudioClip gameOverSound;

    private void Awake()
    {
        if (_instance == null)
        {
            _instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else if (_instance != this)
        {
            Destroy(gameObject);
            return;
        }

        if (sfxSource == null) sfxSource = GetComponent<AudioSource>();
    }

    public void PlayJump()
    {
        if (gamePrefs != null && !gamePrefs.IsSfxEnabled) return;
        if (sfxSource != null && jumpSound != null)
        {
            sfxSource.pitch = 1f;
            sfxSource.PlayOneShot(jumpSound, 0.8f);
        }
    }

    public void PlaySlide()
    {
        if (gamePrefs != null && !gamePrefs.IsSfxEnabled) return;
        if (sfxSource != null && jumpSound != null)
        {
            sfxSource.pitch = 0.65f;
            sfxSource.PlayOneShot(jumpSound, 0.4f);
            sfxSource.pitch = 1f;
        }
    }

    public void PlayCollect()
    {
        if (gamePrefs != null && !gamePrefs.IsSfxEnabled) return;
        if (sfxSource != null && collectSound != null)
        {
            sfxSource.pitch = 1f;
            sfxSource.PlayOneShot(collectSound, 0.4f);
        }
    }

    public void PlayGameOver()
    {
        if (gamePrefs != null && !gamePrefs.IsSfxEnabled) return;
        if (sfxSource != null && gameOverSound != null)
        {
            sfxSource.pitch = 1f;
            sfxSource.PlayOneShot(gameOverSound, 1f);
        }
    }

    public void PlayBackgroundMusic(AudioClip musicClip)
    {
        if (gamePrefs == null || !gamePrefs.IsMusicEnabled)
        {
            StopBackgroundMusic();
            return;
        }

        if (musicSource.clip == musicClip && musicSource.isPlaying)
        {
            return; // Already playing this clip
        }

        StopBackgroundMusic();
        
        if (musicClip != null)
        {
            musicSource.clip = musicClip;
            musicSource.loop = true;
            musicSource.volume = 0.4f;
            musicSource.Play();
        }
    }

    public void StopBackgroundMusic()
    {
        if (musicSource.isPlaying)
        {
            musicSource.Stop();
        }
        musicSource.clip = null;
    }
}
