/**
 * Configuration des thèmes du portfolio
 * Chaque thème possède des couleurs primaires, secondaires et des valeurs RGB pour la transparence
 */

export type ThemeName =
  | "RBA"
  | "les-12-fragments"
  | "orange"
  | "ca-va-trailer"
  | "basique"
  | "echo-safe"
  | "omnisphere"
  | "ocean"
  | "cyberpunk"
  | "sunset"
  | "multicolore";

export interface ThemeColors {
  primary: string;
  secondary: string;
  b1RGB: {
    light: string;
    dark: string;
  };
}

export const themes: Record<ThemeName, ThemeColors> = {
  "RBA": {
    primary: "#ff4500",
    secondary: "#ffd700",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "les-12-fragments": {
    primary: "#32cd32",
    secondary: "#006400",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "orange": {
    primary: "#ff8c00",
    secondary: "#ff4500",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "ca-va-trailer": {
    primary: "#fa0435",
    secondary: "#ff0000",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "basique": {
    primary: "#000000",
    secondary: "#333333",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "echo-safe": {
    primary: "#0414fa",
    secondary: "#00eaff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "omnisphere": {
    primary: "#3104fa",
    secondary: "#e100ff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "ocean": {
    primary: "#0080ff",
    secondary: "#00c3ff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "cyberpunk": {
    primary: "#ff1493",
    secondary: "#ff69b4",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "sunset": {
    primary: "#ff6347",
    secondary: "#ffa500",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
  "multicolore": {
    primary: "#ff00ff",
    secondary: "#00ffff",
    b1RGB: {
      light: "250, 249, 247",
      dark: "0, 0, 0",
    },
  },
} as const;

/**
 * Obtenir les couleurs d'un thème avec fallback sur ca-va-trailer
 */
export function getThemeColors(themeName: string): ThemeColors {
  return themes[themeName as ThemeName] || themes["ca-va-trailer"];
}

/**
 * Vérifier si un thème existe
 */
export function isValidTheme(themeName: string): themeName is ThemeName {
  return themeName in themes;
}

export type ThemesConfig = typeof themes;
