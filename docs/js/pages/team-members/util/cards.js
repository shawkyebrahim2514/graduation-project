import teamMembersInformation from '../../../data/team-members.js';
import createCard from '../components/card.js';

const cardsContent = document.createElement('div');

// Add Tailwind classes for responsive grid layout
cardsContent.className = 'flex flex-wrap gap-6 justify-center items-stretch';

teamMembersInformation.forEach((teamMember) => {
    cardsContent.append(createCard(teamMember));
});

export default cardsContent;