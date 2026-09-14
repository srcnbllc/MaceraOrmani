using System.Collections;
using UnityEngine;

/// <summary>
/// Kemerburgaz Kent Ormanı - Akıllı ve Dinamik Obje Üreticisi (Smart Spawner)
/// 1. Cihaz ekran oranına göre kameranın sağ dış kenarını otomatik hesaplar (10 saniyelik boşluğu yok eder).
/// 2. İlk saniyede oyuncuya moral için başlangıç altını üretir.
/// 3. Asla peş peşe 2'den fazla engel çıkarmaz (Adil Pacing).
/// </summary>
public class Spawner : MonoBehaviour
{
    [Header("Üretilecek Objeler (Prefablar)")]
    public GameObject engelPrefab;
    public GameObject altinPrefab;

    [Header("Üretim Zamanlaması")]
    public float minBekleme = 1.4f; 
    public float maxBekleme = 2.4f; 

    [Header("Adil Oynanış (Pacing) Ayarları")]
    [Tooltip("Arka arkaya çıkabilecek maksimum engel sayısı")]
    public int maksArdisikEngel = 2;
    private int suankiArdisikEngel = 0;

    [Header("Konum Ayarları (Y Ekseni)")]
    [Tooltip("Engellerin (Kütük/Kaya) doğacağı sabit zemin hizası")]
    public float zeminYPos = -3.5f; 

    [Tooltip("Altınların doğabileceği en alt seviye")]
    public float altinMinY = -2.5f;
    [Tooltip("Altınların doğabileceği en üst seviye")]
    public float altinMaxY = -0.5f;

    private bool uretimDevamEdiyor = true;
    private float dinamikSpawnX;

    void Start()
    {
        // KAMERA SAĞ KENARINI OTOMATİK HESAPLA
        // Böylece iPad, iPhone, Android fark etmeksizin objeler tam kameranın 2 birim sağından doğar.
        Camera cam = Camera.main;
        if (cam != null)
        {
            float sagKenarDunyaX = cam.ViewportToWorldPoint(new Vector3(1f, 0.5f, cam.nearClipPlane)).x;
            dinamikSpawnX = sagKenarDunyaX + 2.0f;
            transform.position = new Vector3(dinamikSpawnX, transform.position.y, transform.position.z);
        }
        else
        {
            dinamikSpawnX = 13.0f; // Güvenli yedek
        }

        StartCoroutine(ObjeFirlat());
    }

    IEnumerator ObjeFirlat()
    {
        // 1. ADIM: Oyuncu oyuna ısınsın diye 1.2 saniye sonra tatlı bir başlangıç altını ver
        yield return new WaitForSeconds(1.2f);
        if (altinPrefab != null && uretimDevamEdiyor)
        {
            Vector3 baslangicAltin = new Vector3(dinamikSpawnX, altinMinY, 0);
            Instantiate(altinPrefab, baslangicAltin, Quaternion.identity);
        }

        // 2. ADIM: İlk engelden önce oyuncuya 2 saniye nefes payı bırak
        yield return new WaitForSeconds(1.8f);

        // DÖNGÜ: Oyun devam ettiği sürece akıllı üretim
        while (uretimDevamEdiyor)
        {
            float beklemeSuresi = Random.Range(minBekleme, maxBekleme);
            yield return new WaitForSeconds(beklemeSuresi);

            if (!uretimDevamEdiyor) break;

            // Arka arkaya engel çıkma kontrolü
            bool engelUret = true;
            if (suankiArdisikEngel >= maksArdisikEngel)
            {
                engelUret = false;
            }
            else
            {
                // %60 engel, %40 altın dengesi
                engelUret = Random.value < 0.60f;
            }

            if (engelUret && engelPrefab != null)
            {
                Vector3 engelKonumu = new Vector3(dinamikSpawnX, zeminYPos, 0);
                Instantiate(engelPrefab, engelKonumu, Quaternion.identity);
                suankiArdisikEngel++;
            }
            else if (altinPrefab != null)
            {
                suankiArdisikEngel = 0; // Engel serisini sıfırla

                int altinAdedi = Random.value > 0.4f ? 2 : 1;
                float hedefY = Random.Range(altinMinY, altinMaxY);

                for (int i = 0; i < altinAdedi; i++)
                {
                    Vector3 altinKonumu = new Vector3(dinamikSpawnX + (i * 1.3f), hedefY, 0);
                    Instantiate(altinPrefab, altinKonumu, Quaternion.identity);
                }
            }
        }
    }

    public void UretimiDurdur()
    {
        uretimDevamEdiyor = false;
    }
}