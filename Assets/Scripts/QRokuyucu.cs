using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using ZXing;

/// <summary>
/// Kemerburgaz Kent Ormanı - Gelişmiş QR Kod Okuyucu
/// Mobil kamera izinlerini denetler, kullanıcıya ekranda anlık durum mesajları verir
/// ve hedeflenen 'BOLUM_X' kodunu güvenle çözümler.
/// </summary>
public class QROkuyucu : MonoBehaviour
{
    [Header("Arayüz Bağlantıları")]
    public RawImage kameraEkrani;
    public GameObject qrPaneli; 
    
    [Header("Görsel Durum & Bilgilendirme")]
    [Tooltip("Kullanıcıya 'Kamera Açılıyor', 'Yanlış Kod' gibi mesajları ekranda göstermek için.")]
    public TextMeshProUGUI durumMetni;

    private WebCamTexture kameraTexture;
    private IBarcodeReader barkodOkuyucu;
    private bool taramaAktif = false;

    void OnEnable()
    {
        barkodOkuyucu = new BarcodeReader();
        barkodOkuyucu.Options.PossibleFormats = new[] { BarcodeFormat.QR_CODE };
        
        StartCoroutine(KamerayiBaslatRoutine());
    }

    private IEnumerator KamerayiBaslatRoutine()
    {
        if (durumMetni != null)
        {
            int beklenen = PlayerPrefs.GetInt("BeklenenBolumQR", 1);
            durumMetni.text = $"Bölüm {beklenen} QR Kodu Taranıyor...";
        }

#if UNITY_ANDROID || UNITY_IOS
        if (!Application.HasUserAuthorization(UserAuthorization.WebCam))
        {
            if (durumMetni != null) durumMetni.text = "Kamera izni isteniyor...";
            yield return Application.RequestUserAuthorization(UserAuthorization.WebCam);
        }

        if (!Application.HasUserAuthorization(UserAuthorization.WebCam))
        {
            if (durumMetni != null) durumMetni.text = "Kamera izni verilmedi! Lütfen ayarlardan izin verin.";
            yield break;
        }
#endif

        try
        {
            if (kameraTexture == null)
            {
                WebCamDevice[] devices = WebCamTexture.devices;
                if (devices.Length == 0)
                {
                    if (durumMetni != null) durumMetni.text = "Cihazda kamera bulunamadı!";
                    ToastNotificationService.Show("Kamera donanımı bulunamadı.", ToastNotificationService.ToastType.Error);
                    yield break;
                }

                string cameraName = devices[0].name;
                
                // Mobil arka kamerayı tercih et
                for (int i = 0; i < devices.Length; i++)
                {
                    if (!devices[i].isFrontFacing)
                    {
                        cameraName = devices[i].name;
                        break;
                    }
                }

                kameraTexture = new WebCamTexture(cameraName, 640, 480);
            }

            if (kameraEkrani != null)
            {
                kameraEkrani.texture = kameraTexture;
                kameraEkrani.material.mainTexture = kameraTexture;
            }

            kameraTexture.Play();
            taramaAktif = true;
        }
        catch (System.Exception ex)
        {
            Debug.LogError($"[QROkuyucu] Kamera başlatma hatası: {ex.Message}");
            ToastNotificationService.Show("Kamera başlatılamadı.", ToastNotificationService.ToastType.Error);
        }

        yield return null;
    }

    void Update()
    {
        if (kameraTexture != null && kameraTexture.isPlaying && taramaAktif)
        {
            if (kameraEkrani != null)
            {
                kameraEkrani.rectTransform.localEulerAngles = new Vector3(0, 0, -kameraTexture.videoRotationAngle);
            }
            
            if (kameraTexture.didUpdateThisFrame)
            {
                TaramaYap();
            }
        }
    }

    private void TaramaYap()
    {
        try
        {
            var sonuc = barkodOkuyucu.Decode(kameraTexture.GetPixels32(), kameraTexture.width, kameraTexture.height);
            
            if (sonuc != null)
            {
                taramaAktif = false;
                SifreyiCozVeKilidiAc(sonuc.Text);
            }
        }
        catch {}
    }

    private void SifreyiCozVeKilidiAc(string okunanSifre)
    {
        string temizSifre = okunanSifre.ToUpper().Replace("Ö", "O").Replace("Ü", "U").Replace("Ç", "C").Replace("Ş", "S").Replace("Ğ", "G").Replace("İ", "I");

        if (temizSifre.StartsWith("BOLUM_"))
        {
            string bolumNumarasi = temizSifre.Replace("BOLUM_", "");
            
            if (int.TryParse(bolumNumarasi, out int qrLevel))
            {
                int beklenenLevel = PlayerPrefs.GetInt("BeklenenBolumQR", 0);

                if (qrLevel == beklenenLevel)
                {
                    if (durumMetni != null) durumMetni.text = "Doğru Kod! Konum Kontrol Ediliyor...";

                    if (ForestLocationService.Instance != null && ForestLocationService.Instance.konumZorunluMu)
                    {
                        ForestLocationService.Instance.CheckLocationInForest((isInForest, message) =>
                        {
                            if (isInForest)
                            {
                                BolumuAcVeBaslat(qrLevel);
                            }
                            else
                            {
                                if (durumMetni != null) durumMetni.text = message;
                                taramaAktif = true;
                            }
                        });
                    }
                    else
                    {
                        BolumuAcVeBaslat(qrLevel);
                    }
                }
                else
                {
                    if (durumMetni != null) durumMetni.text = $"Yanlış Kod! Beklenen: Bölüm {beklenenLevel}, Okunan: Bölüm {qrLevel}";
                    ToastNotificationService.Show($"Yanlış QR Kod! Beklenen: Bölüm {beklenenLevel}", ToastNotificationService.ToastType.Warning);
                    taramaAktif = true;
                }
            }
        }
        else
        {
            if (durumMetni != null) durumMetni.text = "Geçersiz QR Kod! Bu oyuna ait bir kod değil.";
            ToastNotificationService.Show("Geçersiz QR Kod! Bu oyuna ait değil.", ToastNotificationService.ToastType.Error);
            taramaAktif = true; 
        }
    }

    private void BolumuAcVeBaslat(int qrLevel)
    {
        int levelIndex = qrLevel - 1; 

        PlayerPrefs.SetInt("QR_Zorunlu_Acildi_" + levelIndex, 1);
        PlayerPrefs.SetInt("LevelUnlocked_" + qrLevel, 1);
        PlayerPrefs.SetInt("SecilenBolumID", qrLevel);
        PlayerPrefs.Save();
        
        if (durumMetni != null) durumMetni.text = "Harika! Bölüm Açılıyor...";
        ToastNotificationService.Show($"Bölüm {qrLevel} Açıldı! Parkur Yükleniyor...", ToastNotificationService.ToastType.Success);
        
        if (kameraTexture != null) kameraTexture.Stop();
        Time.timeScale = 1f;
        UnityEngine.SceneManagement.SceneManager.LoadScene("GameScene");
    }

    public void PaneliKapat()
    {
        if (kameraTexture != null && kameraTexture.isPlaying)
        {
            kameraTexture.Stop();
        }
        
        if (qrPaneli != null)
        {
            qrPaneli.SetActive(false);
        }
    }

    void OnDisable()
    {
        if (kameraTexture != null && kameraTexture.isPlaying)
        {
            kameraTexture.Stop();
        }
        taramaAktif = false;
    }
}