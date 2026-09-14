using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - 10. Bölüm Büyük Final (End-Game) Mantığı
/// Oyuncu 10. bölümü tamamladığında özel bir tebrik ekranı açar.
/// Gemini AI ile oluşturulan kişisel 'Orman Muhafızı Beratı'nı gösterir,
/// kazanılan Zipline ödülünü kutlar ve ödül kuponuna yönlendirir.
/// </summary>
public class GrandVictoryLogic : MonoBehaviour
{
    [Header("UI Elemanları")]
    [SerializeField] private GameObject victoryPanel;
    [SerializeField] private TextMeshProUGUI titleText;
    [SerializeField] private TextMeshProUGUI certificateText;
    [SerializeField] private TextMeshProUGUI totalGoldText;
    [SerializeField] private Button viewRewardButton;
    [SerializeField] private Button returnMenuButton;

    private void Awake()
    {
        if (victoryPanel != null) victoryPanel.SetActive(false);

        if (returnMenuButton != null)
        {
            returnMenuButton.onClick.RemoveAllListeners();
            returnMenuButton.onClick.AddListener(OnReturnMenuClicked);
        }

        if (viewRewardButton != null)
        {
            viewRewardButton.onClick.RemoveAllListeners();
            viewRewardButton.onClick.AddListener(OnViewRewardClicked);
        }
    }

    /// <summary>
    /// 10. Bölüm bittiğinde LevelManager tarafından çağrılır.
    /// </summary>
    public void ShowGrandVictory(int totalCoins)
    {
        Time.timeScale = 0;

        if (victoryPanel != null) victoryPanel.SetActive(true);

        if (titleText != null)
        {
            titleText.text = "İBB & BOĞAZİÇİ YÖNETİM A.Ş.\nKEMERBURGAZ KENT ORMANI BÜYÜK ŞAMPİYONLUĞU";
        }

        if (totalGoldText != null)
        {
            totalGoldText.text = $"Toplam Toplanan Altın: {totalCoins}";
        }

        if (certificateText != null)
        {
            certificateText.text = "Resmi Doğa ve Tarih Muhafızı Beratı Hazırlanıyor...";
        }

        // Gemini AI'dan veya yerel zengin havuzdan berat metnini al
        if (GeminiForestService.Instance != null)
        {
            GeminiForestService.Instance.GetGrandCertificate("Genç Maceracı", totalCoins, (berat) =>
            {
                if (certificateText != null)
                {
                    certificateText.text = berat;
                }
            });
        }
        else
        {
            if (certificateText != null)
            {
                certificateText.text = "Kemerburgaz Kent Ormanı'nın tüm etaplarını üstün başarıyla tamamlayarak doğanın koruyucusu oldunuz. Zipline ödülünüz Maceracı Pasaportu'na tanımlandı!";
            }
        }
    }

    public void OnViewRewardClicked()
    {
        // Pasaportu açacak şekilde ana menüye yönlendir
        Time.timeScale = 1f;
        PlayerPrefs.SetInt("BolumPaneliAc", 0);
        PlayerPrefs.SetInt("PasaportuAc", 1);
        PlayerPrefs.Save();
        SceneManager.LoadScene("MainMenuScene");
    }

    public void OnReturnMenuClicked()
    {
        Time.timeScale = 1f;
        SceneManager.LoadScene("MainMenuScene");
    }
}
