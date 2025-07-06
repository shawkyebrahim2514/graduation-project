import { APP_CONFIG } from '../config/app.js';
import { DOM } from '../utils/index.js';

/**
 * Create header layout component
 * @returns {HTMLElement} Header container
 */
function createHeader() {
    const headerContainer = DOM.createElement('div', ['flex', 'flex-col', 'items-stretch', 'justify-stretch', 'gap-4']);
    
    headerContainer.innerHTML = `
        <section class="bg-primary text-light py-4 text-center font-bold">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-2xl md:text-3xl font-bold">${APP_CONFIG.site.name}</h2>
                <h4 class="text-lg md:text-xl font-medium mt-2">(${APP_CONFIG.site.fullName})</h4>
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-4 w-full">
            <div class="py-4 border-2 border-primary rounded-3xl flex gap-4 justify-center items-center flex-wrap bg-card-bg backdrop-blur-sm shadow-lg">
                ${createNavigationLinks()}
            </div>
        </section>
    `;
    
    return headerContainer;
}

/**
 * Create navigation links
 * @returns {string} HTML string for navigation links
 */
function createNavigationLinks() {
    const links = [
        { id: 'project-description', path: '/project-description', title: 'Project Description' },
        { id: 'project-documentation', path: '/project-documentation', title: 'Project Documentation' },
        { id: 'team-members', path: '/', title: 'Team Members' }
    ];
    
    return links
        .map(link => {
            // All links start as inactive - active state will be managed by page controller
            const inactiveClasses = 'bg-primary-light text-primary hover:bg-primary hover:text-light';
            
            return `
                <a href="${link.path}" 
                   id="${link.id}"
                   class="px-4 py-2 border-2 border-primary rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${inactiveClasses}">
                    ${link.title}
                </a>
            `;
        })
        .join('');
}

export default createHeader;