package com.zekaoformani.macera.data.models

data class Hero(
    val id: String,
    val name: String,
    val emoji: String,
    val title: String,
    val speedRating: Int,
    val jumpRating: Int,
    val staminaRating: Int,
    val specialAbility: String,
    val unlockCoins: Int,
    val isUnlocked: Boolean = true
) {
    companion object {
        val ALL_HEROES = listOf(
            Hero(
                id = "fox",
                name = "Tilki Rüzgar",
                emoji = "🦊",
                title = "Orman Kaşifi",
                speedRating = 5,
                jumpRating = 4,
                staminaRating = 4,
                specialAbility = "Hızlı İvmelenme & Çevik Sıyrılma",
                unlockCoins = 0,
                isUnlocked = true
            ),
            Hero(
                id = "squirrel",
                name = "Kızıl Sincap",
                emoji = "🐿️",
                title = "Palamut Toplayıcı",
                speedRating = 5,
                jumpRating = 4,
                staminaRating = 3,
                specialAbility = "Manyetik Palamut Çekimi (+Altın Toplama)",
                unlockCoins = 150,
                isUnlocked = true
            ),
            Hero(
                id = "owl",
                name = "Bilge Baykuş",
                emoji = "🦉",
                title = "Gece Muhafızı",
                speedRating = 4,
                jumpRating = 5,
                staminaRating = 4,
                specialAbility = "Kanat Süzülmesi (Yumuşak Havada İniş)",
                unlockCoins = 250,
                isUnlocked = true
            ),
            Hero(
                id = "monkey",
                name = "Maymun Çiko",
                emoji = "🐵",
                title = "Ağaç Cambazı",
                speedRating = 4,
                jumpRating = 5,
                staminaRating = 3,
                specialAbility = "Çift Zıplama & Yüksek Tırmanış",
                unlockCoins = 100,
                isUnlocked = true
            ),
            Hero(
                id = "tiger",
                name = "Kaplan Pars",
                emoji = "🐯",
                title = "Doğa Muhafızı",
                speedRating = 5,
                jumpRating = 3,
                staminaRating = 5,
                specialAbility = "Engelleri Yıkıp Geçme & Ekstra Can",
                unlockCoins = 300,
                isUnlocked = true
            )
        )
    }
}
