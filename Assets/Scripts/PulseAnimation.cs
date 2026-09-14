using UnityEngine;

public class PulseAnimation : MonoBehaviour
{
    [Header("Animasyon Ayarları")]
    public float speed = 3f; // Büyüyüp küçülme hızı
    public float scaleAmount = 0.05f; // Ne kadar büyüyeceği

    private Vector3 startScale;

    void Start()
    {
        startScale = transform.localScale; // Başlangıç boyutunu hafızaya al
    }

    void Update()
    {
        // Matematiksel Sinüs dalgası ile yumuşak büyüyüp küçülme (TimeScale=0 iken dahi UI akıcı kalır)
        float pulse = Mathf.Sin(Time.unscaledTime * speed) * scaleAmount;
        transform.localScale = startScale + new Vector3(pulse, pulse, 0);
    }
}