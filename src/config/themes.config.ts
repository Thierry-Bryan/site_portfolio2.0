/**
 * Configuration des thèmes du portfolio
 * Chaque thème possède des couleurs primaires, secondaires, valeurs RGB et contraste du header
 */

import type { ThemeName, ThemeConfig } from "../types";

export type { ThemeName };

export const themes: Record<ThemeName, ThemeConfig> = {
  "RBA": {
    primary: "#ff4500",
    secondary: "#ffd700",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark", // Fond clair = texte foncé
      dark: "light", // Fond noir = texte clair
    },
  },
  "les-12-fragments": {
    primary: "#32cd32",
    secondary: "#006400",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "orange": {
    primary: "#ff8c00",
    secondary: "#ff4500",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "ca-va-trailer": {
    primary: "#fa0435",
    secondary: "#ff0000",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "basique": {
    primary: "#000000",
    secondary: "#333333",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "echo-safe": {
    primary: "#0414fa",
    secondary: "#00eaff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "omnisphere": {
    primary: "#3104fa",
    secondary: "#e100ff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "ocean": {
    primary: "#0080ff",
    secondary: "#00c3ff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "cyberpunk": {
    primary: "#ff1493",
    secondary: "#ff69b4",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "sunset": {
    primary: "#ff6347",
    secondary: "#ffa500",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
  "multicolore": {
    primary: "#ff00ff",
    secondary: "#00ffff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
    headerContrast: {
      light: "dark",
      dark: "light",
    },
  },
} as const;

/**
 * Obtenir les couleurs d'un thème avec fallback sur ca-va-trailer
 */
export function getThemeConfig(themeName: string): ThemeConfig {
  return themes[themeName as ThemeName] || themes["ca-va-trailer"];
}

/**
 * Vérifier si un thème existe
 */
export function isValidTheme(themeName: string): themeName is ThemeName {
  return themeName in themes;
}

/**
 * Obtenir le contraste du header selon le thème et le mode
 */
export function getHeaderContrast(
  themeName: string,
  isDarkMode: boolean
): "light" | "dark" {
  const theme = getThemeConfig(themeName);
  return isDarkMode ? theme.headerContrast.dark : theme.headerContrast.light;
}

export type ThemesConfig = typeof themes;
