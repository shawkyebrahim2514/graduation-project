import createHeaderLayout from './layout/header.js';
import createTeamMembersPage from './pages/team-members/index.js';
import createProjectDescriptionPage from './pages/project-description/index.js';
import createProjectDocumentationPage from './pages/project-documentation/index.js';
const mainSection = document.querySelector('main');
const headerSection = document.querySelector('header');

headerSection.append(createHeaderLayout());
createTeamMembersPage(mainSection);

headerSection.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
        const pageName = event.target.id;
        switch (pageName) {
            case 'team-members':
                createTeamMembersPage(mainSection);
                break;
            case 'project-description':
                createProjectDescriptionPage(mainSection);
                break;
            case 'project-documentation':
                createProjectDocumentationPage(mainSection);
                break;
            default:
                break;
        }
    });
});