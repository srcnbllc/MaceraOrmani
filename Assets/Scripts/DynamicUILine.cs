using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(RectTransform))]
[RequireComponent(typeof(Image))]
public class DynamicUILine : MonoBehaviour
{
    public RectTransform startObject; // Başlangıç Leveli (Örn: Level 1)
    public RectTransform endObject;   // Bitiş Leveli (Örn: Level 2)
    public float lineThickness = 15f; // Çizgi kalınlığı

    private RectTransform myRectTransform;

    void Awake()
    {
        myRectTransform = GetComponent<RectTransform>();
    }

    // Haritayı kaydırırken çizgilerin de güncellenmesi için Update kullanıyoruz.
    // Level yerlerini değiştirdiğinde Update anında çizgiyi günceller.
    void Update()
    {
        if (startObject == null || endObject == null) return;

        UpdateLine();
    }
void UpdateLine()
    {
        // 1. İki nokta arasındaki yönü ve mesafeyi hesapla
        // BURAYI DÜZELTTİK: Vector2 yerine Vector3 kullanıyoruz ki matematik çakışmasın.
        Vector3 difference = endObject.localPosition - startObject.localPosition;
        float distance = difference.magnitude;

        // 2. Çizginin boyutunu (uzunluk ve kalınlık) ayarla
        myRectTransform.sizeDelta = new Vector2(distance, lineThickness);

        // 3. Çizginin pozisyonunu tam ortaya yerleştir
        // Artık ikisi de Vector3 olduğu için C# bunları sorunsuz toplayacak
        myRectTransform.localPosition = startObject.localPosition + (difference / 2f);

        // 4. Çizginin açısını hesapla ve döndür
        float angle = Mathf.Atan2(difference.y, difference.x) * Mathf.Rad2Deg;
        myRectTransform.rotation = Quaternion.Euler(0, 0, angle);
    }
}