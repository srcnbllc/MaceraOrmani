package com.zekaoformani.macera.data.models

data class LeaderboardItem(
    val id: String = "",
    val name: String = "",
    val score: Long = 0L,
    val heroId: Int = 1,
    val stages: Int = 1,
    val rankTitle: String = "Orman Kaşifi",
    val coins: Int = 0,
    val orderIndex: Int = 99,
    val deviceBrand: String = "",
    val deviceModel: String = "",
    val deviceInfo: String = ""
)
