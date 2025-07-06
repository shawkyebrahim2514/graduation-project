/**
 * Theme management system
 */

import { STORAGE_KEYS } from '../constants/index.js';

class ThemeManager {
    constructor() {
        this.themes = {
            default: {
                name: 'Default',
                colors: {
                    primary: '#A51930',
                    light: '#f7f3f4',
                    dark: '#310d13',
                    background: 'rgba(165, 25, 48, 0.03)',
                    cardBackground: 'rgb(249, 242, 243)'
                }
            },
            dark: {
                name: 'Dark Mode',
                colors: {
                    primary: '#ff6b6b',
                    light: '#2d2d2d',
                    dark: '#ffffff',
                    background: 'rgba(0, 0, 0, 0.8)',
                    cardBackground: 'rgb(45, 45, 45)'
                }
            },
            blue: {
                name: 'Blue Theme',
                colors: {
                    primary: '#0096D7',
                    light: '#f0f8ff',
                    dark: '#003366',
                    background: 'rgba(0, 150, 215, 0.03)',
                    cardBackground: 'rgb(240, 248, 255)'
                }
            }
        };
        
        this.currentTheme = 'default';
        this.loadTheme();
    }

    /**
     * Load theme from storage or use default
     */
    loadTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme && this.themes[savedTheme]) {
            this.currentTheme = savedTheme;
        }
        this.applyTheme();
    }

    /**
     * Apply theme to document
     */
    applyTheme() {
        const theme = this.themes[this.currentTheme];
        if (!theme) return;

        const root = document.documentElement;
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}-color`, value);
        });

        // Save to storage
        localStorage.setItem(STORAGE_KEYS.THEME, this.currentTheme);
    }

    /**
     * Switch to a different theme
     * @param {string} themeName - Name of the theme to switch to
     */
    switchTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.applyTheme();
        }
    }

    /**
     * Get current theme
     * @returns {string} Current theme name
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Get available themes
     * @returns {Object} Available themes
     */
    getAvailableThemes() {
        return Object.keys(this.themes).map(key => ({
            id: key,
            name: this.themes[key].name
        }));
    }

    /**
     * Toggle between light and dark theme
     */
    toggleDarkMode() {
        const isDark = this.currentTheme === 'dark';
        this.switchTheme(isDark ? 'default' : 'dark');
    }
}

// Create singleton instance
const themeManager = new ThemeManager();

export default themeManager;
