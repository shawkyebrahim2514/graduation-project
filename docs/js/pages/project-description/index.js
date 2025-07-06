import { PROJECT_CONTENT } from '../../data/project-content.js';
import { DOM, AnimationUtils } from '../../utils/index.js';

/**
 * Create project description page
 * @param {HTMLElement} mainSection - Main section element
 */
function createProjectDescriptionPage(mainSection) {
    DOM.clearContent(mainSection);
    mainSection.className = 'min-h-screen bg-gradient-to-br from-primary-light to-transparent py-8';
    
    const container = DOM.createElement('div', ['max-w-4xl', 'mx-auto', 'px-4']);
    
    // Add title section
    const titleSection = document.createElement('div');
    titleSection.className = 'text-center mb-12';
    titleSection.innerHTML = `
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Project Description</h1>
        <p class="text-lg text-dark">
            Discover how ELEVATE is transforming the Egyptian e-commerce landscape
        </p>
    `;
    
    const contentDiv = DOM.createElement('div', ['space-y-6']);
    
    // Generate content from structured data with enhanced styling
    const contentHtml = PROJECT_CONTENT.description.sections
        .map((section, index) => `
            <div class="bg-card-bg border-2 border-primary rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <p class="text-dark text-lg leading-relaxed text-justify relative">
                    <span class="text-4xl text-primary font-bold absolute -left-4 -top-2">"</span>
                    ${section.content}
                    <span class="text-4xl text-primary font-bold">"</span>
                </p>
            </div>
        `)
        .join('');
    
    contentDiv.innerHTML = contentHtml;
    container.appendChild(titleSection);
    container.appendChild(contentDiv);
    mainSection.appendChild(container);
    
    // Add animations with staggered delay
    const sections = container.querySelectorAll('div[class*="bg-card-bg"]');
    sections.forEach((section, index) => {
        setTimeout(() => {
            AnimationUtils.slideIn(section, 'bottom', 300);
        }, index * 100);
    });
}

export default createProjectDescriptionPage;