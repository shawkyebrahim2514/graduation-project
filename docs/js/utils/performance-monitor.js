/**
 * Performance monitoring system
 */

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.thresholds = {
            pageLoad: 3000, // 3 seconds
            componentRender: 100, // 100ms
            navigation: 500 // 500ms
        };
        this.init();
    }

    /**
     * Initialize performance monitoring
     */
    init() {
        this.measurePageLoad();
        this.setupNavigationTiming();
    }

    /**
     * Measure page load performance
     */
    measurePageLoad() {
        if (typeof performance !== 'undefined' && performance.timing) {
            const timing = performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            
            this.metrics.pageLoad = {
                loadTime,
                domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
                firstByte: timing.responseStart - timing.navigationStart,
                domComplete: timing.domComplete - timing.navigationStart
            };
            
            if (loadTime > this.thresholds.pageLoad) {
                console.warn(`Page load time (${loadTime}ms) exceeds threshold (${this.thresholds.pageLoad}ms)`);
            }
        }
    }

    /**
     * Setup navigation timing
     */
    setupNavigationTiming() {
        if (typeof performance !== 'undefined' && performance.mark) {
            // Mark navigation start
            performance.mark('navigation-start');
        }
    }

    /**
     * Start timing a specific operation
     * @param {string} name - Name of the operation
     */
    startTiming(name) {
        if (typeof performance !== 'undefined' && performance.mark) {
            performance.mark(`${name}-start`);
        }
        
        if (!this.metrics[name]) {
            this.metrics[name] = {};
        }
        
        this.metrics[name].startTime = Date.now();
    }

    /**
     * End timing a specific operation
     * @param {string} name - Name of the operation
     */
    endTiming(name) {
        if (!this.metrics[name]) {
            console.warn(`No timing started for: ${name}`);
            return;
        }
        
        const endTime = Date.now();
        const duration = endTime - this.metrics[name].startTime;
        
        this.metrics[name].duration = duration;
        this.metrics[name].endTime = endTime;
        
        // Use Performance API if available
        if (typeof performance !== 'undefined' && performance.mark && performance.measure) {
            performance.mark(`${name}-end`);
            performance.measure(name, `${name}-start`, `${name}-end`);
        }
        
        // Check against thresholds
        const threshold = this.thresholds[name];
        if (threshold && duration > threshold) {
            console.warn(`${name} duration (${duration}ms) exceeds threshold (${threshold}ms)`);
        }
        
        return duration;
    }

    /**
     * Measure component render time
     * @param {string} componentName - Name of the component
     * @param {Function} renderFunction - Function to render the component
     * @returns {*} Result of the render function
     */
    measureComponentRender(componentName, renderFunction) {
        this.startTiming(`component-${componentName}`);
        
        try {
            const result = renderFunction();
            this.endTiming(`component-${componentName}`);
            return result;
        } catch (error) {
            this.endTiming(`component-${componentName}`);
            throw error;
        }
    }

    /**
     * Measure navigation time
     * @param {string} fromPage - Current page
     * @param {string} toPage - Target page
     * @param {Function} navigationFunction - Function to perform navigation
     * @returns {*} Result of the navigation function
     */
    async measureNavigation(fromPage, toPage, navigationFunction) {
        const navigationKey = `navigation-${fromPage}-to-${toPage}`;
        this.startTiming(navigationKey);
        
        try {
            const result = await navigationFunction();
            this.endTiming(navigationKey);
            return result;
        } catch (error) {
            this.endTiming(navigationKey);
            throw error;
        }
    }

    /**
     * Get performance metrics
     * @returns {Object} Performance metrics
     */
    getMetrics() {
        return { ...this.metrics };
    }

    /**
     * Get performance report
     * @returns {Object} Performance report
     */
    getReport() {
        const report = {
            pageLoad: this.metrics.pageLoad,
            components: {},
            navigation: {},
            summary: {
                totalMeasurements: 0,
                slowOperations: []
            }
        };
        
        // Group metrics by type
        Object.keys(this.metrics).forEach(key => {
            if (key.startsWith('component-')) {
                const componentName = key.replace('component-', '');
                report.components[componentName] = this.metrics[key];
            } else if (key.startsWith('navigation-')) {
                const navKey = key.replace('navigation-', '');
                report.navigation[navKey] = this.metrics[key];
            }
        });
        
        // Calculate summary
        report.summary.totalMeasurements = Object.keys(this.metrics).length;
        
        // Find slow operations
        Object.keys(this.metrics).forEach(key => {
            const metric = this.metrics[key];
            if (metric.duration) {
                const threshold = this.getThresholdForMetric(key);
                if (threshold && metric.duration > threshold) {
                    report.summary.slowOperations.push({
                        operation: key,
                        duration: metric.duration,
                        threshold
                    });
                }
            }
        });
        
        return report;
    }

    /**
     * Get threshold for a specific metric
     * @param {string} metricKey - Metric key
     * @returns {number|null} Threshold value or null
     */
    getThresholdForMetric(metricKey) {
        if (metricKey.startsWith('component-')) {
            return this.thresholds.componentRender;
        } else if (metricKey.startsWith('navigation-')) {
            return this.thresholds.navigation;
        } else if (metricKey === 'pageLoad') {
            return this.thresholds.pageLoad;
        }
        return null;
    }

    /**
     * Clear all metrics
     */
    clearMetrics() {
        this.metrics = {};
    }

    /**
     * Log performance report to console
     */
    logReport() {
        const report = this.getReport();
        console.group('Performance Report');
        console.log('Page Load:', report.pageLoad);
        console.log('Components:', report.components);
        console.log('Navigation:', report.navigation);
        console.log('Summary:', report.summary);
        console.groupEnd();
    }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;
