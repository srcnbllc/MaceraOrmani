using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - Bölüm Yöneticisi (LevelManager)
/// 1'den 10'a kadar kademeli hız artışı (5.0 -> 6.5) uygular.
/// Bölüm 5'te BELTUR ödül bildirimini, Bölüm 10'da Büyük Final zafer ekranını tetikler.
/// </summary>
public class LevelManager : MonoBehaviour
{
    [Header("Genel Ayarlar")]
    public int gecerliBolumID; 
    public int guncelSkor = 0;
    public int hedefSkor;
    public float seviyeHizi { get; private set; } = 5f;
    private int buBolumToplananAltin = 0;
    private bool oyunBittiMi = false;

    [Header("Bölüm İsimleri")]
    public string[] bolumIsimleri = {
        "1. Bölüm - Orman Giriş Patikası",
        "2. Bölüm - Meşe Koruluğu",
        "3. Bölüm - Gölet & Sulak Alan",
        "4. Bölüm - Kuş Gözlem Noktası",
        "5. Bölüm - BELTUR Mola İstasyonu",
        "6. Bölüm - Tarihi Mağlova Kemeri",
        "7. Bölüm - Masal Ormanı Parkuru",
        "8. Bölüm - Gelişim Vadisi & Kamp",
        "9. Bölüm - Macera Parkı Zirvesi",
        "10. Bölüm - BÜYÜK FİNAL: Zipline Parkuru"
    };

    [Header("Görsel Ayarlar (Arka Plan)")]
    public SpriteRenderer arkaplanRenderer; 
    public Sprite[] bolumArkaplanlari; 

    [Header("Arayüz (UI) Ayarları")]
    public TextMeshProUGUI skorText;
    public TextMeshProUGUI bolumBaslikText;
    public GameObject gameOverPaneli;
    public GameObject basariPaneli;
    public TextMeshProUGUI bilgiMetniObjesi;

    [Header("Orman Bilgileri Verisi")]
    public string[] ormanBilgileri = {
        "Ormanda 10 adet kaplumbağa vardır.",
        "Ağaçlar havayı temizleyerek bize oksijen sağlar.",
        "Türkiye'de ormanların çoğu Karadeniz bölgesindedir.",
        "Bazı ağaçlar binlerce yıl yaşayabilir."
    };

    void Start()
    {
        Time.timeScale = 1;
        gecerliBolumID = PlayerPrefs.GetInt("SecilenBolumID", 1);
        
        // Dinamik skor: Bölüm 1 = 1000, Bölüm 2 = 1500, Bölüm 3 = 2000...
        hedefSkor = 500 + (gecerliBolumID * 500); 

        // Kademeli hız: Bölüm 1'de 5.0, Bölüm 10'da 6.44
        seviyeHizi = 5.0f + ((gecerliBolumID - 1) * 0.16f);

        if (bolumBaslikText != null && gecerliBolumID >= 1 && gecerliBolumID <= bolumIsimleri.Length)
        {
            bolumBaslikText.text = bolumIsimleri[gecerliBolumID - 1];
        }

        SahneyiKur(gecerliBolumID);
        SkoruGuncelle();

        // Kademeli zorluk: İlerleyen bölümlerde engeller kademeli olarak biraz daha sık gelsin
        Spawner spawner = FindObjectOfType<Spawner>();
        if (spawner != null)
        {
            float hizFaktoru = Mathf.Max(0.55f, 1.0f - (gecerliBolumID - 1) * 0.045f);
            spawner.minBekleme = 1.4f * hizFaktoru;
            spawner.maxBekleme = 2.4f * hizFaktoru;
        }

        // Arka plan kayma hızını bölüm hızına oranla
        ArkaplanKaydirma bg = FindObjectOfType<ArkaplanKaydirma>();
        if (bg != null)
        {
            bg.kaydirmaHizi = 3.0f * (seviyeHizi / 5.0f);
        }

        // Gerçekçi Kent Ormanı Saha & Mola Tanıtım Kartı
        if (FindObjectOfType<ForestSpotCard>() == null)
        {
            GameObject spotCardObj = new GameObject("ForestSpotCardController");
            spotCardObj.AddComponent<ForestSpotCard>();
        }

        // Boğaziçi Yönetim & İBB Resmi Markalama
        if (FindFirstObjectByType<BogaziciForestBranding>() == null)
        {
            GameObject brandingObj = new GameObject("BogaziciForestBranding");
            brandingObj.AddComponent<BogaziciForestBranding>();
        }
    }

    void SahneyiKur(int bolumId)
    {
        int indeks = bolumId - 1;
        if (indeks >= 0 && indeks < bolumArkaplanlari.Length)
        {
            if (arkaplanRenderer != null && bolumArkaplanlari[indeks] != null)
            {
                arkaplanRenderer.sprite = bolumArkaplanlari[indeks];
            }
        }
    }

    public void PuanKazan(int miktar)
    {
        if (oyunBittiMi) return;

        guncelSkor += miktar;
        SkoruGuncelle(false);

        if (guncelSkor >= hedefSkor)
        {
            BolumuBitir();
        }
    }

    public void AltinToplandi(int temelPuan = 100)
    {
        if (oyunBittiMi) return;

        SoundManager.Instance?.PlayCollect();

        // Kamp Sistemi: Kamp Ateşi seviyesine göre altın ve puan çarpanı
        int campfireLevel = PlayerPrefs.GetInt("campfire_level", 0);
        int altinCarpan = 1;
        if (campfireLevel >= 5) altinCarpan = 3;
        else if (campfireLevel >= 2) altinCarpan = 2;

        buBolumToplananAltin += altinCarpan;
        int kazanilanSkor = temelPuan + (campfireLevel * 10);

        guncelSkor += kazanilanSkor;
        SkoruGuncelle(true); // Altın toplama Game Feel punch efekti

        if (guncelSkor >= hedefSkor)
        {
            BolumuBitir();
        }
    }

    private Coroutine skorPunchCoroutine;

    void SkoruGuncelle(bool punchEfekti = false)
    {
        if (skorText != null)
        {
            skorText.text = $"SKOR: {guncelSkor} / {hedefSkor}";
            if (punchEfekti && gameObject.activeInHierarchy)
            {
                if (skorPunchCoroutine != null) StopCoroutine(skorPunchCoroutine);
                skorPunchCoroutine = StartCoroutine(SkorPunchRutini());
            }
        }
    }

    private IEnumerator SkorPunchRutini()
    {
        if (skorText == null) yield break;
        Transform t = skorText.transform;
        t.localScale = new Vector3(1.2f, 1.2f, 1f);
        float elapsed = 0f;
        while (elapsed < 0.15f)
        {
            elapsed += Time.deltaTime;
            t.localScale = Vector3.Lerp(new Vector3(1.2f, 1.2f, 1f), Vector3.one, elapsed / 0.15f);
            yield return null;
        }
        t.localScale = Vector3.one;
    }

    public void Yenildin()
    {
        if (oyunBittiMi) return;
        oyunBittiMi = true;

        SoundManager.Instance?.PlayGameOver();

        Spawner spawner = FindObjectOfType<Spawner>();
        if (spawner != null) spawner.UretimiDurdur();

        AltinlariCuzdanaKaydet();
        Time.timeScale = 0;
        if (gameOverPaneli != null) gameOverPaneli.SetActive(true);
    }

    void BolumuBitir()
    {
        if (oyunBittiMi) return;
        oyunBittiMi = true;

        Spawner spawner = FindObjectOfType<Spawner>();
        if (spawner != null) spawner.UretimiDurdur();

        Debug.Log($"TEBRİKLER! {gecerliBolumID}. Bölüm başarıyla tamamlandı!");
        AltinlariCuzdanaKaydet();

        // DataManager kilit açma şifrelerini doğrudan hafızaya işleme
        int suankiBolumIndeksi = gecerliBolumID - 1;
        PlayerPrefs.SetInt("LevelState_" + suankiBolumIndeksi, 3); // Oynanan: Tamamlandı
        if (suankiBolumIndeksi + 1 <= 9)
        {
            PlayerPrefs.SetInt("LevelState_" + (suankiBolumIndeksi + 1), 2); // Sonraki: Açık
        }
        PlayerPrefs.Save();

        Time.timeScale = 0;

        // 10. BÖLÜM BÜYÜK FİNAL KONTROLÜ
        GrandVictoryLogic grandVictory = FindObjectOfType<GrandVictoryLogic>();
        if (gecerliBolumID >= 10 && grandVictory != null)
        {
            int toplamAltin = PlayerPrefs.GetInt("total_coins", 0);
            grandVictory.ShowGrandVictory(toplamAltin);
            return;
        }

        // 5. BÖLÜM ARA KİLOMETRE TAŞI: BELTUR ÖDÜL KUTLAMASI
        if (gecerliBolumID == 5)
        {
            if (bilgiMetniObjesi != null)
            {
                bilgiMetniObjesi.text = "🎉 TEBRİKLER! 5. ETAP (MACERA PARKI) TAMAMLANDI!\n\n" +
                                        "İBB BELTUR İkram Kuponunuz Maceracı Pasaportu'nuza tanımlandı! " +
                                        "Kemerburgaz Kent Ormanı BELTUR kafelerinde ikramınızı afiyetle alabilirsiniz.";
            }
        }
        else if (bilgiMetniObjesi != null)
        {
            // Dinamik Doğa Bilgisi (Gemini AI veya Zengin Kemerburgaz Havuzu)
            if (GeminiForestService.Instance != null)
            {
                bilgiMetniObjesi.text = GeminiForestService.Instance.GetFallbackFact(gecerliBolumID);
                GeminiForestService.Instance.GetForestFact(gecerliBolumID, guncelSkor, "Maceracı", (fact) =>
                {
                    if (bilgiMetniObjesi != null) bilgiMetniObjesi.text = fact;
                });
            }
            else if (ormanBilgileri != null && ormanBilgileri.Length > 0)
            {
                int rastgeleIndex = Random.Range(0, ormanBilgileri.Length);
                bilgiMetniObjesi.text = ormanBilgileri[rastgeleIndex];
            }
        }

        if (basariPaneli != null) basariPaneli.SetActive(true);
    }

    void AltinlariCuzdanaKaydet()
    {
        if (buBolumToplananAltin > 0)
        {
            int eskiAltin = PlayerPrefs.GetInt("total_coins", 0);
            PlayerPrefs.SetInt("total_coins", eskiAltin + buBolumToplananAltin);
            PlayerPrefs.Save();
            buBolumToplananAltin = 0; // Çift kayıt oluşmasını önle
        }
    }

    // BUTON FONKSİYONLARI
    public void OyunuYenidenBaslat() 
    { 
        AltinlariCuzdanaKaydet();
        Time.timeScale = 1;
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex); 
    }
    public void AnaMenuyeDon() 
    { 
        AltinlariCuzdanaKaydet();
        Time.timeScale = 1;
        SceneManager.LoadScene("MainMenuScene"); 
    } 
    public void BolumSecimineDon() 
    { 
        AltinlariCuzdanaKaydet();
        Time.timeScale = 1;
        PlayerPrefs.SetInt("BolumPaneliAc", 1); 
        PlayerPrefs.Save();
        SceneManager.LoadScene("MainMenuScene"); 
    } 

    public void SonrakiBolumeGec()
    {
        AltinlariCuzdanaKaydet();
        Time.timeScale = 1;

        if (gecerliBolumID < 10)
        {
            PlayerPrefs.SetInt("SecilenBolumID", gecerliBolumID + 1);
            PlayerPrefs.Save();
            SceneManager.LoadScene("GameScene");
        }
        else
        {
            BolumSecimineDon();
        }
    }
}