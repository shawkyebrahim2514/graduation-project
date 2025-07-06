import { APP_CONFIG } from '../config/app.js';
import { DOM } from '../utils/index.js';
import { CSS_CLASSES } from '../constants/index.js';

/**
 * Create header layout component
 * @returns {HTMLElement} Header container
 */
function createHeader() {
    const headerContainer = DOM.createElement('div');
    
    headerContainer.innerHTML = `
        <section class="${CSS_CLASSES.HEADER_TITLE}">
            <div class="${CSS_CLASSES.CONTAINER}">
                <h2>${APP_CONFIG.site.name}</h2>
                <h4>(${APP_CONFIG.site.fullName})</h4>
            </div>
        </section>
        <section class="${CSS_CLASSES.HEADER_LINKS} ${CSS_CLASSES.CONTAINER} ${CSS_CLASSES.GLASS_EFFECT}">
            <div class="content">
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
        { id: 'project-description', path: '/project-description', title: 'Project Description', active: false },
        { id: 'project-documentation', path: '/project-documentation', title: 'Project Documentation', active: false },
        { id: 'team-members', path: '/', title: 'Team Members', active: true }
    ];
    
    return links
        .map(link => {
            const activeClass = link.active ? ` class="${CSS_CLASSES.ACTIVE}"` : '';
            return `
                <a href="${link.path}" id="${link.id}"${activeClass}>
                    ${link.title}
                </a>
            `;
        })
        .join('');
}

export default createHeader;