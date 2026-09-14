using UnityEngine;
using TMPro; // TextMeshPro bileşenlerine erişmek için şart

public class LevelCardManager : MonoBehaviour
{
    // Bölüm bilgilerini Inspector'da düzenli tutmak için bir yapı (struct) oluşturuyoruz
    [System.Serializable]
    public struct LevelData
    {
        public string levelTitle;       // Bölüm Başlığı
        [TextArea(3, 10)]               // Mücahit, açıklamaları rahat yazasın diye geniş metin alanı açar
        public string levelDescription; // Bölüm Açıklaması
    }

    [Header("UI Elemanları")]
    public GameObject infoPanel;         // Kapatıp açacağımız ana LevelInfoPanel
    public TextMeshProUGUI titleText;    // Kartın içindeki Başlık componenti
    public TextMeshProUGUI descriptionText; // Kartın içindeki Açıklama componenti

    [Header("Bölüm Verileri")]
    public LevelData[] allLevels;        // 10 bölümün verisini tutacak dizi (Array)

    private static readonly (string title, string desc)[] VarsayilanBilgiler = new (string, string)[]
    {
        ("1. Bölüm: Mağlova Kapısı & Karşılama", "Kemerburgaz Kent Ormanı A Kapısı. Ziyaretçi danışma, bisiklet kiralama ve 'Hoş Geldiniz' sincap maskot karşılama meydanı."),
        ("2. Bölüm: Dev Atlıkarınca & Carousel Cafe", "Türkiye'nin ilk yerli ve çift katlı, 14 metre çapındaki 40 hareketli atlı dev atlıkarıncası! Carousel Cafe'de tatlı & içecek molası."),
        ("3. Bölüm: Çocuk Parkları & Rotamız Orman", "23 farklı çocuk parkı noktası ve ahşap oyun alanları. 'Rotamız Orman' ekolojik farkındalık ve doğa atölyesi alanı."),
        ("4. Bölüm: İBB BELTUR Restoran & Kafe", "1. Büyük Aile Dinlenme Molası: Orman manzaralı BELTUR Kafe & Restoran, İBB Sahne ve YBY etkinlik alanı."),
        ("5. Bölüm: Macera Parkı & Zipline Hattı", "Yetişkin ve çocuklar için ip parkuru, tırmanma duvarı ve dev Zipline! Bu etabı bitirene BELTUR İkram Kuponu hediye."),
        ("6. Bölüm: Fauna Alanı & Doğal Yaşam Koridoru", "Kemerburgaz Country Club Fauna Alanı: Orman hayvanlarıyla bağ kurma, tavşanlar, sincaplar ve kuş gözlem sahası."),
        ("7. Bölüm: Mimar Sinan Kapısı & Gölet Parkuru", "B Kapısı ve 2.4 km Alibeyköy Gölet Parkuru. Sazlıklar, su kuşları ve gölet kıyısında BELTUR Burger dinlenme alanı."),
        ("8. Bölüm: Ahşap Seyir Kulesi & Günbatımı Tepesi", "İstanbul'un kuzey ormanlarını 360 derece panoramik izleme imkanı sunan dev ahşap seyir kulesi ve temiz hava molası."),
        ("9. Bölüm: Yakamoz Burnu & Mimar Sinan Yolu", "Alibeyköy Deresi yarımadası boyunca uzanan su kenarı yürüyüş yolu, suyun dinginliği ve tarihi taşlı patika."),
        ("10. Bölüm: MAĞLOVA SU KEMERİ (Büyük Final!)", "Mimar Sinan'ın 1564 şaheseri: 36m yükseklik, 257m uzunluk, dünya su mimarisi başyapıtı! Büyük Şampiyonluk Beratı & Zipline Ödülü.")
    };

    // Butonlara tıklandığında bu fonksiyon çağrılacak
    public void OpenLevelCard(int levelIndex)
    {
        string title = "";
        string desc = "";

        if (allLevels != null && levelIndex >= 0 && levelIndex < allLevels.Length && !string.IsNullOrEmpty(allLevels[levelIndex].levelTitle))
        {
            title = allLevels[levelIndex].levelTitle;
            desc = allLevels[levelIndex].levelDescription;
        }
        else if (levelIndex >= 0 && levelIndex < VarsayilanBilgiler.Length)
        {
            title = VarsayilanBilgiler[levelIndex].title;
            desc = VarsayilanBilgiler[levelIndex].desc;
        }
        else
        {
            title = $"{levelIndex + 1}. Bölüm";
            desc = "Kemerburgaz Kent Ormanı doğal keşif parkuru.";
        }

        if (titleText != null) titleText.text = title;
        if (descriptionText != null) descriptionText.text = desc;
        if (infoPanel != null) infoPanel.SetActive(true);
    }

    public void CloseLevelCard()
    {
        if (infoPanel != null) infoPanel.SetActive(false);
    }
}