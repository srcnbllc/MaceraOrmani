using UnityEngine;

/// <summary>
/// Kemerburgaz Kent Ormanı - Gelişmiş ve Tepkisel Karakter Kontrolcüsü
/// Sıfır gecikmeli (Zero-lag) kontroller:
/// 1. Ekrana Dokunma (Tap to Jump)
/// 2. Yukarı Kaydırma (Instant Swipe Up)
/// 3. Klavye (Boşluk / Yukarı Ok)
/// 4. Zıplama Ön Belleği (Jump Buffer) & Coyote Time (Tolerans süresi)
/// </summary>
public class KarakterKontrol : MonoBehaviour
{
    [Header("Zıplama & Fizik")]
    public float ziplamaGucu = 13.5f;
    public float yukariEgimAcisi = 25f;  
    public float asagiEgimAcisi = -10f;
    public float minKaydirmaMesafesi = 40f;

    [Header("Tepkisellik / Game Feel")]
    [Tooltip("Yere inmeden hemen önce basılan zıplamayı hafızada tutma süresi")]
    public float jumpBufferSuresi = 0.15f;
    private float jumpBufferSayaci = 0f;

    [Tooltip("Yerden ayrıldıktan sonraki mikro zıplama tolerans süresi")]
    public float coyoteSuresi = 0.12f;
    private float coyoteSayaci = 0f;

    [Header("Eğilme / Kayma (Slide) & Hızlı İniş")]
    public float slideSuresi = 0.55f;
    public float fastFallHizi = -14f;
    private float slideSayaci = 0f;
    private bool kayiyorMu = false;
    private Vector3 orijinalScale;

    private Rigidbody2D rb;
    private bool yerdeMi = true;
    private Vector2 baslangicDokunma;
    private float dokunmaZamani;
    private bool buDokunustaIslemYapildi = false;
    
    private LevelManager levelManager; 

    private void Awake()
    {
        // Tag garantisi (Sahnedeki arama ve çarpışma fonksiyonları için)
        if (!gameObject.CompareTag("Player"))
        {
            gameObject.tag = "Player";
        }
    }

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        levelManager = FindObjectOfType<LevelManager>(); 
        orijinalScale = transform.localScale;

        // Seçilen Karakterin (Tilki, Maymun, Ayı/Kaplan) Benzersiz Fizik & Yetenek Ayarları
        int secilenID = 1;
        if (PlayerPrefs.HasKey("SelectedCharacterID"))
            secilenID = PlayerPrefs.GetInt("SelectedCharacterID", 1);
        else if (PlayerPrefs.HasKey("SecilenKarakterID"))
            secilenID = PlayerPrefs.GetInt("SecilenKarakterID", 0) + 1;

        if (secilenID == 2) // Maymun: Yüksek Zıplama & Çevik Akrobasi
        {
            ziplamaGucu = 14.6f;
            jumpBufferSuresi = 0.18f;
            coyoteSuresi = 0.15f;
            if (rb != null) rb.gravityScale = 2.3f;
        }
        else if (secilenID == 3) // Dayanıklı Kahraman: Tok Yerçekimi & Stabilite
        {
            ziplamaGucu = 13.4f;
            jumpBufferSuresi = 0.14f;
            coyoteSuresi = 0.10f;
            if (rb != null) rb.gravityScale = 2.5f;
        }
        else // 1: Tilki (Dengeli & Hızlı Tepkili)
        {
            ziplamaGucu = 13.8f;
            jumpBufferSuresi = 0.15f;
            coyoteSuresi = 0.12f;
            if (rb != null) rb.gravityScale = 2.4f;
        }
    }

    void Update()
    {
        GirdileriDinle();
        ZiplamaKontrolu();
        SlideKontrolu();
        RotasyonGuncelle(); 
    }

    private void GirdileriDinle()
    {
        // Coyote Time sayacı
        if (yerdeMi)
        {
            coyoteSayaci = coyoteSuresi;
        }
        else
        {
            coyoteSayaci -= Time.deltaTime;
        }

        // Jump Buffer sayacı
        if (jumpBufferSayaci > 0)
        {
            jumpBufferSayaci -= Time.deltaTime;
        }

        // 1. DOKUNMA VE SWIPE KONTROLÜ (Mobil + Fare)
        if (Input.GetMouseButtonDown(0))
        {
            baslangicDokunma = Input.mousePosition;
            dokunmaZamani = Time.time;
            buDokunustaIslemYapildi = false;
        }

        // Sürükleme / Swipe algılama (parmağı kaldırmadan anında tepki)
        if (Input.GetMouseButton(0) && !buDokunustaIslemYapildi)
        {
            Vector2 suankiPozisyon = Input.mousePosition;
            float dikeyFark = suankiPozisyon.y - baslangicDokunma.y;
            float yatayFark = suankiPozisyon.x - baslangicDokunma.x;

            // Yukarı Kaydırma (Instant Jump)
            if (dikeyFark > minKaydirmaMesafesi && Mathf.Abs(dikeyFark) > Mathf.Abs(yatayFark))
            {
                jumpBufferSayaci = jumpBufferSuresi;
                buDokunustaIslemYapildi = true;
            }
            // Aşağı Kaydırma (Slide / Fast Fall)
            else if (dikeyFark < -minKaydirmaMesafesi && Mathf.Abs(dikeyFark) > Mathf.Abs(yatayFark))
            {
                AsagiKaymaHareketi();
                buDokunustaIslemYapildi = true;
            }
        }

        // Parmağı Bırakma (Kısa Dokunma / Tap to Jump)
        if (Input.GetMouseButtonUp(0) && !buDokunustaIslemYapildi)
        {
            float gecenZaman = Time.time - dokunmaZamani;
            float mesafe = Vector2.Distance(Input.mousePosition, baslangicDokunma);

            if (gecenZaman < 0.28f && mesafe < minKaydirmaMesafesi)
            {
                jumpBufferSayaci = jumpBufferSuresi; // Tap to Jump
            }
        }

        // 2. KLAVYE KONTROLÜ (PC / Editör Testleri)
        if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W))
        {
            jumpBufferSayaci = jumpBufferSuresi;
        }

        if (Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow))
        {
            AsagiKaymaHareketi();
        }
    }

    private void AsagiKaymaHareketi()
    {
        if (!yerdeMi)
        {
            // Havadayken Hızlı İniş (Fast Fall)
            if (rb != null)
            {
                rb.linearVelocity = new Vector2(rb.linearVelocity.x, fastFallHizi);
            }
        }
        else if (!kayiyorMu)
        {
            // Yerdeyken Kayma (Slide)
            kayiyorMu = true;
            slideSayaci = slideSuresi;
            transform.localScale = new Vector3(orijinalScale.x * 1.15f, orijinalScale.y * 0.55f, orijinalScale.z);
            SoundManager.Instance?.PlaySlide();
        }
    }

    private void SlideKontrolu()
    {
        if (kayiyorMu)
        {
            slideSayaci -= Time.deltaTime;
            if (slideSayaci <= 0 || !yerdeMi)
            {
                kayiyorMu = false;
            }
        }
        else
        {
            // Orijinal ölçeğe yumuşak geri dönüş
            transform.localScale = Vector3.Lerp(transform.localScale, orijinalScale, Time.deltaTime * 12f);
        }
    }

    private void ZiplamaKontrolu()
    {
        if (jumpBufferSayaci > 0 && coyoteSayaci > 0)
        {
            ZiplamayiGerceklestir();
        }
    }

    private void ZiplamayiGerceklestir()
    {
        if (kayiyorMu) kayiyorMu = false;

        rb.linearVelocity = new Vector2(rb.linearVelocity.x, ziplamaGucu);
        yerdeMi = false;
        jumpBufferSayaci = 0f;
        coyoteSayaci = 0f;
        SoundManager.Instance?.PlayJump();
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Zemin")) 
        {
            if (!yerdeMi && !kayiyorMu)
            {
                // Yere iniş mikro basıklığı (Landing Squash Game Feel)
                transform.localScale = new Vector3(orijinalScale.x * 1.08f, orijinalScale.y * 0.90f, orijinalScale.z);
            }
            yerdeMi = true;
        }
        
        // ENGELE ÇARPINCA
        if (collision.gameObject.CompareTag("Engel"))
        {
            PlayerHealthSystem healthSystem = GetComponent<PlayerHealthSystem>();
            if (healthSystem == null) healthSystem = PlayerHealthSystem.Instance;

            if (healthSystem != null)
            {
                healthSystem.HasarAl(1);
            }
            else if (levelManager != null) 
            {
                levelManager.Yenildin(); 
            }
        }
    }

    private void OnCollisionStay2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Zemin"))
        {
            yerdeMi = true;
        }
    }

    private void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Zemin"))
        {
            yerdeMi = false;
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        // ALTIN TOPLAYINCA (Kamp Ateşi Çarpanı ile Birlikte)
        if (collision.gameObject.CompareTag("Altin"))
        {
            if (levelManager != null) 
            {
                levelManager.AltinToplandi(100); 
            }
            
            Destroy(collision.gameObject); // Altını yok et
        }
    }

    private void RotasyonGuncelle()
    {
        if (!yerdeMi)
        {
            float hedefAci = rb.linearVelocity.y > 0 ? yukariEgimAcisi : asagiEgimAcisi;
            transform.rotation = Quaternion.Lerp(transform.rotation, Quaternion.Euler(0, 0, hedefAci), Time.deltaTime * 10f);
        }
        else
        {
            transform.rotation = Quaternion.Lerp(transform.rotation, Quaternion.Euler(0, 0, 0), Time.deltaTime * 15f);
        }
    }
}