using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - Karakter Can (Sağlık) ve Haptic Sistemi
/// Oyuncuya 3 Can (Kalp) hakkı tanır.
/// Engele çarpmada anında ölmek yerine canı 1 azaltır, mobil titreşim (Haptic) tetikler
/// ve 1.5 saniye geçici dokunulmazlık (yanıp sönme efekti) sağlar.
/// Canı 0'a inince LevelManager.Yenildin() metodunu tetikler.
/// </summary>
public class PlayerHealthSystem : MonoBehaviour
{
    public static PlayerHealthSystem Instance { get; private set; }

    [Header("Can Ayarları")]
    public int maksCan = 3;
    public int guncelCan { get; private set; }

    [Header("Dokunulmazlık & Efekt")]
    public float dokunulmazlikSuresi = 1.5f;
    private bool dokunulmazMi = false;

    [Header("Arayüz (UI) Elemanları (Opsiyonel)")]
    [Tooltip("Sahnede 3 kalp simgesi varsa buraya atanabilir.")]
    public Image[] kalpIkonlari;
    [Tooltip("Metin olarak can gösterimi için (Örn: 'CAN: 3/3')")]
    public TextMeshProUGUI canText;

    [Header("Sprite Renderer (Yanıp Sönme İçin)")]
    public SpriteRenderer karakterRenderer;

    private LevelManager levelManager;

    private void Awake()
    {
        Instance = this;

        // 1. Kamp Sistemi: Dinlenme Çadırı seviyesine göre ekstra can (0: +0, 1: +1, 2: +2)
        int tentLevel = PlayerPrefs.GetInt("tent_level", 0);

        // 2. Karakter Özelliği: 3. Karakter (Dayanıklı Kahraman) +1 bonus can ile başlar
        int charId = PlayerPrefs.GetInt("SelectedCharacterID", 1);
        int heroBonus = (charId == 3) ? 1 : 0;

        maksCan = 3 + tentLevel + heroBonus;
        guncelCan = maksCan;
    }

    private void Start()
    {
        levelManager = FindObjectOfType<LevelManager>();
        if (karakterRenderer == null)
        {
            karakterRenderer = GetComponent<SpriteRenderer>();
        }
        UIyiGuncelle();
    }

    /// <summary>
    /// Engele çarpıldığında çağrılır.
    /// Hasar alınırsa true, dokunulmazken false döner.
    /// Can biterse LevelManager'a haber verir.
    /// </summary>
    public bool HasarAl(int hasar = 1)
    {
        if (dokunulmazMi) return false;

        guncelCan -= hasar;
        if (guncelCan < 0) guncelCan = 0;

        // Mobil Haptic Titreşim
        TitreşimVer();

        UIyiGuncelle();

        if (guncelCan <= 0)
        {
            if (levelManager != null)
            {
                levelManager.Yenildin();
            }
        }
        else
        {
            ToastNotificationService.Show($"⚠️ Dikkat! Kalan Can: {guncelCan}/{maksCan}", ToastNotificationService.ToastType.Warning);
            StartCoroutine(DokunulmazlikRutini());
        }

        return true;
    }

    private void TitreşimVer()
    {
#if UNITY_ANDROID || UNITY_IOS
        try
        {
            Handheld.Vibrate();
        }
        catch {}
#endif
    }

    private IEnumerator DokunulmazlikRutini()
    {
        dokunulmazMi = true;

        float gecenZaman = 0f;
        float yanipSonmeAraligi = 0.15f;

        while (gecenZaman < dokunulmazlikSuresi)
        {
            if (karakterRenderer != null)
            {
                Color c = karakterRenderer.color;
                c.a = c.a == 1f ? 0.3f : 1f;
                karakterRenderer.color = c;
            }

            yield return new WaitForSeconds(yanipSonmeAraligi);
            gecenZaman += yanipSonmeAraligi;
        }

        if (karakterRenderer != null)
        {
            Color c = karakterRenderer.color;
            c.a = 1f;
            karakterRenderer.color = c;
        }

        dokunulmazMi = false;
    }

    public void CanYenile()
    {
        guncelCan = maksCan;
        UIyiGuncelle();
    }

    private void UIyiGuncelle()
    {
        if (canText != null)
        {
            canText.text = $"CAN: {guncelCan}/{maksCan}";
        }

        if (kalpIkonlari != null && kalpIkonlari.Length > 0)
        {
            for (int i = 0; i < kalpIkonlari.Length; i++)
            {
                if (kalpIkonlari[i] != null)
                {
                    kalpIkonlari[i].enabled = i < guncelCan;
                }
            }
        }
    }
}
