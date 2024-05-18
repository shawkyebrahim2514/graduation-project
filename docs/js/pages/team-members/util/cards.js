import teamMembersInformation from '../../../data/team-members.js';
import createCard from '../components/card.js';

const cardsContent = document.createElement('div');

cardsContent.classList.add('container');
teamMembersInformation.forEach((teamMember) => {
    cardsContent.append(createCard(teamMember));
});

export default cardsContent;