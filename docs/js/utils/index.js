/**
 * DOM manipulation utilities
 */
export const DOM = {
    /**
     * Create element with classes and attributes
     */
    createElement: (tag, classes = [], attributes = {}) => {
        const element = document.createElement(tag);
        
        if (classes.length > 0) {
            element.classList.add(...classes);
        }
        
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
        
        return element;
    },
    
    /**
     * Clear element content
     */
    clearContent: (element) => {
        element.innerHTML = '';
        element.className = '';
    },
    
    /**
     * Add multiple event listeners
     */
    addEventListeners: (element, events) => {
        Object.entries(events).forEach(([event, handler]) => {
            element.addEventListener(event, handler);
        });
    },
    
    /**
     * Query selector with error handling
     */
    querySelector: (selector, parent = document) => {
        const element = parent.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
        }
        return element;
    },
    
    /**
     * Query all selectors
     */
    querySelectorAll: (selector, parent = document) => {
        return Array.from(parent.querySelectorAll(selector));
    }
};

/**
 * String manipulation utilities
 */
export const StringUtils = {
    /**
     * Convert string to kebab-case
     */
    toKebabCase: (str) => {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    },
    
    /**
     * Convert string to camelCase
     */
    toCamelCase: (str) => {
        return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    },
    
    /**
     * Capitalize first letter
     */
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    /**
     * Process multiline text
     */
    processMultilineText: (text) => {
        return text.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => `<p>${line}</p>`)
            .join('');
    }
};

/**
 * Array manipulation utilities
 */
export const ArrayUtils = {
    /**
     * Check if array is empty
     */
    isEmpty: (arr) => !arr || arr.length === 0,
    
    /**
     * Get random item from array
     */
    getRandom: (arr) => arr[Math.floor(Math.random() * arr.length)],
    
    /**
     * Shuffle array
     */
    shuffle: (arr) => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};

/**
 * URL and routing utilities
 */
export const UrlUtils = {
    /**
     * Get current page from URL
     */
    getCurrentPage: () => {
        const path = window.location.pathname;
        if (path === '/' || path === '/graduation-project/') return 'team-members';
        return path.split('/').pop() || 'team-members';
    },
    
    /**
     * Update URL without page reload
     */
    updateUrl: (page) => {
        const newPath = page === 'team-members' ? '/' : `/${page}`;
        window.history.pushState({ page }, '', newPath);
    },
    
    /**
     * Open link in new tab
     */
    openInNewTab: (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
};

/**
 * Animation utilities
 */
export const AnimationUtils = {
    /**
     * Fade in element
     */
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-in-out`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    },
    
    /**
     * Slide in element
     */
    slideIn: (element, direction = 'bottom', duration = 300) => {
        const transform = {
            bottom: 'translateY(20px)',
            top: 'translateY(-20px)',
            left: 'translateX(-20px)',
            right: 'translateX(20px)'
        };
        
        element.style.transform = transform[direction];
        element.style.opacity = '0';
        element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.transform = 'translate(0)';
            element.style.opacity = '1';
        }, 10);
    }
};

/**
 * Validation utilities
 */
export const ValidationUtils = {
    /**
     * Validate email format
     */
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    /**
     * Validate URL format
     */
    isValidUrl: (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },
    
    /**
     * Check if object has required properties
     */
    hasRequiredProperties: (obj, requiredProps) => {
        return requiredProps.every(prop => obj.hasOwnProperty(prop));
    }
};

export default {
    DOM,
    StringUtils,
    ArrayUtils,
    UrlUtils,
    AnimationUtils,
    ValidationUtils
};
