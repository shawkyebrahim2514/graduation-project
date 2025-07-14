import cardsContent from './util/cards.js';
import { AnimationUtils } from '../../utils/index.js';

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
    
    // Add team photo section
    const teamPhotoSection = document.createElement('div');
    teamPhotoSection.className = 'flex justify-center mb-16';
    teamPhotoSection.innerHTML = `
        <div class="relative group cursor-pointer">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-card-bg border-2 border-primary rounded-3xl p-6 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                <img 
                    src="./assets/elevate-team.jpeg" 
                    alt="ELEVATE Team Photo" 
                    class="w-full max-w-4xl mx-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <div class="text-center mt-6">
                    <h3 class="text-xl font-bold text-primary mb-2">ELEVATE Development Team</h3>
                    <p class="text-dark text-sm">Computer Science Students from Faculty of Computers and Artificial Intelligence, Cairo University</p>
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(titleSection);
    container.appendChild(teamPhotoSection);
    container.appendChild(cardsContent);
    mainSection.appendChild(container);
    
    // Add smooth animations
    setTimeout(() => {
        const teamPhoto = container.querySelector('img[alt="ELEVATE Team Photo"]');
        if (teamPhoto) {
            AnimationUtils.slideIn(teamPhoto.parentElement.parentElement, 'top', 500);
        }
    }, 100);
    
    // Animate individual team member cards with staggered delay
    setTimeout(() => {
        const memberCards = container.querySelectorAll('.team-member-card, [class*="card"], [class*="member"]');
        memberCards.forEach((card, index) => {
            setTimeout(() => {
                AnimationUtils.slideIn(card, 'bottom', 300);
            }, index * 100 + 300);
        });
    }, 200);
}

export default createTeamMembersPage;