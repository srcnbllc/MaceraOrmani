package com.zekaoformani.macera.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val ForestColorScheme = darkColorScheme(
    primary = EmeraldGreen,
    onPrimary = Color.White,
    secondary = AmberGold,
    onSecondary = WoodBark,
    tertiary = AmberOrange,
    background = ForestGreenDeep,
    onBackground = SoftCream,
    surface = WoodBrownDark,
    onSurface = SoftCream,
    surfaceVariant = WoodBrown,
    onSurfaceVariant = SoftCream
)

@Composable
fun MaceraOrmaniTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = ForestColorScheme,
        typography = Typography,
        content = content
    )
}
