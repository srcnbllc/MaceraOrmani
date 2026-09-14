package com.zekaoformani.macera.data.models

data class GameState(
    val explorerName: String = "Orman Kaşifi",
    val selectedHeroId: String = "fox",
    val coins: Int = 100,
    val score: Int = 0,
    val highScore: Int = 1250,
    val unlockedZoneIds: Set<String> = setOf("zone_1_maglova"),
    val completedZoneIds: Set<String> = emptySet(),
    val baseShields: Int = 1,
    val isChildMode: Boolean = true,
    val isSoundEnabled: Boolean = true
)
