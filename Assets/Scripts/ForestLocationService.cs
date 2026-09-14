using System;
using System.Collections;
using UnityEngine;

/// <summary>
/// Kemerburgaz Kent Ormanı - Saha Konum ve Coğrafi Sınır (Geofencing) Servisi
/// Oyuncunun telefon GPS'ini kullanarak gerçekten Kemerburgaz Kent Ormanı
/// sınırları içinde olup olmadığını doğrular.
/// Sahada olmayan oyuncuların internetten QR fotoğrafı bularak evden
/// oyun bitirmesini engellemek için isteğe bağlı olarak aktif edilebilir.
/// </summary>
public class ForestLocationService : MonoBehaviour
{
    public static ForestLocationService Instance { get; private set; }

    [Header("Orman Merkez Koordinatları (Kemerburgaz)")]
    public double ormanEnlem = 41.1685;    // Latitude
    public double ormanBoylam = 28.9025;   // Longitude
    
    [Tooltip("Orman kapsama yarıçapı (metre cinsinden - 5.5 milyon m2 için ~2500m)")]
    public float ormanYaricapiMetre = 2500f;

    [Header("Güvenlik & Zorunluluk")]
    [Tooltip("İşaretlenirse QR okutmadan önce GPS konum doğrulaması zorunlu tutulur. Testler için kapalı tutulabilir.")]
    public bool konumZorunluMu = false;

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
    /// Cihazın orman sınırları içinde olup olmadığını denetler.
    /// </summary>
    public void CheckLocationInForest(Action<bool, string> onComplete)
    {
        // Eğer konum zorunlu değilse doğrudan başarılı say (geliştirici ve test kolaylığı)
        if (!konumZorunluMu)
        {
            onComplete?.Invoke(true, "Konum zorunluluğu kapalı (Test Modu)");
            return;
        }

#if UNITY_EDITOR
        // Editörde GPS olmadığı için her zaman izin ver
        onComplete?.Invoke(true, "Unity Editor: Konum doğrulandı");
        return;
#else
        StartCoroutine(LocationCheckRoutine(onComplete));
#endif
    }

    private IEnumerator LocationCheckRoutine(Action<bool, string> onComplete)
    {
        if (!Input.location.isEnabledByUser)
        {
            onComplete?.Invoke(false, "Lütfen cihazınızın Konum (GPS) servisini açın.");
            yield break;
        }

        Input.location.Start(50f, 50f);

        int maxWait = 10;
        while (Input.location.status == LocationServiceStatus.Initializing && maxWait > 0)
        {
            yield return new WaitForSeconds(1);
            maxWait--;
        }

        if (maxWait < 1 || Input.location.status == LocationServiceStatus.Failed)
        {
            Input.location.Stop();
            onComplete?.Invoke(false, "Cihaz konumu alınamadı.");
            yield break;
        }

        double userLat = Input.location.lastData.latitude;
        double userLon = Input.location.lastData.longitude;
        Input.location.Stop();

        float distance = CalculateDistance(ormanEnlem, ormanBoylam, userLat, userLon);

        if (distance <= ormanYaricapiMetre)
        {
            onComplete?.Invoke(true, $"Konum Doğrulandı! Orman merkezine mesafe: {Mathf.RoundToInt(distance)}m");
        }
        else
        {
            onComplete?.Invoke(false, $"Kemerburgaz Kent Ormanı sınırları dışındasınız ({Mathf.RoundToInt(distance / 1000f)} km uzakta). Ödülleri açmak için lütfen ormana gelin!");
        }
    }

    /// <summary>
    /// Haversine formülü ile iki koordinat arasındaki mesafeyi metre cinsinden hesaplar.
    /// </summary>
    private float CalculateDistance(double lat1, double lon1, double lat2, double lon2)
    {
        double R = 6371000; // Dünya yarıçapı (metre)
        double dLat = (lat2 - lat1) * Mathf.Deg2Rad;
        double dLon = (lon2 - lon1) * Mathf.Deg2Rad;

        double a = Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                   Math.Cos(lat1 * Mathf.Deg2Rad) * Math.Cos(lat2 * Mathf.Deg2Rad) *
                   Math.Sin(dLon / 2) * Math.Sin(dLon / 2);

        double c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
        return (float)(R * c);
    }
}
