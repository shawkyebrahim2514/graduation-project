import { PROJECT_CONTENT } from '../../data/project-content.js';
import { DOM, AnimationUtils } from '../../utils/index.js';
import { createToolsSection } from './components/tools-section.js';
import { createMobileAppShowcase } from './components/mobile-app-showcase.js';

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

    // Add the mobile app showcase section
    createMobileAppShowcase(documentationDiv);

    // Add the tools section to the documentationDiv so it inherits spacing
    createToolsSection(documentationDiv);

    mainSection.appendChild(container);

    // Add animations with staggered delay
    const sections = container.querySelectorAll('div[class*="bg-card-bg"]');
    sections.forEach((section, index) => {
        // Skip tools section as it has its own animation
        if (!section.querySelector('#tools-grid')) {
            setTimeout(() => {
                AnimationUtils.slideIn(section, 'bottom', 300);
            }, index * 100);
        }
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

    // Add subsections if exists
    if (section.subsections && section.subsections.length > 0) {
        section.subsections.forEach(subsection => {
            html += `
                <div class="mt-8 mb-6">
                    <h3 class="text-2xl font-bold text-primary mb-4 relative">
                        ${subsection.title}
                        <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full"></div>
                    </h3>
                    <p class="text-dark text-lg leading-relaxed mb-4 text-justify">${subsection.content}</p>
            `;

            if (subsection.listItems && subsection.listItems.length > 0) {
                html += '<ul class="space-y-4 mb-4">';
                subsection.listItems.forEach(item => {
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

            // Add comparison table if exists
            if (subsection.comparisonTable) {
                const table = subsection.comparisonTable;
                html += `
                    <div class="overflow-x-auto bg-white bg-opacity-80 rounded-xl border border-primary-light p-4 mb-4">
                        <table class="w-full min-w-full border-collapse">
                            <thead>
                                <tr class="bg-primary bg-opacity-10">
                `;

                table.headers.forEach((header, index) => {
                    const headerClass = index === 0 ? 'text-left' : 'text-center';
                    const bgClass = index === table.headers.length - 1 ? 'bg-primary text-white' : '';
                    html += `
                        <th class="border border-primary-light px-4 py-3 font-bold text-primary ${headerClass} ${bgClass}">
                            ${header}
                        </th>
                    `;
                });

                html += `
                                </tr>
                            </thead>
                            <tbody>
                `;

                table.rows.forEach(row => {
                    html += '<tr class="hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">';
                    html += `
                        <td class="border border-primary-light px-4 py-3 font-semibold text-primary text-left">
                            ${row.feature}
                        </td>
                    `;

                    row.competitors.forEach((value, index) => {
                        const isElevate = index === row.competitors.length - 1;
                        const bgClass = isElevate ? 'bg-primary bg-opacity-5' : '';

                        let textColor = 'text-red-500'; // default for ✗
                        if (value === '✓') {
                            textColor = isElevate ? 'text-green-600' : 'text-blue-600';
                        }

                        html += `
                            <td class="border border-primary-light px-4 py-3 text-center ${bgClass}">
                                <span class="text-xl font-bold ${textColor}">${value}</span>
                            </td>
                        `;
                    });

                    html += '</tr>';
                });

                html += `
                            </tbody>
                        </table>
                    </div>
                `;
            }

            html += '</div>';
        });
    }

    // Add external links if exists
    if (section.externalLinks && section.externalLinks.categories) {
        html += `
            <div class="mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        `;

        section.externalLinks.categories.forEach(category => {
            html += `
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
                        <span class="text-2xl">${category.icon}</span>
                        <span>${category.title}</span>
                    </h3>
                    <div class="space-y-3">
            `;

            category.links.forEach(link => {
                html += `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                       class="block bg-white bg-opacity-70 hover:bg-opacity-90 border border-primary-light rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                        <div class="flex items-start space-x-3">
                            <span class="text-xl flex-shrink-0">${link.icon}</span>
                            <div class="flex-1">
                                <h4 class="font-semibold text-primary group-hover:text-primary-dark transition-colors duration-200">${link.title}</h4>
                                <p class="text-sm text-gray-600 mt-1">${link.description}</p>
                                <div class="flex items-center space-x-1 mt-2 text-xs text-primary">
                                    <span>Open link</span>
                                    <svg class="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
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