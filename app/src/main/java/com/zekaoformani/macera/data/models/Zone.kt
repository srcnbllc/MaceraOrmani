package com.zekaoformani.macera.data.models

data class SponsorCoupon(
    val discountRate: String = "",
    val couponCode: String = "",
    val expiryDate: String = ""
)

data class Zone(
    val id: String = "",
    val name: String = "",
    val businessName: String = "",
    val description: String = "",
    val qrSecretCode: String = "",
    val orderIndex: Int = 1,
    val isUnlockedByDefault: Boolean = false,
    val activeSponsorCoupon: SponsorCoupon? = null
)
