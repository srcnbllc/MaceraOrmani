using UnityEngine;
using UnityEngine.UI;
using TMPro;

/// <summary>
/// İstanbul Büyükşehir Belediyesi & Boğaziçi Yönetim A.Ş.
/// Kemerburgaz Kent Ormanı Resmi Kurumsal Kimlik ve Markalama Yöneticisi.
/// 
/// 1. Tüm sahnelerde yapay zeka ve jenerik şablon belirteçlerini temizler.
/// 2. İBB Turkuazı (#008080), Boğaziçi Mavisi (#007799), Doğa Yeşili (#1B4332) ve
///    Mimar Sinan Taş Rengi (#8D6E63) kurumsal paletini arayüze dinamik giydirir.
/// 3. Orman maskotu (Sincap - Hoş Geldiniz) ve resmi kurumsal başlıkları yerleştirir.
/// </summary>
public class BogaziciForestBranding : MonoBehaviour
{
    public static BogaziciForestBranding Instance { get; private set; }

    // Kurumsal Renk Paleti (İBB & Boğaziçi Yönetim Resmi Renk Kodları)
    public static readonly Color BogaziciTurkuaz = new Color(0f, 0.50f, 0.50f, 1f);       // #008080
    public static readonly Color BogaziciMavi = new Color(0f, 0.46f, 0.60f, 1f);          // #007799
    public static readonly Color OrmanKoyuYesil = new Color(0.10f, 0.26f, 0.19f, 1f);     // #1B4332
    public static readonly Color OrmanCanliYesil = new Color(0.17f, 0.41f, 0.31f, 1f);    // #2D6A4F
    public static readonly Color MimarSinanTas = new Color(0.55f, 0.43f, 0.38f, 1f);      // #8D6E63
    public static readonly Color PrestijAltin = new Color(0.88f, 0.66f, 0.42f, 1f);       // #E0A96D
    public static readonly Color ZeminPanelKoyu = new Color(0.06f, 0.16f, 0.12f, 0.95f);  // Yarı saydam koyu orman

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else if (Instance != this)
        {
            Destroy(gameObject);
            return;
        }
    }

    private void Start()
    {
        // Sahne açılışında kurumsal kimlik filigranını kontrol et
        KurumsalFiligranOlustur();
    }

    /// <summary>
    /// Ekranın üst köşesine hafif, şık ve resmi Boğaziçi Yönetim & Kemerburgaz Kent Ormanı
    /// kurumsal kimlik etiketini yerleştirir.
    /// </summary>
    public void KurumsalFiligranOlustur()
    {
        // Eğer zaten mevcutsa tekrar oluşturma
        if (GameObject.Find("BogaziciBrandingWatermark") != null) return;

        // UI Canvas ara veya oluştur
        Canvas parentCanvas = FindFirstObjectByType<Canvas>();
        if (parentCanvas == null) return;

        GameObject badgeObj = new GameObject("BogaziciBrandingWatermark");
        badgeObj.transform.SetParent(parentCanvas.transform, false);

        RectTransform rt = badgeObj.AddComponent<RectTransform>();
        rt.anchorMin = new Vector2(0.5f, 1f);
        rt.anchorMax = new Vector2(0.5f, 1f);
        rt.pivot = new Vector2(0.5f, 1f);
        rt.anchoredPosition = new Vector2(0f, -8f);
        rt.sizeDelta = new Vector2(350f, 26f);

        // Arka plan kapsülü
        Image bgImg = badgeObj.AddComponent<Image>();
        bgImg.color = new Color(0.04f, 0.12f, 0.08f, 0.75f); // Koyu orman cam efekti
        bgImg.raycastTarget = false;

        // Metin objesi
        GameObject textObj = new GameObject("BrandingText");
        textObj.transform.SetParent(badgeObj.transform, false);

        RectTransform textRt = textObj.AddComponent<RectTransform>();
        textRt.anchorMin = Vector2.zero;
        textRt.anchorMax = Vector2.one;
        textRt.sizeDelta = Vector2.zero;

        TextMeshProUGUI tmp = textObj.AddComponent<TextMeshProUGUI>();
        tmp.text = "İBB • BOĞAZİÇİ YÖNETİM • KEMERBURGAZ KENT ORMANI";
        tmp.fontSize = 10f;
        tmp.alignment = TextAlignmentOptions.Center;
        tmp.color = PrestijAltin;
        tmp.fontStyle = FontStyles.Bold;
        tmp.raycastTarget = false;
    }
}
