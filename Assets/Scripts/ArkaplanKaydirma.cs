using UnityEngine;

public class ArkaplanKaydirma : MonoBehaviour
{
    [Header("Kaydırma Ayarları")]
    public float kaydirmaHizi = 3f;

    private float dunyaGenisligi;
    private Vector3 baslangicPozisyonu;
    
    private GameObject kopyaArkaplan;
    private SpriteRenderer anaSr;
    private SpriteRenderer kopyaSr;

    void Start()
    {
        anaSr = GetComponent<SpriteRenderer>();
        baslangicPozisyonu = transform.position;
        
        anaSr.drawMode = SpriteDrawMode.Simple; 
        
        // 1. DÜNYA GENİŞLİĞİ: Resmin ekranda (Scale ve Sprite bounds dahil) kapladığı gerçek alan. 
        // Bunu hem başa sarma matematiğinde hem de klonu yerleştirirken kullanacağız.
        dunyaGenisligi = anaSr.bounds.size.x; 

        kopyaArkaplan = new GameObject("Arkaplan_Klon");
        // KUSURSUZ BAĞLANTI: Kopyayı ana objenin bir parçası yapmak yerine, bağımsız ama aynı seviyede bir obje yapıyoruz.
        // Bu sayede Scale ve Transform problemleri birbirine karışmıyor.
        kopyaArkaplan.transform.position = baslangicPozisyonu; 
        kopyaArkaplan.transform.rotation = transform.rotation;
        
        // Ana objenin o anki Scale değerini kopyaya manuel olarak kopyala
        kopyaArkaplan.transform.localScale = transform.localScale; 
        
        kopyaSr = kopyaArkaplan.AddComponent<SpriteRenderer>();
        kopyaSr.sprite = anaSr.sprite;
        kopyaSr.sortingLayerID = anaSr.sortingLayerID;
        kopyaSr.sortingOrder = anaSr.sortingOrder;
        kopyaSr.color = anaSr.color;

        // KUSURSUZ HİZALAMA: Kopyayı ana objenin tam dünya pozisyonunun sağına ekliyoruz.
        kopyaArkaplan.transform.position += new Vector3(dunyaGenisligi, 0, 0);
    }

    void Update()
    {
        if (Time.timeScale > 0)
        {
            if (kopyaSr.sprite != anaSr.sprite)
            {
                kopyaSr.sprite = anaSr.sprite;
                
                // Resim değiştiğinde dünya genişliğini ve klon pozisyonunu yeniden hesapla
                dunyaGenisligi = anaSr.bounds.size.x;
                kopyaArkaplan.transform.position = transform.position + new Vector3(dunyaGenisligi, 0, 0);
            }

            // Sola doğru kaydır
            transform.position += Vector3.left * kaydirmaHizi * Time.deltaTime;
            
            // Klon objeyi de ana objeyle beraber sola doğru kaydırıyoruz.
            kopyaArkaplan.transform.position = transform.position + new Vector3(dunyaGenisligi, 0, 0);

            // Küsüratı koruyarak başa sarma döngüsü
            if (baslangicPozisyonu.x - transform.position.x >= dunyaGenisligi)
            {
                transform.position += new Vector3(dunyaGenisligi, 0, 0);
            }
        }
    }

    private void OnDestroy()
    {
        if (kopyaArkaplan != null)
        {
            Destroy(kopyaArkaplan);
        }
    }
}