import cardsContent from './util/cards.js';

/**
 * Create team members page
 * @param {HTMLElement} mainSection - Main section element
 */
function createTeamMembersPage(mainSection) {
    mainSection.className = 'min-h-screen bg-gradient-to-br from-primary-light to-transparent py-8';
    mainSection.innerHTML = '';
    
    // Create container with Tailwind classes
    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4';
    
    // Add title section
    const titleSection = document.createElement('div');
    titleSection.className = 'text-center mb-12';
    titleSection.innerHTML = `
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Our Team</h1>
        <p class="text-lg text-dark max-w-2xl mx-auto">
            Meet the talented individuals behind ELEVATE - dedicated computer science students from FCAI-CU
            working together to revolutionize the Egyptian e-commerce landscape.
        </p>
    `;
    
    container.appendChild(titleSection);
    container.appendChild(cardsContent);
    mainSection.appendChild(container);
}

export default createTeamMembersPage;