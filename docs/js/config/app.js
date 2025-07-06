// Application configuration
export const APP_CONFIG = {
    // Site information
    site: {
        name: 'ELEVATE',
        fullName: 'Egyptian Local E-commerce Visualization and Augmented Technology Experience',
        description: 'ELEVATE introduces a new and innovative way of shopping online, especially for clothing, as it gives the user the ability to virtually try on clothes at home without the need to go to offline stores.',
        url: 'https://shawkyebrahim2514.github.io/graduation-project/',
        version: '1.0.0'
    },
    
    // UI settings
    ui: {
        theme: {
            primaryColor: '#A51930',
            lightColor: '#f7f3f4',
            darkColor: '#310d13',
            backgroundColor: 'rgba(165, 25, 48, 0.03)',
            cardBackgroundColor: 'rgb(249, 242, 243)'
        },
        animations: {
            defaultTransition: 'all 0.3s ease-in-out'
        }
    },
    
    // Navigation configuration
    navigation: {
        defaultPage: 'team-members',
        pages: {
            'team-members': {
                title: 'Team Members',
                path: '/',
                active: true
            },
            'project-description': {
                title: 'Project Description',
                path: '/project-description',
                active: false
            },
            'project-documentation': {
                title: 'Project Documentation',
                path: '/project-documentation',
                active: false
            }
        }
    },
    
    // API or external service configurations (for future use)
    services: {
        github: {
            baseUrl: 'https://api.github.com',
            avatarUrl: 'https://avatars.githubusercontent.com'
        }
    }
};

export default APP_CONFIG;
