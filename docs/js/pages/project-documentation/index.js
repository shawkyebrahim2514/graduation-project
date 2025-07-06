import { PROJECT_CONTENT } from '../../data/project-content.js';
import { DOM, AnimationUtils } from '../../utils/index.js';
import { CSS_CLASSES } from '../../constants/index.js';

/**
 * Create project documentation page
 * @param {HTMLElement} mainSection - Main section element
 */
function createProjectDocumentationPage(mainSection) {
    DOM.clearContent(mainSection);
    mainSection.classList.add(CSS_CLASSES.PROJECT_DOCUMENTATION_CONTENT);
    
    const container = DOM.createElement('div', [CSS_CLASSES.CONTAINER]);
    const documentationDiv = DOM.createElement('div', ['project-documentation']);
    
    // Generate content from structured data
    const sectionsHtml = PROJECT_CONTENT.documentation.sections
        .map(section => createSectionHtml(section))
        .join('');
    
    documentationDiv.innerHTML = sectionsHtml;
    container.appendChild(documentationDiv);
    mainSection.appendChild(container);
    
    // Add animations with staggered delay
    const sections = container.querySelectorAll('.project-documentation > div');
    sections.forEach((section, index) => {
        setTimeout(() => {
            AnimationUtils.slideIn(section, 'bottom', 300);
        }, index * 100);
    });
}

/**
 * Create HTML for a documentation section
 * @param {Object} section - Section data
 * @returns {string} HTML string
 */
function createSectionHtml(section) {
    let html = `
        <div id="${section.id}">
            <h2>${section.title}</h2>
            <p>${section.content}</p>
    `;
    
    // Add additional content if exists
    if (section.additionalContent) {
        html += `<p>${section.additionalContent}</p>`;
    }
    
    // Add list items if exists
    if (section.listItems && section.listItems.length > 0) {
        html += '<ul>';
        section.listItems.forEach(item => {
            if (typeof item === 'string') {
                html += `<li>${item}</li>`;
            } else if (typeof item === 'object' && item.title) {
                html += `<li><b>${item.title}</b> ${item.content}</li>`;
            }
        });
        html += '</ul>';
    }
    
    // Add technologies if exists
    if (section.technologies && section.technologies.length > 0) {
        html += '<ul>';
        section.technologies.forEach(tech => {
            html += `
                <li>
                    <p><b>${tech.name}</b></p>
                    <p>${tech.description}</p>
                    ${tech.additionalDescription ? `<p>${tech.additionalDescription}</p>` : ''}
                </li>
            `;
        });
        html += '</ul>';
    }
    
    html += '</div>';
    return html;
}

export default createProjectDocumentationPage;