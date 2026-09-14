using UnityEngine;

/// <summary>
/// Kemerburgaz Kent Ormanı - Dinamik Engel ve Obje Hareketi
/// Seviyeye göre (Bölüm 1'den 10'a) hızı otomatik uyarlar.
/// Engelin üzerinden başarıyla atlayan oyuncuyu ödüllendirir (+25 puan).
/// </summary>
public class SolaHareket : MonoBehaviour
{
    [Header("Hareket Ayarları")]
    public float hiz = 5f; 
    private float solSinir = -15f; 

    private LevelManager levelManager;
    private bool puanVerildi = false;
    private float oyuncuX = -1.73f;

    void Start()
    {
        levelManager = FindObjectOfType<LevelManager>();
        if (levelManager != null)
        {
            hiz = levelManager.seviyeHizi;
        }

        // Sahnedeki oyuncunun X pozisyonunu referans al
        GameObject player = GameObject.FindWithTag("Player");
        if (player != null)
        {
            oyuncuX = player.transform.position.x;
        }

        // Ekranın sol kenarına göre güvenli yok olma sınırı hesapla
        Camera cam = Camera.main;
        if (cam != null)
        {
            float solKenarDunyaX = cam.ViewportToWorldPoint(new Vector3(0f, 0.5f, cam.nearClipPlane)).x;
            solSinir = solKenarDunyaX - 3.0f;
        }
    }

    void Update()
    {
        transform.Translate(Vector3.left * hiz * Time.deltaTime);

        // ENGELDEN BAŞARIYLA ATLAYAN OYUNCUYA ÖDÜL PUANI (+25 Puan + Eğitim Kuklası Bonusu)
        if (!puanVerildi && CompareTag("Engel") && transform.position.x < oyuncuX)
        {
            puanVerildi = true;
            if (levelManager != null)
            {
                // Kamp Sistemi: Eğitim Kuklası seviyesine göre akrobasi puanı (25 -> 100)
                int dummyLevel = PlayerPrefs.GetInt("dummy_level", 0);
                int atlamaPuani = 25 + (dummyLevel * 15);
                levelManager.PuanKazan(atlamaPuani);
            }
        }

        if (transform.position.x < solSinir)
        {
            Destroy(gameObject);
        }
    }
}