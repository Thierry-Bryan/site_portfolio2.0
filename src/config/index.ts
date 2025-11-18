/**
 * Point d'entrée centralisé pour toutes les configurations
 */

export { siteConfig, type SiteConfig } from "./site.config";
export {
  themes,
  getThemeColors,
  isValidTheme,
  type ThemeName,
  type ThemeColors,
  type ThemesConfig,
} from "./themes.config";
export {
  navigationConfig,
  type NavLink,
  type NavigationConfig,
} from "./navigation.config";
