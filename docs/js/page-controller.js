import createHeaderLayout from './layout/header.js';
import createTeamMembersPage from './pages/team-members/index.js';
import createProjectDescriptionPage from './pages/project-description/index.js';
import createProjectDocumentationPage from './pages/project-documentation/index.js';

const mainSection = document.querySelector('main');
const headerSection = document.querySelector('header');

// Initialize application
function initApp() {
    try {
        // Create and append header
        headerSection.append(createHeaderLayout());
        
        // Load initial page (team members)
        loadInitialPage();
        
        // Setup navigation event listeners
        setupNavigationListeners();
        
    } catch (error) {
        console.error('Error initializing application:', error);
        showErrorMessage();
    }
}

// Load the initial page
function loadInitialPage() {
    try {
        // Clear main section and load team members page
        mainSection.className = '';
        mainSection.innerHTML = '';
        createTeamMembersPage(mainSection);
        
        // Update page title
        document.title = 'Team Members | Graduation Project';
        
        // Ensure the team members link is active
        setTimeout(() => {
            const teamMembersLink = headerSection.querySelector('#team-members');
            if (teamMembersLink) {
                teamMembersLink.classList.add('active');
            }
        }, 100);
        
    } catch (error) {
        console.error('Error loading initial page:', error);
        showErrorMessage();
    }
}

// Setup navigation event listeners
function setupNavigationListeners() {
    // Get all navigation links
    const navLinks = headerSection.querySelectorAll('a[id]');
    
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageName = event.target.id;
            
            // Update active link
            updateActiveLink(pageName);
            
            // Load the requested page
            loadPage(pageName);
        });
    });
}

// Update active navigation link
function updateActiveLink(activePageId) {
    const navLinks = headerSection.querySelectorAll('a[id]');
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.id === activePageId) {
            link.classList.add('active');
        }
    });
}

// Load a specific page
function loadPage(pageName) {
    try {
        // Clear main section
        mainSection.className = '';
        mainSection.innerHTML = '';
        
        // Load the appropriate page
        switch (pageName) {
            case 'team-members':
                createTeamMembersPage(mainSection);
                document.title = 'Team Members | Graduation Project';
                break;
            case 'project-description':
                createProjectDescriptionPage(mainSection);
                document.title = 'Project Description | Graduation Project';
                break;
            case 'project-documentation':
                createProjectDocumentationPage(mainSection);
                document.title = 'Project Documentation | Graduation Project';
                break;
            default:
                // Default to team members for unknown pages
                console.warn(`Unknown page: ${pageName}, defaulting to team-members`);
                createTeamMembersPage(mainSection);
                document.title = 'Team Members | Graduation Project';
                // Update active link to team-members
                updateActiveLink('team-members');
                break;
        }
        
        // Add fade-in animation
        mainSection.style.opacity = '0';
        mainSection.style.transition = 'opacity 0.3s ease-in-out';
        
        // Trigger animation
        setTimeout(() => {
            mainSection.style.opacity = '1';
        }, 50);
        
    } catch (error) {
        console.error(`Error loading page ${pageName}:`, error);
        showErrorMessage();
    }
}

// Show error message
function showErrorMessage() {
    mainSection.innerHTML = `
        <div class="error-container" style="text-align: center; padding: 2rem; color: var(--dark-color);">
            <h2>Failed to load content</h2>
            <p>Please refresh the page and try again.</p>
            <button onclick="location.reload()" style="padding: 0.5rem 1rem; margin-top: 1rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer;">
                Refresh Page
            </button>
        </div>
    `;
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}