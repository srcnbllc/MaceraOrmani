using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - Gerçekçi Saha & Mola Tanıtım Kartı (Forest Spot Card)
/// Bölüm başladığında abartı ve fanteziden uzak, gerçek Kent Ormanı tesislerini,
/// dinlenme/mola imkanlarını ve parkur ipuçlarını ziyaretçiye 3 saniye boyunca zarifçe sunar.
/// </summary>
public class ForestSpotCard : MonoBehaviour
{
    [System.Serializable]
    public struct SpotData
    {
        public string bolumAdi;
        public string aciklama;
        public string tesislerVeMola;
    }

    private static readonly SpotData[] OrmanNoktalari = new SpotData[]
    {
        new SpotData {
            bolumAdi = "1. Bölüm: Mağlova Kapısı & Karşılama Merkezi",
            aciklama = "Kemerburgaz Kent Ormanı A Kapısı. Ziyaretçi danışma ve bisiklet kiralama başlangıcı.",
            tesislerVeMola = "ℹ️ Danışma: 30m  |  🚲 Bisiklet Kiralama: 40m  |  🅿️ Ana Otopark  |  🚻 WC: 50m"
        },
        new SpotData {
            bolumAdi = "2. Bölüm: Dev Atlıkarınca & Carousel Cafe",
            aciklama = "Türkiye'nin ilk yerli ve çift katlı, 14m çapında 40 hareketli atlı dev atlıkarıncası!",
            tesislerVeMola = "🎠 Çift Katlı Atlıkarınca: 20m  |  ☕ Carousel Cafe (Waffle & Sıcak Çikolata): 40m"
        },
        new SpotData {
            bolumAdi = "3. Bölüm: Çocuk Parkları & Rotamız Orman",
            aciklama = "23 farklı çocuk oyun parkı noktası ve 'Rotamız Orman' ekolojik çocuk atölyesi.",
            tesislerVeMola = "🚸 Ahşap Oyun Parkı: 30m  |  🎨 Ekolojik Doğa Atölyesi: 60m  |  ☕ Good Mood: 80m"
        },
        new SpotData {
            bolumAdi = "4. Bölüm: İBB BELTUR Restoran & Kafe",
            aciklama = "Orman manzaralı BELTUR. 1. Büyük Aile Dinlenme Molası: Sıcak çay, yemek ve dinlenme.",
            tesislerVeMola = "☕ İBB BELTUR Kafe & Restoran: 0m  |  🎭 İBB Sahne: 50m  |  🚻 WC & Bebek Bakım: 30m"
        },
        new SpotData {
            bolumAdi = "5. Bölüm: Macera Parkı & Zipline Hattı",
            aciklama = "Yetişkin ve çocuklar için dev Zipline, tırmanma duvarı ve ağaçlar arası ip parkurları!",
            tesislerVeMola = "🧗 Macera Parkı & Zipline: 0m  |  🎟️ Bu Bölümü Tamamla, BELTUR İkram Kuponu Kazan!"
        },
        new SpotData {
            bolumAdi = "6. Bölüm: Fauna Alanı & Yaban Hayatı Koridoru",
            aciklama = "Kemerburgaz Country Club Fauna Alanı: Hayvanlarla bağ kurma, tavşanlar ve kuş gözlemi.",
            tesislerVeMola = "🦌 Fauna Alanı & Hayvan Barınakları: 40m  |  ☕ Yeşil Vadi Cafe: 90m  |  🚰 Doğal Çeşme"
        },
        new SpotData {
            bolumAdi = "7. Bölüm: Mimar Sinan Kapısı & Gölet Parkuru",
            aciklama = "B Kapısı ve 2.4 km Alibeyköy Gölet Parkuru. Sazlıklar ve gölet su kuşları gözlem alanı.",
            tesislerVeMola = "🦆 Kuş Gözlem İskelesi: 50m  |  🍔 BELTUR Burger: 60m  |  🚻 WC: 80m"
        },
        new SpotData {
            bolumAdi = "8. Bölüm: Ahşap Seyir Kulesi & Günbatımı Tepesi",
            aciklama = "İstanbul'un kuzey ormanlarını 360 derece panoramik izleme kulesi ve temiz hava sahası.",
            tesislerVeMola = "🗼 Panoramik Seyir Kulesi: 30m  |  ☕ Big Forest Cafe: 80m  |  🪑 Seyir Terası Bankları"
        },
        new SpotData {
            bolumAdi = "9. Bölüm: Yakamoz Burnu & Mimar Sinan Yolu",
            aciklama = "Alibeyköy Deresi yarımadası, suyun huzur veren sesi ve tarihi taşlı patika rotası.",
            tesislerVeMola = "🌊 Alibey Deresi Kıyısı: 20m  |  🪵 Woodbox Dinlenme Noktası: 60m"
        },
        new SpotData {
            bolumAdi = "10. Bölüm: MAĞLOVA SU KEMERİ (BÜYÜK FİNAL!)",
            aciklama = "Mimar Sinan'ın 1564 şaheseri (36m yükseklik, 257m uzunluk) dünya su mimarisi başyapıtı!",
            tesislerVeMola = "🏛️ Mağlova Su Kemeri: 0m  |  🏆 Resmi Muhafız Beratı & Macera Parkı Zipline Kuponu!"
        }
    };

    private Canvas spotCanvas;
    private GameObject cardContainer;
    private CanvasGroup canvasGroup;
    private TextMeshProUGUI titleText;
    private TextMeshProUGUI descText;
    private TextMeshProUGUI facilityText;
    private TextMeshProUGUI controlsText;

    private bool kayboluyorMu = false;

    private void Start()
    {
        int bolumID = PlayerPrefs.GetInt("SecilenBolumID", 1);
        int index = Mathf.Clamp(bolumID - 1, 0, OrmanNoktalari.Length - 1);
        SpotData data = OrmanNoktalari[index];

        BuildCardUI(data);
        StartCoroutine(GosterimRutini());
    }

    private void Update()
    {
        // Oyuncu zıpladığında veya kaydığında kartı erken ve yumuşakça kaldır
        if (!kayboluyorMu && (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.S)))
        {
            StopAllCoroutines();
            StartCoroutine(YavascaKaybol());
        }
    }

    private void BuildCardUI(SpotData data)
    {
        // 1. Canvas
        GameObject canvasObj = new GameObject("ForestSpotCanvas");
        canvasObj.transform.SetParent(transform);
        spotCanvas = canvasObj.AddComponent<Canvas>();
        spotCanvas.renderMode = RenderMode.ScreenSpaceOverlay;
        spotCanvas.sortingOrder = 500; // Oyun içi UI'ın üzerinde, Toast'ın altında

        CanvasScaler scaler = canvasObj.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080, 1920);
        scaler.matchWidthOrHeight = 0.5f;

        // 2. Kart Konteyner
        cardContainer = new GameObject("SpotCardContainer");
        cardContainer.transform.SetParent(canvasObj.transform, false);

        RectTransform rect = cardContainer.AddComponent<RectTransform>();
        rect.anchorMin = new Vector2(0.5f, 1f);
        rect.anchorMax = new Vector2(0.5f, 1f);
        rect.pivot = new Vector2(0.5f, 1f);
        rect.sizeDelta = new Vector2(960, 260);
        rect.anchoredPosition = new Vector2(0, -130);

        canvasGroup = cardContainer.AddComponent<CanvasGroup>();
        canvasGroup.alpha = 0f;

        // Koyu Zümrüt Orman Arka Planı
        Image bg = cardContainer.AddComponent<Image>();
        bg.color = new Color(0.06f, 0.14f, 0.08f, 0.94f);

        Outline outline = cardContainer.AddComponent<Outline>();
        outline.effectColor = new Color(0.95f, 0.78f, 0.2f, 0.85f); // İnce Altın Kenarlık
        outline.effectDistance = new Vector2(2, -2);

        // İçerik Dikey Dizilim
        VerticalLayoutGroup vlg = cardContainer.AddComponent<VerticalLayoutGroup>();
        vlg.padding = new RectOffset(30, 30, 20, 20);
        vlg.spacing = 8;
        vlg.childControlWidth = true;
        vlg.childControlHeight = true;
        vlg.childForceExpandHeight = false;

        // Kurumsal Üst Başlık (Boğaziçi Yönetim & İBB)
        OlusturYazi(cardContainer.transform, "İBB • BOĞAZİÇİ YÖNETİM A.Ş. • RESMİ SAHA REHBERİ", 18, FontStyles.Bold, new Color(0f, 0.75f, 0.75f));

        // Başlık
        titleText = OlusturYazi(cardContainer.transform, data.bolumAdi, 32, FontStyles.Bold, new Color(1f, 0.86f, 0.35f));

        // Doğa Açıklaması
        descText = OlusturYazi(cardContainer.transform, data.aciklama, 24, FontStyles.Normal, Color.white);

        // Saha Tesisleri & Mola Noktaları
        facilityText = OlusturYazi(cardContainer.transform, data.tesislerVeMola, 22, FontStyles.Italic, new Color(0.55f, 0.92f, 0.65f));

        // Kontrol İpucu
        controlsText = OlusturYazi(cardContainer.transform, "▲ Zıpla (Yukarı Kaydır / Dokun)   |   ▼ Kay / Eğil (Aşağı Kaydır)", 20, FontStyles.Bold, new Color(0.85f, 0.85f, 0.85f));
    }

    private TextMeshProUGUI OlusturYazi(Transform parent, string icerik, float boyut, FontStyles stil, Color renk)
    {
        GameObject textObj = new GameObject("Text");
        textObj.transform.SetParent(parent, false);

        TextMeshProUGUI tmp = textObj.AddComponent<TextMeshProUGUI>();
        tmp.text = icerik;
        tmp.fontSize = boyut;
        tmp.fontStyle = stil;
        tmp.color = renk;
        tmp.alignment = TextAlignmentOptions.Center;
        tmp.enableWordWrapping = true;
        return tmp;
    }

    private IEnumerator GosterimRutini()
    {
        // Yumuşak Belirme
        float t = 0f;
        while (t < 0.3f)
        {
            t += Time.deltaTime;
            if (canvasGroup != null) canvasGroup.alpha = t / 0.3f;
            yield return null;
        }

        if (canvasGroup != null) canvasGroup.alpha = 1f;

        // 3.5 Saniye Ekranda Kal
        yield return new WaitForSeconds(3.5f);

        yield return StartCoroutine(YavascaKaybol());
    }

    private IEnumerator YavascaKaybol()
    {
        kayboluyorMu = true;
        float t = 0f;
        float baslangicAlpha = canvasGroup != null ? canvasGroup.alpha : 1f;

        while (t < 0.4f)
        {
            t += Time.deltaTime;
            if (canvasGroup != null) canvasGroup.alpha = Mathf.Lerp(baslangicAlpha, 0f, t / 0.4f);
            yield return null;
        }

        if (cardContainer != null) cardContainer.SetActive(false);
        Destroy(gameObject);
    }
}
