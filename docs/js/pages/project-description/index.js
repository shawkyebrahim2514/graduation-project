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
    
    // Add poster section
    const posterSection = document.createElement('div');
    posterSection.className = 'flex justify-center mb-12';
    posterSection.innerHTML = `
        <div class="relative group cursor-pointer">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-card-bg border-2 border-primary rounded-2xl p-4 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <img 
                    src="./assets/elevate-poster.png" 
                    alt="ELEVATE Project Poster" 
                    class="w-full max-w-2xl mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <p class="text-center text-dark mt-4 text-sm font-medium">ELEVATE Project Poster</p>
            </div>
        </div>
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
    container.appendChild(posterSection);
    container.appendChild(contentDiv);
    mainSection.appendChild(container);
    
    // Add animations with staggered delay
    const posterImage = container.querySelector('img[alt="ELEVATE Project Poster"]');
    if (posterImage) {
        AnimationUtils.slideIn(posterImage.parentElement.parentElement, 'top', 400);
    }
    
    const sections = container.querySelectorAll('div[class*="bg-card-bg"]');
    sections.forEach((section, index) => {
        setTimeout(() => {
            AnimationUtils.slideIn(section, 'bottom', 300);
        }, index * 100 + 200); // Offset after poster animation
    });
}

export default createProjectDescriptionPage;