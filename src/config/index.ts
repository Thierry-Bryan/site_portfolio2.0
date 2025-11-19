/**
 * Point d'entrée centralisé pour toutes les configurations
 */

export { siteConfig, type SiteConfig } from "./site.config";
export {
  themes,
  getThemeConfig,
  getHeaderContrast,
  isValidTheme,
  type ThemeName,
  type ThemesConfig,
} from "./themes.config";
export {
  navigationConfig,
  type NavLink,
  type NavigationConfig,
} from "./navigation.config";
