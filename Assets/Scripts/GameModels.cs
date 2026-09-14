using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public class HeroData
{
    // Id'yi büyük harf yaparak kodun geri kalanıyla (SelectCurrentCharacter vs) tam uyumlu hale getirdik
    public int Id; 
    
    [Header("UI Details")]
    public string heroName;
    [TextArea] public string description;
    
    [Header("Visuals")]
    public Sprite image;
    public Sprite[] animFrames; // Animasyon motorumuz bunu kullanacak
    
    public Sprite arcadeBadge;
    public RuntimeAnimatorController animController;

    [Header("Stats")]
    [Range(0, 5)] public int speedStars;
    [Range(0, 5)] public int jumpStars;
    [Range(0, 5)] public int durabilityStars;
    public int initialLives = 3;
}

public class GameModels : MonoBehaviour
{
    [SerializeField] private List<HeroData> characters = new List<HeroData>();

    public List<HeroData> GetCharacters()
    {
        return characters;
    }

    // Kodun geri kalanıyla uyumlu olması için burada da Id kullanıyoruz
    public HeroData GetCharacterById(int id)
    {
        return characters.Find(c => c.Id == id);
    }
}