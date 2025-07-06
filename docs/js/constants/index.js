/**
 * Application constants
 */

// CSS Classes
export const CSS_CLASSES = {
    // Layout
    CONTAINER: 'container',
    GLASS_EFFECT: 'glass-effect',
    
    // Navigation
    ACTIVE: 'active',
    HEADER_TITLE: 'title',
    HEADER_LINKS: 'links',
    
    // Pages
    TEAM_MEMBERS_CONTENT: 'team-members-content',
    PROJECT_DESCRIPTION_CONTENT: 'project-description-content',
    PROJECT_DOCUMENTATION_CONTENT: 'project-documentation-content',
    
    // Components
    CARD: 'card',
    COMING_SOON: 'coming-soon',
    NOT_FOUND: 'not-found',
    ERROR_CONTAINER: 'error-container',
    
    // Team member card specific
    CARD_IMAGE: 'image',
    CARD_PERSON: 'person',
    CARD_HAT: 'hat',
    CARD_PAPER: 'paper',
    CARD_DESCRIPTION: 'description',
    CARD_CONTACTS: 'contacts',
    CARD_ADDITIONAL_LINKS: 'additional-links'
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
    GITHUB_API: 'https://api.github.com',
    GITHUB_AVATARS: 'https://avatars.githubusercontent.com'
};

// Asset paths
export const ASSETS = {
    ICONS: {
        GRADUATION_HAT: './assets/Graduation Hat 3.svg',
        GRADUATION_PAPER: './assets/Graduation Paper 2.svg',
        COMING_SOON: './assets/coming-soon.svg',
        NOT_FOUND: './assets/404.svg',
        FAVICON: './assets/favicon.ico'
    },
    TOOLS: {
        REACT: './assets/Tools/react-js.svg',
        NODE: './assets/Tools/node-js.svg',
        FIREBASE: './assets/Tools/firebase.svg',
        // Add more as needed
    }
};

// Social media and contact types
export const CONTACT_TYPES = {
    EMAIL: 'email',
    LINKEDIN: 'linkedin',
    GITHUB: 'github',
    PORTFOLIO: 'portfolio',
    RESUME: 'resume'
};

// Bootstrap Icons
export const BOOTSTRAP_ICONS = {
    LINKEDIN: 'bi-linkedin',
    GITHUB: 'bi-github',
    EMAIL: 'bi-envelope-fill',
    PHONE: 'bi-phone',
    GLOBE: 'bi-globe'
};

// Page names
export const PAGES = {
    TEAM_MEMBERS: 'team-members',
    PROJECT_DESCRIPTION: 'project-description',
    PROJECT_DOCUMENTATION: 'project-documentation'
};

// Animation durations
export const ANIMATION_DURATIONS = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1200
};

// Error messages
export const ERROR_MESSAGES = {
    FAILED_TO_LOAD: 'Failed to load content',
    PAGE_NOT_FOUND: 'Page not found',
    NETWORK_ERROR: 'Network error occurred',
    UNKNOWN_ERROR: 'An unknown error occurred'
};

// Success messages
export const SUCCESS_MESSAGES = {
    PAGE_LOADED: 'Page loaded successfully',
    NAVIGATION_UPDATED: 'Navigation updated'
};

// Local storage keys
export const STORAGE_KEYS = {
    LAST_VISITED_PAGE: 'lastVisitedPage',
    USER_PREFERENCES: 'userPreferences',
    THEME: 'theme'
};

export default {
    CSS_CLASSES,
    API_ENDPOINTS,
    ASSETS,
    CONTACT_TYPES,
    BOOTSTRAP_ICONS,
    PAGES,
    ANIMATION_DURATIONS,
    BREAKPOINTS,
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
    STORAGE_KEYS
};
