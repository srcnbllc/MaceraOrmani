using UnityEngine;

/// <summary>
/// Kemerburgaz Kent Ormanı - Karakter Yükleyicisi
/// Menüde seçilen karakteri (Tilki, Maymun vb.) doğru kimlik anahtarıyla
/// hafızadan çeker ve sahneye yerleştirir.
/// </summary>
public class KarakterYukleyici : MonoBehaviour
{
    [Header("Karakter Paketleri")]
    [Tooltip("0: Tilki (ID 1), 1: Maymun (ID 2), vb.")]
    public GameObject[] karakterPrefablari; 

    void Awake()
    {
        // 1. Önce modern 'SelectedCharacterID' anahtarına bak (1=Tilki, 2=Maymun)
        int secilenID = 0;
        if (PlayerPrefs.HasKey("SelectedCharacterID"))
        {
            secilenID = PlayerPrefs.GetInt("SelectedCharacterID", 1) - 1;
        }
        else if (PlayerPrefs.HasKey("SecilenKarakterID"))
        {
            secilenID = PlayerPrefs.GetInt("SecilenKarakterID", 0);
        }

        // Güvenlik sınırları
        if (secilenID < 0 || karakterPrefablari == null || secilenID >= karakterPrefablari.Length)
        {
            secilenID = 0; // Varsayılan Tilki
        }

        if (karakterPrefablari != null && karakterPrefablari.Length > secilenID && karakterPrefablari[secilenID] != null)
        {
            Instantiate(karakterPrefablari[secilenID], transform.position, Quaternion.identity);
        }
    }
}