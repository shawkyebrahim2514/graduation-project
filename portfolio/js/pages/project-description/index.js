import createComingSoonComponent from '../coming-soon/index.js';

function createProjectDescriptionPage(mainSection) {
    mainSection.className = '';
    mainSection.innerHTML = ``;
    mainSection.classList.add('project-description-content');
    mainSection.appendChild(createComingSoonComponent());
}

export default createProjectDescriptionPage;