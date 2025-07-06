/**
 * Error handling and logging system
 */

import { ERROR_MESSAGES } from '../constants/index.js';

class ErrorHandler {
    constructor() {
        this.errors = [];
        this.maxErrors = 50; // Keep last 50 errors
        this.setupGlobalErrorHandling();
    }

    /**
     * Setup global error handling
     */
    setupGlobalErrorHandling() {
        // Handle uncaught JavaScript errors
        window.addEventListener('error', (event) => {
            this.logError({
                type: 'JavaScript Error',
                message: event.message,
                filename: event.filename,
                line: event.lineno,
                column: event.colno,
                stack: event.error?.stack
            });
        });

        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.logError({
                type: 'Unhandled Promise Rejection',
                message: event.reason?.message || 'Unknown promise rejection',
                stack: event.reason?.stack
            });
        });
    }

    /**
     * Log an error
     * @param {Object} error - Error object
     */
    logError(error) {
        const errorLog = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            ...error
        };

        this.errors.push(errorLog);

        // Keep only the last maxErrors
        if (this.errors.length > this.maxErrors) {
            this.errors.shift();
        }

        // Log to console in development
        if (this.isDevelopment()) {
            console.error('Application Error:', errorLog);
        }

        // Send to external logging service in production
        if (this.isProduction()) {
            this.sendToLoggingService(errorLog);
        }
    }

    /**
     * Handle and log application errors
     * @param {Error} error - Error instance
     * @param {string} context - Context where error occurred
     */
    handleError(error, context = '') {
        this.logError({
            type: 'Application Error',
            message: error.message,
            stack: error.stack,
            context
        });
    }

    /**
     * Show user-friendly error message
     * @param {string} message - Error message to show
     * @param {HTMLElement} container - Container to show error in
     */
    showErrorMessage(message = ERROR_MESSAGES.UNKNOWN_ERROR, container = null) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerHTML = `
            <div class="error-content">
                <i class="bi bi-exclamation-triangle"></i>
                <p>${message}</p>
                <button onclick="location.reload()">Retry</button>
            </div>
        `;

        if (container) {
            container.innerHTML = '';
            container.appendChild(errorElement);
        } else {
            document.body.appendChild(errorElement);
        }
    }

    /**
     * Get all logged errors
     * @returns {Array} Array of error logs
     */
    getErrors() {
        return [...this.errors];
    }

    /**
     * Clear all logged errors
     */
    clearErrors() {
        this.errors = [];
    }

    /**
     * Check if running in development mode
     * @returns {boolean} True if in development
     */
    isDevelopment() {
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1' ||
               window.location.hostname === '';
    }

    /**
     * Check if running in production mode
     * @returns {boolean} True if in production
     */
    isProduction() {
        return !this.isDevelopment();
    }

    /**
     * Send error to external logging service
     * @param {Object} error - Error object
     */
    sendToLoggingService(error) {
        // Implementation for sending to external logging service
        // This could be services like LogRocket, Sentry, etc.
        console.log('Would send to logging service:', error);
    }

    /**
     * Create error boundary for components
     * @param {Function} component - Component function
     * @param {string} componentName - Name of the component
     * @returns {Function} Wrapped component with error handling
     */
    createErrorBoundary(component, componentName) {
        return (...args) => {
            try {
                return component(...args);
            } catch (error) {
                this.handleError(error, `Component: ${componentName}`);
                return this.createErrorComponent(componentName);
            }
        };
    }

    /**
     * Create error component
     * @param {string} componentName - Name of the failed component
     * @returns {HTMLElement} Error component
     */
    createErrorComponent(componentName) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'component-error';
        errorDiv.innerHTML = `
            <div class="error-content">
                <i class="bi bi-exclamation-triangle"></i>
                <p>Failed to load ${componentName}</p>
            </div>
        `;
        return errorDiv;
    }
}

// Create singleton instance
const errorHandler = new ErrorHandler();

export default errorHandler;
