import createComingSoonComponent from '../coming-soon/index.js';

function createProjectDocumentationPage(mainSection) {
    mainSection.className = '';
    mainSection.innerHTML = ``;
    mainSection.classList.add('project-documentation-content');
    mainSection.appendChild(createComingSoonComponent());
}

export default createProjectDocumentationPage;