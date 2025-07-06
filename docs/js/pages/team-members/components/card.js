import { DOM, StringUtils, ValidationUtils } from '../../../utils/index.js';
import { CSS_CLASSES, ASSETS, BOOTSTRAP_ICONS } from '../../../constants/index.js';

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

    const card = DOM.createElement('div', [CSS_CLASSES.CARD, CSS_CLASSES.GLASS_EFFECT]);

    card.innerHTML = `
        <div class="${CSS_CLASSES.CARD_IMAGE}">
            <img src="${ASSETS.ICONS.GRADUATION_HAT}" alt="" class="${CSS_CLASSES.CARD_HAT}" />
            <img src="${data.imgSrc}" alt="${data.name}" class="${CSS_CLASSES.CARD_PERSON}" />
            <img src="${ASSETS.ICONS.GRADUATION_PAPER}" alt="" class="${CSS_CLASSES.CARD_PAPER}" />
        </div>
        <h3>${data.name}</h3>
        <hr />
        <div class="${CSS_CLASSES.CARD_DESCRIPTION}">
            ${StringUtils.processMultilineText(data.description)}
        </div>
        <div class="${CSS_CLASSES.CARD_CONTACTS} ${CSS_CLASSES.GLASS_EFFECT}">
            ${createContactLinks(data.contacts)}
        </div>
        <div class="${CSS_CLASSES.CARD_ADDITIONAL_LINKS}">
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
    return `<a href="${href}" target="_blank" rel="noopener noreferrer"><i class="bi ${iconClass}"></i></a>`;
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
    
    return `<a href="${link}" target="_blank" rel="noopener noreferrer">${content}</a>`;
}

/**
 * Create error card when data is invalid
 * @returns {HTMLElement} Error card element
 */
function createErrorCard() {
    const card = DOM.createElement('div', [CSS_CLASSES.CARD, CSS_CLASSES.GLASS_EFFECT]);
    card.innerHTML = `
        <div class="${CSS_CLASSES.CARD_IMAGE}">
            <img src="${ASSETS.ICONS.GRADUATION_HAT}" alt="" class="${CSS_CLASSES.CARD_HAT}" />
            <div class="${CSS_CLASSES.CARD_PERSON}" style="width: 150px; height: 150px; background: #ccc; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <i class="bi bi-exclamation-triangle" style="font-size: 2rem; color: #666;"></i>
            </div>
        </div>
        <h3>Error Loading Member</h3>
        <hr />
        <div class="${CSS_CLASSES.CARD_DESCRIPTION}">
            <p>Unable to load team member information</p>
        </div>
    `;
    return card;
}

export default createCard;