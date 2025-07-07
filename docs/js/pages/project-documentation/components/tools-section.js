import { TOOLS_DATA, TOOL_CATEGORIES } from '../../../data/tools.js';
import { DOM, AnimationUtils } from '../../../utils/index.js';

// Dynamic card limits based on screen size
const CARD_LIMITS = {
    mobile: 6,     // 1 column x 6 rows
    tablet: 8,     // 2 columns x 4 rows
    desktop: 12,   // 3 columns x 4 rows
    large: 16,     // 4 columns x 4 rows
    xlarge: 20     // 5 columns x 4 rows
};

let currentLimit = CARD_LIMITS.mobile;
let showingAll = false;
let currentTools = [];

/**
 * Create tools section component
 * @param {HTMLElement} container - Container element to append the tools section
 */
export function createToolsSection(container) {
    const toolsSection = DOM.createElement('div', [
        'tools-showcase',
        'bg-card-bg', 
        'border-2', 
        'border-primary', 
        'rounded-2xl', 
        'p-8', 
        'backdrop-blur-sm', 
        'hover:shadow-xl', 
        'transition-all', 
        'duration-300', 
        'transform', 
        'hover:-translate-y-1',
        'relative'
    ]);

    // Create header
    const header = DOM.createElement('div', ['mb-8', 'relative', 'z-10']);
    header.innerHTML = `
        <div class="relative inline-block">
            <h2 class="text-3xl font-bold text-primary mb-6 relative text-center md:text-left">
                🛠️ Tools & Technologies Used
                <div class="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-16 h-1 bg-primary rounded-full"></div>
            </h2>
            <div class="card-count-indicator" id="tools-count">
                ${TOOLS_DATA.length}
            </div>
        </div>
        <p class="text-dark text-lg leading-relaxed mb-6 text-center md:text-left">
            Our development stack combines cutting-edge technologies to deliver a scalable, 
            high-performance e-commerce platform with AI-powered features and seamless user experiences.
        </p>
    `;

    // Create filter buttons
    const filterContainer = DOM.createElement('div', [
        'category-filters',
        'flex', 
        'flex-wrap', 
        'gap-2', 
        'mb-8', 
        'justify-center', 
        'relative',
        'z-10'
    ]);

    TOOL_CATEGORIES.forEach(category => {
        const button = DOM.createElement('button', [
            'filter-btn',
            'px-4', 
            'py-2', 
            'rounded-full', 
            'border-2', 
            'border-primary', 
            'text-sm', 
            'font-medium', 
            'transition-all', 
            'duration-300', 
            'hover:bg-primary', 
            'hover:text-light',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-primary',
            'focus:ring-offset-2',
            'relative',
            'overflow-hidden'
        ]);

        if (category === 'All') {
            button.classList.add('filter-btn-active');
        } else {
            button.classList.add('bg-transparent', 'text-primary');
        }

        button.textContent = category;
        button.setAttribute('data-category', category);
        button.addEventListener('click', () => filterTools(category));
        filterContainer.appendChild(button);
    });

    // Create tools grid
    const toolsGrid = DOM.createElement('div', [
        'tools-grid-container',
        'tools-grid',
        'w-full',
        'flex',
        'flex-col',
        'gap-6',
        'relative',
        'z-10'
    ]);
    toolsGrid.id = 'tools-grid';
    toolsGrid.style.display = 'flex';
    toolsGrid.style.flexDirection = 'column';
    toolsGrid.style.gap = '1.5rem';

    // Create show more/less button
    const showMoreButton = DOM.createElement('button', [
        'show-more-btn',
        'mt-8',
        'px-8',
        'py-3',
        'bg-primary',
        'text-light',
        'rounded-full',
        'font-medium',
        'hover:bg-primary-dark',
        'transition-all',
        'duration-300',
        'shadow-lg',
        'hover:shadow-xl',
        'transform',
        'hover:scale-105',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-primary',
        'focus:ring-offset-2',
        'mx-auto',
        'block',
        'relative',
        'z-10'
    ]);
    showMoreButton.id = 'show-more-btn';
    showMoreButton.innerHTML = `
        <span class="flex items-center gap-2">
            <span id="btn-text">Show More</span>
            <i class="bi bi-chevron-down transition-transform duration-300" id="btn-icon"></i>
        </span>
    `;
    showMoreButton.addEventListener('click', toggleShowMore);

    // Initialize responsive behavior
    initializeResponsiveCards();
    
    // Set initial current tools
    currentTools = TOOLS_DATA;
    
    // Populate tools grid with proper limiting
    renderToolsWithLimit(toolsGrid, currentTools);

    // Assemble the section
    toolsSection.appendChild(header);
    toolsSection.appendChild(filterContainer);
    toolsSection.appendChild(toolsGrid);
    toolsSection.appendChild(showMoreButton);
    container.appendChild(toolsSection);

    // Add entrance animation
    setTimeout(() => {
        AnimationUtils.slideIn(toolsSection, 'bottom', 400);
        
        // Add intersection observer for better performance
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(toolsSection);
        }
    }, 100);
}

/**
 * Render tools with proper limiting applied
 */
function renderToolsWithLimit(grid, tools) {
    DOM.clearContent(grid);
    
    const toolsToShow = getToolsToDisplay(tools);
    
    toolsToShow.forEach((tool, index) => {
        const toolCard = createToolCard(tool);
        grid.appendChild(toolCard);
        
        // Staggered animation for cards
        setTimeout(() => {
            AnimationUtils.slideIn(toolCard, 'bottom', 300);
        }, index * 30);
    });
    
    // Update show more button after rendering
    setTimeout(() => {
        updateShowMoreButton();
    }, 100);
}

/**
 * Legacy render function - kept for compatibility
 * @param {HTMLElement} grid - Grid container
 * @param {Array} tools - Tools data to render
 */
function renderTools(grid, tools) {
    renderToolsWithLimit(grid, tools);
}

/**
 * Create individual tool card
 * @param {Object} tool - Tool data
 * @returns {HTMLElement} Tool card element
 */
function createToolCard(tool) {
    const card = DOM.createElement('div', [
        'tool-card',
        'w-full',
        'bg-white', 
        'bg-opacity-70', 
        'border', 
        'border-primary-light', 
        'rounded-xl', 
        'p-6', 
        'hover:bg-opacity-90', 
        'hover:shadow-lg',
        'transition-all', 
        'duration-300', 
        'group',
        'backdrop-blur-sm',
        'relative',
        'overflow-hidden'
    ]);

    card.setAttribute('data-category', tool.category);

    card.innerHTML = `
        <div class="flex items-center space-x-6">
            <div class="w-16 h-16 p-3 bg-gradient-to-br from-primary-light to-primary bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 shadow-lg flex-shrink-0">
                <img 
                    src="${tool.icon}" 
                    alt="${tool.name}" 
                    class="tool-icon w-10 h-10 object-contain transition-transform duration-300 filter drop-shadow-sm"
                    loading="lazy"
                    onerror="this.src='assets/404.svg'"
                />
            </div>
            <div class="flex-grow">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-primary text-xl group-hover:text-primary-dark transition-colors duration-300">
                        ${tool.name}
                    </h3>
                    <p class="text-sm text-light bg-primary px-3 py-1 rounded-full font-medium shadow-sm">
                        ${tool.category}
                    </p>
                </div>
                <p class="text-base text-dark leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    ${tool.description}
                </p>
            </div>
        </div>
    `;

    return card;
}

/**
 * Filter tools by category
 * @param {string} category - Category to filter by
 */
function filterTools(category) {
    const grid = document.getElementById('tools-grid');
    const buttons = document.querySelectorAll('[data-category]');
    const countIndicator = document.getElementById('tools-count');
    
    // Update button states
    buttons.forEach(button => {
        if (button.getAttribute('data-category') === category) {
            button.classList.remove('bg-transparent', 'text-primary');
            button.classList.add('filter-btn-active');
        } else {
            button.classList.remove('filter-btn-active');
            button.classList.add('bg-transparent', 'text-primary');
        }
    });

    // Filter tools with enhanced animation
    const filteredTools = category === 'All' 
        ? TOOLS_DATA 
        : TOOLS_DATA.filter(tool => tool.category === category);
    
    // Update current tools and reset show all state
    currentTools = filteredTools;
    showingAll = false;
    
    // Update count indicator
    if (countIndicator) {
        countIndicator.textContent = filteredTools.length;
        countIndicator.style.animation = 'none';
        setTimeout(() => {
            countIndicator.style.animation = 'pulse 2s infinite';
        }, 100);
    }

    // Add loading state
    grid.innerHTML = `
        <div class="tools-loading col-span-full">
            <div class="loading-spinner"></div>
        </div>
    `;
    
    setTimeout(() => {
        renderToolsWithLimit(grid, currentTools);
    }, 300);
}

/**
 * Initialize responsive card behavior
 */
function initializeResponsiveCards() {
    updateCardLimit();
    
    // Listen for window resize
    window.addEventListener('resize', debounce(() => {
        const previousLimit = currentLimit;
        updateCardLimit();
        
        // Only re-render if limit changed and we're not showing all
        if (previousLimit !== currentLimit && !showingAll) {
            const grid = document.getElementById('tools-grid');
            if (grid) {
                renderToolsWithLimit(grid, currentTools);
            }
        }
    }, 250));
}

/**
 * Update card limit based on screen size
 */
function updateCardLimit() {
    const width = window.innerWidth;
    
    if (width >= 1280) {
        currentLimit = CARD_LIMITS.xlarge;
    } else if (width >= 1024) {
        currentLimit = CARD_LIMITS.large;
    } else if (width >= 768) {
        currentLimit = CARD_LIMITS.desktop;
    } else if (width >= 640) {
        currentLimit = CARD_LIMITS.tablet;
    } else {
        currentLimit = CARD_LIMITS.mobile;
    }
}

/**
 * Toggle show more/less functionality
 */
function toggleShowMore() {
    showingAll = !showingAll;
    
    const grid = document.getElementById('tools-grid');
    
    if (grid) {
        // Add loading state
        grid.style.opacity = '0.7';
        
        setTimeout(() => {
            renderToolsWithLimit(grid, currentTools);
            grid.style.opacity = '1';
        }, 150);
    }
}

/**
 * Update show more button text and visibility
 */
function updateShowMoreButton() {
    const button = document.getElementById('show-more-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    
    if (!button || !btnText || !btnIcon) return;
    
    const totalTools = currentTools.length;
    const shouldShowButton = totalTools > currentLimit;
    
    if (shouldShowButton) {
        button.style.display = 'block';
        
        if (showingAll) {
            btnText.textContent = 'Show Less';
            btnIcon.className = 'bi bi-chevron-up transition-transform duration-300';
        } else {
            const hiddenCount = totalTools - currentLimit;
            btnText.textContent = `Show ${hiddenCount} More`;
            btnIcon.className = 'bi bi-chevron-down transition-transform duration-300';
        }
    } else {
        button.style.display = 'none';
    }
    
    // Add viewing status indicator
    updateViewingStatus(totalTools);
}

/**
 * Update viewing status indicator
 */
function updateViewingStatus(totalTools) {
    let statusDiv = document.getElementById('viewing-status');
    
    if (!statusDiv) {
        statusDiv = DOM.createElement('div', [
            'text-center',
            'text-sm',
            'text-dark',
            'opacity-70',
            'mt-4',
            'font-medium'
        ]);
        statusDiv.id = 'viewing-status';
        
        const container = document.querySelector('.tools-grid-container').parentElement;
        container.insertBefore(statusDiv, document.getElementById('show-more-btn'));
    }
    
    const showing = Math.min(currentLimit, totalTools);
    const currentlyShowing = showingAll ? totalTools : showing;
    
    if (totalTools > currentLimit && !showingAll) {
        statusDiv.innerHTML = `
            <span class="inline-flex items-center gap-1">
                <i class="bi bi-eye"></i>
                Showing ${currentlyShowing} of ${totalTools} tools
            </span>
        `;
    } else if (totalTools > currentLimit && showingAll) {
        statusDiv.innerHTML = `
            <span class="inline-flex items-center gap-1">
                <i class="bi bi-eye-fill"></i>
                Showing all ${totalTools} tools
            </span>
        `;
    } else {
        statusDiv.innerHTML = `
            <span class="inline-flex items-center gap-1">
                <i class="bi bi-check-circle"></i>
                All ${totalTools} tools displayed
            </span>
        `;
    }
}

/**
 * Get tools to display based on current limit and show all state
 */
function getToolsToDisplay(tools) {
    if (showingAll) {
        return tools;
    }
    
    if (tools.length <= currentLimit) {
        return tools;
    }
    
    return tools.slice(0, currentLimit);
}

/**
 * Debounce function for resize events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Add keyboard shortcuts for power users
 */
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + T = Toggle show more/less
        if (e.altKey && e.key.toLowerCase() === 't') {
            e.preventDefault();
            const button = document.getElementById('show-more-btn');
            if (button && button.style.display !== 'none') {
                toggleShowMore();
            }
        }
        
        // Alt + A = Show all tools
        if (e.altKey && e.key.toLowerCase() === 'a') {
            e.preventDefault();
            filterTools('All');
        }
    });
}

// Initialize keyboard shortcuts
addKeyboardShortcuts();

/**
 * Add responsive layout announcement for accessibility
 */
function addResponsiveAnnouncement() {
    const announcement = DOM.createElement('div', [
        'sr-only',
        'fixed',
        'top-0',
        'left-0',
        'z-50',
        'bg-primary',
        'text-light',
        'p-2',
        'rounded-br-lg'
    ]);
    announcement.id = 'responsive-announcement';
    announcement.setAttribute('aria-live', 'polite');
    document.body.appendChild(announcement);
    
    // Announce layout changes
    function announceLayoutChange() {
        const width = window.innerWidth;
        let layoutType = '';
        
        if (width >= 1280) layoutType = 'extra large desktop';
        else if (width >= 1024) layoutType = 'large desktop';
        else if (width >= 768) layoutType = 'desktop';
        else if (width >= 640) layoutType = 'tablet';
        else layoutType = 'mobile';
        
        announcement.textContent = `Layout changed to ${layoutType}. Showing up to ${currentLimit} tools per page.`;
        
        // Auto-hide announcement after 3 seconds
        setTimeout(() => {
            announcement.textContent = '';
        }, 3000);
    }
    
    // Listen for significant layout changes
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', debounce(() => {
        const newWidth = window.innerWidth;
        const widthChange = Math.abs(newWidth - lastWidth);
        
        // Only announce if width changed significantly (crossing breakpoints)
        if (widthChange > 100) {
            announceLayoutChange();
            lastWidth = newWidth;
        }
    }, 300));
}

// Initialize responsive announcement
addResponsiveAnnouncement();

export default createToolsSection;
