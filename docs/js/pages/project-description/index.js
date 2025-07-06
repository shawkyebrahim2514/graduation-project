import { PROJECT_CONTENT } from '../../data/project-content.js';
import { DOM, AnimationUtils } from '../../utils/index.js';
import { CSS_CLASSES } from '../../constants/index.js';

/**
 * Create project description page
 * @param {HTMLElement} mainSection - Main section element
 */
function createProjectDescriptionPage(mainSection) {
    DOM.clearContent(mainSection);
    mainSection.classList.add(CSS_CLASSES.PROJECT_DESCRIPTION_CONTENT);
    
    const container = DOM.createElement('div', [CSS_CLASSES.CONTAINER]);
    const contentDiv = DOM.createElement('div', ['project-description']);
    
    // Generate content from structured data
    const contentHtml = PROJECT_CONTENT.description.sections
        .map(section => `<p>${section.content}</p>`)
        .join('');
    
    contentDiv.innerHTML = contentHtml;
    container.appendChild(contentDiv);
    mainSection.appendChild(container);
    
    // Add animations
    AnimationUtils.slideIn(container, 'bottom', 300);
}

export default createProjectDescriptionPage;