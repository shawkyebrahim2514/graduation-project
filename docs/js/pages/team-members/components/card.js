import { DOM, StringUtils, ValidationUtils } from '../../../utils/index.js';
import { ASSETS, BOOTSTRAP_ICONS } from '../../../constants/index.js';

/**
 * Create a team member card component
 * @param {Object} data - Team member data
 * @returns {HTMLElement} Card element
 */
function createCard(data) {
    // Validate required data
    if (!ValidationUtils.hasRequiredProperties(data, ['name', 'imgSrc', 'contacts'])) {
        console.warn('Invalid team member data:', data);
        return createErrorCard();
    }

    const card = DOM.createElement('div', [
        'bg-card-bg', 'border-2', 'border-primary', 'rounded-3xl', 'p-6', 'pb-12',
        'flex', 'flex-col', 'gap-3', 'items-stretch', 'justify-center', 'text-center',
        'w-72', 'text-primary', 'relative', 'overflow-hidden', 'transition-all', 'duration-300',
        'hover:bg-gray-50', 'hover:scale-105', 'hover:shadow-xl', 'group', 'backdrop-blur-sm'
    ]);

    card.innerHTML = `
        <div class="relative">
            <img src="${ASSETS.ICONS.GRADUATION_HAT}" 
                 alt="" 
                 class="w-24 absolute -top-4 left-0 right-16 mx-auto -rotate-[32deg] drop-shadow-lg transition-all duration-300 group-hover:-top-8 group-hover:right-24" />
            <img src="${data.imgSrc}" 
                 alt="${data.name}" 
                 class="w-36 h-36 rounded-full object-cover border-2 border-primary shadow-lg mx-auto" />
            <img src="${ASSETS.ICONS.GRADUATION_PAPER}" 
                 alt="" 
                 class="w-16 absolute top-24 -right-16 left-0 mx-auto drop-shadow-lg transition-all duration-300 group-hover:top-28 group-hover:-right-24" />
        </div>
        <h3 class="text-xl font-bold text-primary">${data.name}</h3>
        <hr class="border-t-2 border-primary" />
        <div class="text-dark flex flex-col gap-1">
            ${StringUtils.processMultilineText(data.description)}
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 bg-primary flex gap-4 justify-center backdrop-blur-sm shadow-lg">
            ${createContactLinks(data.contacts)}
        </div>
        <div class="flex gap-4 justify-center text-sm">
            ${createAdditionalLinks(data.additionalLinks)}
        </div>
    `;
    
    return card;
}

/**
 * Create contact links
 * @param {Object} contacts - Contact information
 * @returns {string} HTML string for contact links
 */
function createContactLinks(contacts) {
    const contactsHtml = [];
    
    if (contacts.linkedin) {
        contactsHtml.push(createContactLink(contacts.linkedin, BOOTSTRAP_ICONS.LINKEDIN));
    }
    
    if (contacts.github) {
        contactsHtml.push(createContactLink(contacts.github, BOOTSTRAP_ICONS.GITHUB));
    }
    
    if (contacts.email) {
        contactsHtml.push(createContactLink(contacts.email, BOOTSTRAP_ICONS.EMAIL));
    }
    
    return contactsHtml.join('');
}

/**
 * Create a single contact link
 * @param {string} href - Link URL
 * @param {string} iconClass - Bootstrap icon class
 * @returns {string} HTML string for contact link
 */
function createContactLink(href, iconClass) {
    return `
        <a href="${href}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-light hover:text-gray-200 transition-colors duration-200 transform hover:scale-110">
            <i class="bi ${iconClass} text-xl"></i>
        </a>
    `;
}

/**
 * Create additional links
 * @param {Array} additionalLinks - Array of additional links
 * @returns {string} HTML string for additional links
 */
function createAdditionalLinks(additionalLinks) {
    if (!additionalLinks || additionalLinks.length === 0) {
        return '';
    }
    
    return additionalLinks
        .map(link => createHyperLink(link.name, link.link))
        .join('');
}

/**
 * Create a hyperlink
 * @param {string} content - Link text
 * @param {string} link - Link URL
 * @returns {string} HTML string for hyperlink
 */
function createHyperLink(content, link) {
    if (!ValidationUtils.isValidUrl(link)) {
        console.warn('Invalid URL:', link);
        return '';
    }
    
    return `
        <a href="${link}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-primary bg-card-bg border-2 border-primary px-2 py-1 rounded-3xl transition-all duration-200 hover:bg-primary hover:text-light transform hover:scale-105">
            ${content}
        </a>
    `;
}

/**
 * Create error card when data is invalid
 * @returns {HTMLElement} Error card element
 */
function createErrorCard() {
    const card = DOM.createElement('div', [
        'bg-card-bg', 'border-2', 'border-primary', 'rounded-3xl', 'p-6',
        'flex', 'flex-col', 'gap-3', 'items-center', 'justify-center', 'text-center',
        'w-72', 'text-primary', 'backdrop-blur-sm'
    ]);
    
    card.innerHTML = `
        <div class="relative">
            <img src="${ASSETS.ICONS.GRADUATION_HAT}" 
                 alt="" 
                 class="w-24 absolute -top-4 left-0 right-16 mx-auto -rotate-[32deg] drop-shadow-lg" />
            <div class="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center border-2 border-primary">
                <i class="bi bi-exclamation-triangle text-4xl text-gray-600"></i>
            </div>
        </div>
        <h3 class="text-xl font-bold text-primary">Error Loading Member</h3>
        <hr class="border-t-2 border-primary w-full" />
        <div class="text-dark">
            <p>Unable to load team member information</p>
        </div>
    `;
    
    return card;
}

export default createCard;