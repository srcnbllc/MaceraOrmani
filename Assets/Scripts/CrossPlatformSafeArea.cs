using UnityEngine;

/// <summary>
/// Kemerburgaz Kent Ormanı - Cross-Platform Safe Area (Güvenli Ekran Alanı) Uyarlayıcısı
/// Modern iPhone (Dynamic Island, Çentik) ve Android (Kamera deliği, gezinme çubuğu)
/// cihazlarda UI öğelerinin ekran kenarlarında kesilmesini veya gizlenmesini engeller.
/// Canvas altındaki ana panel nesnesine eklenerek kullanılır.
/// </summary>
[RequireComponent(typeof(RectTransform))]
public class CrossPlatformSafeArea : MonoBehaviour
{
    private RectTransform panelRectTransform;
    private Rect lastSafeArea = Rect.zero;
    private Vector2Int lastScreenSize = Vector2Int.zero;
    private ScreenOrientation lastOrientation = ScreenOrientation.AutoRotation;

    [Header("Eksen Kontrolleri")]
    public bool applyTop = true;
    public bool applyBottom = true;
    public bool applyLeft = true;
    public bool applyRight = true;

    private void Awake()
    {
        panelRectTransform = GetComponent<RectTransform>();
        ApplySafeArea();
    }

    private void Update()
    {
        if (lastSafeArea != Screen.safeArea ||
            lastScreenSize.x != Screen.width ||
            lastScreenSize.y != Screen.height ||
            lastOrientation != Screen.orientation)
        {
            ApplySafeArea();
        }
    }

    private void ApplySafeArea()
    {
        if (panelRectTransform == null) return;

        Rect safeArea = Screen.safeArea;
        Vector2 screenSize = new Vector2(Screen.width, Screen.height);

        if (screenSize.x <= 0 || screenSize.y <= 0) return;

        Vector2 anchorMin = safeArea.position;
        Vector2 anchorMax = safeArea.position + safeArea.size;

        anchorMin.x /= screenSize.x;
        anchorMin.y /= screenSize.y;
        anchorMax.x /= screenSize.x;
        anchorMax.y /= screenSize.y;

        if (!applyLeft) anchorMin.x = 0;
        if (!applyRight) anchorMax.x = 1;
        if (!applyBottom) anchorMin.y = 0;
        if (!applyTop) anchorMax.y = 1;

        panelRectTransform.anchorMin = anchorMin;
        panelRectTransform.anchorMax = anchorMax;

        lastSafeArea = safeArea;
        lastScreenSize = new Vector2Int(Screen.width, Screen.height);
        lastOrientation = Screen.orientation;
    }
}
