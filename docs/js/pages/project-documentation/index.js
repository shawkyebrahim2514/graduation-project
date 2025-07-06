import { PROJECT_CONTENT } from '../../data/project-content.js';
import { DOM, AnimationUtils } from '../../utils/index.js';

/**
 * Create project documentation page
 * @param {HTMLElement} mainSection - Main section element
 */
function createProjectDocumentationPage(mainSection) {
    DOM.clearContent(mainSection);
    mainSection.className = 'min-h-screen bg-gradient-to-br from-primary-light to-transparent py-8';
    
    const container = DOM.createElement('div', ['max-w-6xl', 'mx-auto', 'px-4']);
    
    // Add title section
    const titleSection = document.createElement('div');
    titleSection.className = 'text-center mb-12';
    titleSection.innerHTML = `
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Project Documentation</h1>
        <p class="text-lg text-dark">
            Comprehensive documentation of our graduation project methodology and implementation
        </p>
    `;
    
    const documentationDiv = DOM.createElement('div', ['space-y-8']);
    
    // Generate content from structured data
    const sectionsHtml = PROJECT_CONTENT.documentation.sections
        .map(section => createSectionHtml(section))
        .join('');
    
    documentationDiv.innerHTML = sectionsHtml;
    container.appendChild(titleSection);
    container.appendChild(documentationDiv);
    mainSection.appendChild(container);
    
    // Add animations with staggered delay
    const sections = container.querySelectorAll('div[class*="bg-card-bg"]');
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
        <div id="${section.id}" class="bg-card-bg border-2 border-primary rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 class="text-3xl font-bold text-primary mb-6 relative">
                ${section.title}
                <div class="absolute bottom-0 left-0 w-16 h-1 bg-primary rounded-full"></div>
            </h2>
            <p class="text-dark text-lg leading-relaxed mb-6 text-justify">${section.content}</p>
    `;
    
    // Add additional content if exists
    if (section.additionalContent) {
        html += `<p class="text-dark text-lg leading-relaxed mb-6 text-justify">${section.additionalContent}</p>`;
    }
    
    // Add list items if exists
    if (section.listItems && section.listItems.length > 0) {
        html += '<ul class="space-y-4 mb-6">';
        section.listItems.forEach(item => {
            if (typeof item === 'string') {
                html += `
                    <li class="flex items-start space-x-3">
                        <span class="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                        <span class="text-dark leading-relaxed">${item}</span>
                    </li>
                `;
            } else if (typeof item === 'object' && item.title) {
                html += `
                    <li class="flex items-start space-x-3">
                        <span class="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                        <div>
                            <span class="font-semibold text-primary">${item.title}</span>
                            <span class="text-dark leading-relaxed"> ${item.content}</span>
                        </div>
                    </li>
                `;
            }
        });
        html += '</ul>';
    }
    
    // Add technologies if exists
    if (section.technologies && section.technologies.length > 0) {
        html += '<div class="space-y-6">';
        section.technologies.forEach(tech => {
            html += `
                <div class="bg-white bg-opacity-50 border border-primary-light rounded-xl p-6 hover:bg-opacity-70 transition-all duration-200">
                    <h3 class="font-bold text-primary text-xl mb-3">${tech.name}</h3>
                    <p class="text-dark leading-relaxed mb-3">${tech.description}</p>
                    ${tech.additionalDescription ? `<p class="text-dark leading-relaxed">${tech.additionalDescription}</p>` : ''}
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    return html;
}

export default createProjectDocumentationPage;