package com.zekaoformani.macera.data.models

data class Campaign(
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val sponsorName: String = "",
    val badgeUrl: String = "",
    val targetZoneId: String = "",
    val isActive: Boolean = true,
    val isCommercial: Boolean = false
)
