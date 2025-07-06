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
        
        // Ensure the team members link is active with proper Tailwind classes
        setTimeout(() => {
            updateActiveLink('team-members');
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
        // Define active and inactive class sets
        const activeClasses = ['bg-primary', 'text-light'];
        const inactiveClasses = ['bg-primary-light', 'text-primary', 'hover:bg-primary', 'hover:text-light'];
        
        // Remove all state classes first
        [...activeClasses, ...inactiveClasses].forEach(cls => {
            link.classList.remove(cls);
        });
        
        // Apply appropriate classes based on whether this is the active link
        if (link.id === activePageId) {
            activeClasses.forEach(cls => link.classList.add(cls));
        } else {
            inactiveClasses.forEach(cls => link.classList.add(cls));
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
                // Update active link to team-members for unknown pages
                updateActiveLink('team-members');
                break;
        }
        
        // Add fade-in animation with Tailwind classes
        mainSection.style.opacity = '0';
        mainSection.style.transform = 'translateY(20px)';
        mainSection.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        
        // Trigger animation
        setTimeout(() => {
            mainSection.style.opacity = '1';
            mainSection.style.transform = 'translateY(0)';
        }, 50);
        
    } catch (error) {
        console.error(`Error loading page ${pageName}:`, error);
        showErrorMessage();
    }
}

// Show error message
function showErrorMessage() {
    mainSection.innerHTML = `
        <div class="flex items-center justify-center min-h-screen py-12">
            <div class="max-w-md mx-auto px-4 text-center">
                <div class="bg-card-bg border-2 border-primary rounded-2xl p-8 backdrop-blur-sm shadow-xl">
                    <div class="mb-6">
                        <i class="bi bi-exclamation-triangle text-6xl text-primary mb-4"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-primary mb-4">Failed to load content</h2>
                    <p class="text-dark mb-6 leading-relaxed">Please refresh the page and try again.</p>
                    <button onclick="location.reload()" 
                            class="bg-primary text-light px-6 py-3 rounded-full hover:bg-primary-dark transition-all duration-200 font-medium transform hover:scale-105 shadow-lg">
                        <i class="bi bi-arrow-clockwise mr-2"></i>
                        Refresh Page
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Export functions for debugging (accessible via window object)
window.debugNavigation = {
    updateActiveLink,
    loadPage,
    getCurrentActiveLink: () => {
        return headerSection.querySelector('a.bg-primary.text-light')?.id || 'none';
    },
    getAllLinks: () => {
        return Array.from(headerSection.querySelectorAll('a[id]')).map(link => ({
            id: link.id,
            classes: Array.from(link.classList),
            isActive: link.classList.contains('bg-primary') && link.classList.contains('text-light')
        }));
    }
};