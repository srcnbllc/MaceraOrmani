using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

/// <summary>
/// Kemerburgaz Kent Ormanı - Gemini AI Orman Muhafızı Servisi
/// Google Gemini API (gemini-3.7-flash / gemini-3.5-flash-lite) kullanarak
/// her bölüm için dinamik doğa bilgileri ve 10. bölüm sonunda kişiselleştirilmiş
/// "Orman Muhafızı Beratı" üretir.
/// Çevrimdışı (Offline-First) mimariye sahiptir; internet yoksa kesintisiz yerel havuzdan yanıt verir.
/// </summary>
public class GeminiForestService : MonoBehaviour
{
    public static GeminiForestService Instance { get; private set; }

    [Header("API Yapılandırması")]
    [Tooltip("Google AI Studio'dan alınan Gemini API anahtarı. Boş bırakılırsa yerel yedek havuz kullanılır.")]
    [SerializeField] private string geminiApiKey = "";
    
    [Tooltip("Önerilen güncel modeller: gemini-3.7-flash veya gemini-3.5-flash-lite")]
    [SerializeField] private string modelName = "gemini-3.7-flash";

    private const string BASE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/";

    // =========================================================================
    // ÇEVRİMDIŞI (OFFLINE) ZENGİN KEMERBURGAZ BİLGİ HAVUZU
    // İnternet çekmeyen kör noktalarda bile oyun asla aksamaz.
    // =========================================================================
    private static readonly Dictionary<int, string[]> BolumBilgiHavuzu = new Dictionary<int, string[]>
    {
        { 1, new string[] {
            "Kemerburgaz Kent Ormanı A Kapısı'ndasın (Mağlova Kapısı). 5.5 milyon metrekarelik devasa yaşam merkezimiz seni karşılıyor!",
            "Danışma noktasından bisiklet kiralayabilir, 3.5 km veya 5.3 km'lik bisiklet parkurlarını ailenle keşfedebilirsin.",
            "Ormanımız her yıl yüz binlerce ton temiz oksijen üreterek İstanbul'un ciğerlerini tertemiz tutar."
        }},
        { 2, new string[] {
            "Türkiye'nin ilk yerli ve çift katlı, 14 metre çapındaki dev atlıkarıncasına hoş geldin! Tam 40 atı da hareketli.",
            "Atlıkarıncanın hemen yanındaki Carousel Cafe'de sıcak çikolata ve taze waffle ile harika bir mola verebilirsin.",
            "Doğadaki tüm canlılar gibi hayvan dostlarımızı sevmek ve korumak orman sevgisinin ilk kuralıdır."
        }},
        { 3, new string[] {
            "Ormanımızda tam 23 farklı noktada doğal ahşap çocuk oyun parkı bulunuyor!",
            "'Rotamız Orman' atölyelerinde çocuklar çevre bilinci, eko-sanat ve doğa keşifleri yapıyor.",
            "Yere düşen kozalaklar ve meşe palamutları ormanın geleceğidir; onları inceleyip doğaya geri bırakmayı unutma."
        }},
        { 4, new string[] {
            "İBB BELTUR Restoran & Kafe'desin! Ailenle birlikte lezzetli bir yemek ve temiz orman havası molası vakti.",
            "İBB Sahne ve YBY etkinlik alanında konserler, tiyatrolar ve doğa şenlikleri düzenleniyor.",
            "Mola verirken kendi su mataranı kullanarak tek kullanımlık plastik tüketimini sıfırlayabilirsin!"
        }},
        { 5, new string[] {
            "TEBRİKLER! 5. Etabı bitirdin ve Maceracı Pasaportu'na BELTUR İkram Kuponu kazandın!",
            "Macera Parkı'nda tırmanma duvarı, dev Zipline ve ağaçlar arası ip parkurları adrenalin dolu anlar sunar.",
            "İp parkurlarında dengede dururken ormanın kuşbakışı manzarasını izlemek muhteşem bir duygudur."
        }},
        { 6, new string[] {
            "Kemerburgaz Country Club Fauna Alanı'ndasın! Buradaki koruma alanında hayvan dostlarımızla bağ kurabilirsin.",
            "Ormanımızda kızıl sincaplar, yaban ördekleri, alageyikler ve onlarca ötücü kuş türü güvenle yaşıyor.",
            "Hayvanları doğal ortamlarında uzaktan sessizce izlemek onlara gösterebileceğimiz en güzel saygıdır."
        }},
        { 7, new string[] {
            "Mimar Sinan Kapısı ve 2.4 km'lik Alibeyköy Gölet Parkuru'ndasın! Kıyı boyunca yürürken karabatakları izledin mi?",
            "Gölet kıyısındaki sazlıklar suyun doğal filtresidir ve göçmen su kuşlarının kışlama yuvasıdır.",
            "Gölet kenarındaki BELTUR Burger, spor ve göl yürüyüşü yapanların en sevdiği lezzet durağıdır."
        }},
        { 8, new string[] {
            "Ahşap Seyir Kulesi'ne vardın! İstanbul'un eşsiz kuzey ormanlarını 360 derece panoramik olarak izleyebilirsin.",
            "Seyir kulesinden bakarken temiz havayı ciğerlerine çek; ormanın yaydığı taze oksijen zihnini canlandırır.",
            "Günbatımı Tepesi, akşamüstü güneşin orman ve gölet üzerinde batışını izlemek için en büyüleyici noktadır."
        }},
        { 9, new string[] {
            "Yakamoz Burnu'ndasın! Alibeyköy Deresi'ne uzanan yarımadada suyun dinlendirici sesini dinleyebilirsin.",
            "Tarihi patika boyunca yürürken Mimar Sinan'ın asırlar önce su kemerlerini inşa ettiği güzergahı adımlıyorsun.",
            "Büyük finale sadece 1 adım kaldı! Mimar Sinan'ın dünya şaheseri Mağlova Kemeri seni bekliyor."
        }},
        { 10, new string[] {
            "ŞAMPİYONLUK! Mimar Sinan'ın 1564 yılında inşa ettiği 36 metre yüksekliğindeki MAĞLOVA SU KEMERİ'ndesin!",
            "Mağlova Kemeri, iki katlı gözleri ve piramidal payandalarıyla dünya su mimarisi tarihinin en büyük başyapıtıdır.",
            "Tüm etapları tamamlayarak 'Kemerburgaz Kent Ormanı Doğa ve Tarih Muhafızı' oldun! Zipline ödülün kutlu olsun!"
        }}
    };

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    /// <summary>
    /// Tamamlanan bölüme göre eğitici doğa bilgisi getirir.
    /// Gemini API mevcutsa dinamik üretir; internet yoksa veya API kapalıysa yerel havuzdan anında döner.
    /// </summary>
    public void GetForestFact(int levelId, int score, string characterName, Action<string> onCompleted)
    {
        // Eğer API key yoksa veya geçersizse direkt güvenilir yerel havuzdan ver
        if (string.IsNullOrEmpty(geminiApiKey) || Application.internetReachability == NetworkReachability.NotReachable)
        {
            onCompleted?.Invoke(GetFallbackFact(levelId));
            return;
        }

        StartCoroutine(GenerateFactWithGeminiRoutine(levelId, score, characterName, onCompleted));
    }

    private IEnumerator GenerateFactWithGeminiRoutine(int levelId, int score, string characterName, Action<string> onCompleted)
    {
        string prompt = $"Sen Kemerburgaz Kent Ormanı'nın neşeli ve bilge doğa rehberisin. " +
                        $"Oyuncu {levelId}. bölümü {characterName} karakteriyle oynadı ve {score} puan topladı. " +
                        $"Kemerburgaz Kent Ormanı, doğa koruma, ormandaki canlılar veya Mağlova Kemeri hakkında " +
                        $"oyuncuya 1-2 cümlelik çok eğlenceli, samimi ve eğitici bir doğa notu yaz. Türkçe olsun.";

        string jsonPayload = $"{{\"contents\":[{{\"parts\":[{{\"text\":\"{EscapeJson(prompt)}\"}}]}}]}}";
        string url = $"{BASE_API_URL}{modelName}:generateContent?key={geminiApiKey}";

        using (UnityWebRequest request = new UnityWebRequest(url, "POST"))
        {
            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonPayload);
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            request.timeout = 5; // Hızlı yanıt alamazsa oyunu bekletmemek için 5 sn timeout

            yield return request.SendWebRequest();

            if (request.result == UnityWebRequest.Result.Success)
            {
                string text = ParseGeminiResponse(request.downloadHandler.text);
                if (!string.IsNullOrEmpty(text))
                {
                    onCompleted?.Invoke(text.Trim());
                    yield break;
                }
            }

            // Hata veya timeout durumunda yedek havuz
            onCompleted?.Invoke(GetFallbackFact(levelId));
        }
    }

    /// <summary>
    /// 10. Bölümü bitiren oyuncu için özel tebrik beratı üretir.
    /// </summary>
    public void GetGrandCertificate(string playerName, int totalGold, Action<string> onCompleted)
    {
        if (string.IsNullOrEmpty(geminiApiKey) || Application.internetReachability == NetworkReachability.NotReachable)
        {
            onCompleted?.Invoke(GetFallbackCertificate(playerName, totalGold));
            return;
        }

        StartCoroutine(GenerateCertificateRoutine(playerName, totalGold, onCompleted));
    }

    private IEnumerator GenerateCertificateRoutine(string playerName, int totalGold, Action<string> onCompleted)
    {
        string prompt = $"Kemerburgaz Kent Ormanı mobil oyununun 10 bölümünü de tamamlayıp ormanı baştan başa keşfeden {playerName} için " +
                        $"toplam {totalGold} altın toplamış olmasını da överek, resmi ve epik bir 'Kemerburgaz Kent Ormanı Baş Muhafızı Beratı' tebrik metni yaz. " +
                        $"Kısa, etkileyici ve coşkulu olsun (En fazla 3-4 cümle).";

        string jsonPayload = $"{{\"contents\":[{{\"parts\":[{{\"text\":\"{EscapeJson(prompt)}\"}}]}}]}}";
        string url = $"{BASE_API_URL}{modelName}:generateContent?key={geminiApiKey}";

        using (UnityWebRequest request = new UnityWebRequest(url, "POST"))
        {
            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonPayload);
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            request.timeout = 6;

            yield return request.SendWebRequest();

            if (request.result == UnityWebRequest.Result.Success)
            {
                string text = ParseGeminiResponse(request.downloadHandler.text);
                if (!string.IsNullOrEmpty(text))
                {
                    onCompleted?.Invoke(text.Trim());
                    yield break;
                }
            }

            onCompleted?.Invoke(GetFallbackCertificate(playerName, totalGold));
        }
    }

    public string GetFallbackFact(int levelId)
    {
        int key = Mathf.Clamp(levelId, 1, 10);
        if (BolumBilgiHavuzu.TryGetValue(key, out string[] facts) && facts.Length > 0)
        {
            int rnd = UnityEngine.Random.Range(0, facts.Length);
            return facts[rnd];
        }
        return "Ağaçlar havayı temizleyerek bize oksijen sağlar ve orman dengesini korur.";
    }

    public string GetFallbackCertificate(string playerName, int totalGold)
    {
        return $"İSTANBUL BÜYÜKŞEHİR BELEDİYESİ & BOĞAZİÇİ YÖNETİM A.Ş.\n" +
               $"KEMERBURGAZ KENT ORMANI DOĞA VE TARİH MUHAFIZI BERATI\n\n" +
               $"Sevgili {playerName},\n\n" +
               $"Kemerburgaz Kent Ormanı'nın 10 etabını; Mağlova Kapısı'ndan Mimar Sinan'ın dünya su mimarisi şaheseri Mağlova Su Kemeri'ne kadar başarıyla tamamladın.\n\n" +
               $"Ormanda topladığın {totalGold} altın ve doğaya gösterdiğin sevgiyle 'Resmi Doğa ve Tarih Muhafızı' unvanına hak kazandın. " +
               $"Macera Parkı'nda geçerli ücretsiz Zipline uçuş kuponun Maceracı Pasaportu'na tanımlandı. Yeşili ve tarihi daima koru!";
    }

    private string ParseGeminiResponse(string json)
    {
        try
        {
            int textIndex = json.IndexOf("\"text\": \"");
            if (textIndex == -1) textIndex = json.IndexOf("\"text\":\"");
            if (textIndex != -1)
            {
                int start = json.IndexOf("\"", textIndex + 7) + 1;
                int end = json.IndexOf("\"", start);
                if (start > 0 && end > start)
                {
                    string raw = json.Substring(start, end - start);
                    return raw.Replace("\\n", "\n").Replace("\\\"", "\"");
                }
            }
        }
        catch (Exception ex)
        {
            Debug.LogWarning($"[GeminiForestService] JSON Parse hatası: {ex.Message}");
        }
        return null;
    }

    private string EscapeJson(string text)
    {
        return text.Replace("\\", "\\\\").Replace("\"", "\\\"").Replace("\n", "\\n").Replace("\r", "");
    }
}
