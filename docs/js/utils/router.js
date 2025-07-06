import { DOM, UrlUtils } from '../utils/index.js';

/**
 * Simple router for handling page navigation
 */
class Router {
    constructor() {
        this.routes = new Map();
        this.currentPage = null;
        this.mainSection = null;
        this.headerSection = null;
        this.beforeRouteChange = null;
        this.afterRouteChange = null;
    }

    /**
     * Initialize router
     */
    init(mainSection, headerSection) {
        this.mainSection = mainSection;
        this.headerSection = headerSection;
        this.setupEventListeners();
        
        // Load initial page
        const currentPage = UrlUtils.getCurrentPage();
        this.navigateTo(currentPage);
    }

    /**
     * Register a route
     */
    register(path, component, options = {}) {
        this.routes.set(path, {
            component,
            title: options.title || path,
            ...options
        });
    }

    /**
     * Navigate to a specific page
     */
    async navigateTo(page) {
        if (this.currentPage === page) return;

        // Execute before route change hook
        if (this.beforeRouteChange) {
            const shouldContinue = await this.beforeRouteChange(page, this.currentPage);
            if (!shouldContinue) return;
        }

        const route = this.routes.get(page);
        if (!route) {
            console.warn(`Route not found: ${page}`);
            return;
        }

        // Update URL
        UrlUtils.updateUrl(page);

        // Clear main section
        DOM.clearContent(this.mainSection);

        try {
            // Load page component
            await route.component(this.mainSection);
            this.currentPage = page;

            // Update navigation active state
            this.updateActiveNavigation(page);

            // Execute after route change hook
            if (this.afterRouteChange) {
                this.afterRouteChange(page);
            }

        } catch (error) {
            console.error(`Error loading page ${page}:`, error);
            this.showErrorPage();
        }
    }

    /**
     * Update active navigation state
     */
    updateActiveNavigation(activePage) {
        const navLinks = DOM.querySelectorAll('header a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.id === activePage) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Show error page
     */
    showErrorPage() {
        this.mainSection.innerHTML = `
            <div class="error-page">
                <h2>Something went wrong!</h2>
                <p>Please try again later.</p>
            </div>
        `;
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (event) => {
            const page = event.state?.page || UrlUtils.getCurrentPage();
            this.navigateTo(page);
        });

        // Handle navigation clicks
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a[id]');
            if (link && link.id) {
                event.preventDefault();
                this.navigateTo(link.id);
            }
        });
    }

    /**
     * Set hooks for route changes
     */
    setHooks(beforeRouteChange, afterRouteChange) {
        this.beforeRouteChange = beforeRouteChange;
        this.afterRouteChange = afterRouteChange;
    }

    /**
     * Get current page
     */
    getCurrentPage() {
        return this.currentPage;
    }

    /**
     * Get all registered routes
     */
    getRoutes() {
        return Array.from(this.routes.keys());
    }
}

// Create singleton instance
const router = new Router();

export default router;
