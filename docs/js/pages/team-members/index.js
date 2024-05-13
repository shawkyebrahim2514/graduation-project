import cardsContent from './util/cards.js';

function createTeamMembersPage(mainSection) {
    mainSection.className = '';
    mainSection.innerHTML = ``;
    mainSection.classList.add('team-members-content');
    mainSection.appendChild(cardsContent);
}

export default createTeamMembersPage;