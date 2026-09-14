using System.Collections;
using UnityEngine;
using TMPro;

/// <summary>
/// Kemerburgaz Kent Ormanı - Oyun İçi Kontrol İpucu (Visual Tutorial Hint)
/// Oyun başladığında ekranın altında oyuncuya ne yapması gerektiğini
/// nazikçe gösterir ("Zıplamak İçin Dokun veya Yukarı Kaydır").
/// Oyuncu ilk zıplamayı yaptığında veya 3 saniye sonra yumuşakça kaybolur.
/// </summary>
public class InGameTutorialHint : MonoBehaviour
{
    [Header("UI Elemanları")]
    [SerializeField] private TextMeshProUGUI hintText;
    [SerializeField] private CanvasGroup canvasGroup;

    [Header("Zamanlama")]
    public float gosterimSuresi = 3.5f;
    public float kaybolmaHizi = 2f;

    private bool kayboluyorMu = false;

    private void Start()
    {
        if (canvasGroup == null) canvasGroup = GetComponent<CanvasGroup>();
        if (hintText == null) hintText = GetComponentInChildren<TextMeshProUGUI>();

        if (hintText != null)
        {
            string dil = PlayerPrefs.GetString("current_language", "TR");
            hintText.text = dil == "EN" 
                ? "Tap / Swipe Up: Jump  •  Swipe Down: Slide" 
                : "Zıpla: Dokun / Yukarı Kaydır  •  Eğil: Aşağı Kaydır";
        }

        StartCoroutine(OtomatikKaybolRoutine());
    }

    private void Update()
    {
        // Oyuncu zıplamak için ekrana dokunduğu anda ipucunu erken kaldır
        if (!kayboluyorMu && (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Space)))
        {
            StopAllCoroutines();
            StartCoroutine(KaybolRoutine());
        }
    }

    private IEnumerator OtomatikKaybolRoutine()
    {
        yield return new WaitForSeconds(gosterimSuresi);
        StartCoroutine(KaybolRoutine());
    }

    private IEnumerator KaybolRoutine()
    {
        kayboluyorMu = true;

        if (canvasGroup != null)
        {
            while (canvasGroup.alpha > 0)
            {
                canvasGroup.alpha -= Time.deltaTime * kaybolmaHizi;
                yield return null;
            }
        }

        gameObject.SetActive(false);
    }
}
