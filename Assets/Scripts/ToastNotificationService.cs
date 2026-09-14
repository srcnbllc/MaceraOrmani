using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - Evrensel ve Animasyonlu Toast (Anlık Bildirim) Sistemi
/// Orman temasına uygun (Koyu zümrüt yeşili, altın sarısı çerçeve),
/// hafif yarı saydam ve ekranın üstünden süzülerek gelen profesyonel bildirim motoru.
/// Herhangi bir prefab gerektirmeden çalışma anında (Runtime) kendini oluşturabilir.
/// </summary>
public class ToastNotificationService : MonoBehaviour
{
    public static ToastNotificationService Instance { get; private set; }

    public enum ToastType
    {
        Info,      // Mavi / Nötr Orman Yeşili
        Success,   // Canlı Zümrüt Yeşili
        Warning,   // Altın Sarısı / Turuncu
        Error      // Koyu Kızıl / Uyarı
    }

    private Canvas toastCanvas;
    private GameObject toastContainer;
    private RectTransform toastRect;
    private CanvasGroup canvasGroup;
    private Image toastBackground;
    private Image toastBorder;
    private TextMeshProUGUI toastText;
    private Coroutine activeCoroutine;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
            InitializeUI();
        }
        else if (Instance != this)
        {
            Destroy(gameObject);
        }
    }

    private void InitializeUI()
    {
        // 1. Toast için bağımsız ve en üst katmanda çalışan Canvas oluştur
        GameObject canvasObj = new GameObject("ToastCanvas");
        canvasObj.transform.SetParent(transform);
        toastCanvas = canvasObj.AddComponent<Canvas>();
        toastCanvas.renderMode = RenderMode.ScreenSpaceOverlay;
        toastCanvas.sortingOrder = 9999; // Her şeyin en üstünde görünsün

        CanvasScaler scaler = canvasObj.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080, 1920);
        scaler.matchWidthOrHeight = 0.5f;

        canvasObj.AddComponent<GraphicRaycaster>();

        // 2. Toast Taşıyıcı Konteyner
        toastContainer = new GameObject("ToastContainer");
        toastContainer.transform.SetParent(canvasObj.transform, false);
        toastRect = toastContainer.AddComponent<RectTransform>();
        toastRect.anchorMin = new Vector2(0.5f, 1f);
        toastRect.anchorMax = new Vector2(0.5f, 1f);
        toastRect.pivot = new Vector2(0.5f, 1f);
        toastRect.sizeDelta = new Vector2(850, 120);
        toastRect.anchoredPosition = new Vector2(0, -180); // Ekranın üst kısmında SafeArea altında

        canvasGroup = toastContainer.AddComponent<CanvasGroup>();
        canvasGroup.alpha = 0f;
        canvasGroup.blocksRaycasts = false;

        // 3. Arka Plan
        toastBackground = toastContainer.AddComponent<Image>();
        toastBackground.color = new Color(0.08f, 0.16f, 0.10f, 0.95f); // Koyu Kent Ormanı Yeşili

        // 4. Çerçeve / Kenarlık Efekti
        Outline outline = toastContainer.AddComponent<Outline>();
        outline.effectColor = new Color(1f, 0.84f, 0.2f, 0.9f); // Altın sarısı çerçeve
        outline.effectDistance = new Vector2(3, -3);

        // 5. Bildirim Metni
        GameObject textObj = new GameObject("ToastText");
        textObj.transform.SetParent(toastContainer.transform, false);
        RectTransform textRect = textObj.AddComponent<RectTransform>();
        textRect.anchorMin = Vector2.zero;
        textRect.anchorMax = Vector2.one;
        textRect.sizeDelta = new Vector2(-40, -20); // Kenar boşlukları

        toastText = textObj.AddComponent<TextMeshProUGUI>();
        toastText.fontSize = 34;
        toastText.fontStyle = FontStyles.Bold;
        toastText.alignment = TextAlignmentOptions.Center;
        toastText.enableWordWrapping = true;
        toastText.color = Color.white;

        toastContainer.SetActive(false);
    }

    /// <summary>
    /// Ekranda şık bir Toast bildirimi gösterir.
    /// </summary>
    public static void Show(string message, ToastType type = ToastType.Info, float duration = 2.5f)
    {
        if (Instance == null)
        {
            GameObject obj = new GameObject("ToastNotificationService");
            Instance = obj.AddComponent<ToastNotificationService>();
        }

        Instance.TriggerToast(message, type, duration);
    }

    private void TriggerToast(string message, ToastType type, float duration)
    {
        if (toastContainer == null) InitializeUI();

        if (activeCoroutine != null)
        {
            StopCoroutine(activeCoroutine);
        }

        // Renk ve tema ayarları
        switch (type)
        {
            case ToastType.Success:
                toastBackground.color = new Color(0.10f, 0.32f, 0.15f, 0.96f); // Zümrüt Yeşili
                break;
            case ToastType.Warning:
                toastBackground.color = new Color(0.40f, 0.25f, 0.05f, 0.96f); // Amber / Altın
                break;
            case ToastType.Error:
                toastBackground.color = new Color(0.45f, 0.12f, 0.12f, 0.96f); // Kırmızı
                break;
            case ToastType.Info:
            default:
                toastBackground.color = new Color(0.08f, 0.20f, 0.14f, 0.96f); // Koyu Orman
                break;
        }

        toastText.text = message;
        activeCoroutine = StartCoroutine(ToastAnimationRoutine(duration));
    }

    private IEnumerator ToastAnimationRoutine(float duration)
    {
        toastContainer.SetActive(true);

        Vector2 startPos = new Vector2(0, -60);
        Vector2 targetPos = new Vector2(0, -170);

        // Giriş animasyonu (Yukarıdan aşağı süzülme ve Alpha 0 -> 1)
        float elapsed = 0f;
        float animDuration = 0.25f;

        while (elapsed < animDuration)
        {
            elapsed += Time.unscaledDeltaTime; // TimeScale = 0 olsa bile animasyon çalışır
            float t = elapsed / animDuration;
            float smoothT = Mathf.SmoothStep(0, 1, t);

            toastRect.anchoredPosition = Vector2.Lerp(startPos, targetPos, smoothT);
            canvasGroup.alpha = smoothT;
            yield return null;
        }

        toastRect.anchoredPosition = targetPos;
        canvasGroup.alpha = 1f;

        // Ekranda bekleme süresi (unscaled)
        float waitElapsed = 0f;
        while (waitElapsed < duration)
        {
            waitElapsed += Time.unscaledDeltaTime;
            yield return null;
        }

        // Çıkış animasyonu (Alpha 1 -> 0)
        elapsed = 0f;
        while (elapsed < animDuration)
        {
            elapsed += Time.unscaledDeltaTime;
            float t = elapsed / animDuration;
            canvasGroup.alpha = 1f - t;
            yield return null;
        }

        canvasGroup.alpha = 0f;
        toastContainer.SetActive(false);
        activeCoroutine = null;
    }
}
