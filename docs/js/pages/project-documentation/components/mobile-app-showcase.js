import { DOM, AnimationUtils } from '../../../utils/index.js';

// Mobile app screens organized by categories
const MOBILE_SCREENS = {
    onboarding: {
        title: 'Onboarding & Authentication',
        icon: '🚀',
        description: 'Seamless user registration and login experience',
        screens: [
            {
                name: 'Splash Screen',
                filename: 'Splash_Screen.png',
                description: 'Welcome screen with brand identity'
            },
            {
                name: 'Login Screen',
                filename: 'Login_Screen.png',
                description: 'Secure user authentication'
            },
            {
                name: 'Sign Up Screen',
                filename: 'SignUp_Screen.png',
                description: 'Easy account registration'
            }
        ]
    },
    shopping: {
        title: 'Core Shopping Experience',
        icon: '🛍️',
        description: 'Browse, search, and discover products from Egyptian brands',
        screens: [
            {
                name: 'Home Screen 1',
                filename: 'Home_Screen_1.png',
                description: 'Main dashboard with featured products'
            },
            {
                name: 'Home Screen 2',
                filename: 'Home_Screen_2.png',
                description: 'Extended home view with categories'
            },
            {
                name: 'Product Details',
                filename: 'Product_Details_Screen.png',
                description: 'Detailed product information and options'
            },
            {
                name: 'Brand Products',
                filename: 'Brand_Products_Screen.png',
                description: 'Products from specific Egyptian brands'
            },
            {
                name: 'Search Results',
                filename: 'Search_Results_Screen.png',
                description: 'Product search results with filters'
            },
            {
                name: 'Filters',
                filename: 'Filters_Screen.png',
                description: 'Advanced filtering options'
            },
            {
                name: 'Sorting',
                filename: 'Sorting_Screen.png',
                description: 'Sort products by various criteria'
            },
            {
                name: 'Reviews',
                filename: 'Reviews_Screen.png',
                description: 'Customer reviews and ratings'
            }
        ]
    },
    ai: {
        title: 'AI-Powered Features',
        icon: '🤖',
        description: 'Revolutionary AI try-on and visual search capabilities',
        screens: [
            {
                name: 'Image Search',
                filename: 'Image_Search_Screen.png',
                description: 'Upload images to find similar products'
            },
            {
                name: 'Search Results',
                filename: 'Image_Search_Results_Screen.png',
                description: 'Visual search results with AI matching'
            },
            {
                name: 'Try-On Instructions',
                filename: 'AI_Try-On_Instructions_Screen.png',
                description: 'Guide for using AR try-on feature'
            },
            {
                name: 'Original View',
                filename: 'AI_Try-On_Original_Screen.png',
                description: 'Product view before try-on'
            },
            {
                name: 'Try-On Result',
                filename: 'AI_Try-On_Result_Screen.png',
                description: 'Virtual try-on with AR technology'
            },
            {
                name: 'Recommendations',
                filename: 'Customers_Also_Viewed_Screen.png',
                description: 'AI-powered product recommendations'
            }
        ]
    },
    checkout: {
        title: 'Shopping & Checkout',
        icon: '💳',
        description: 'Streamlined purchasing and payment process',
        screens: [
            {
                name: 'Wishlist',
                filename: 'Wishlist_Screen.png',
                description: 'Save favorite products for later'
            },
            {
                name: 'Shopping Cart',
                filename: 'Cart_Screen.png',
                description: 'Review items before checkout'
            },
            {
                name: 'Order Checkout',
                filename: 'Order_Checkout_Screen.png',
                description: 'Complete purchase with secure payment'
            }
        ]
    },
    profile: {
        title: 'User Management',
        icon: '👤',
        description: 'Comprehensive user profile and account management',
        screens: [
            {
                name: 'Profile',
                filename: 'Profile_Screen.png',
                description: 'User profile overview'
            },
            {
                name: 'Edit Profile',
                filename: 'Edit_Profile_Screen.png',
                description: 'Update personal information'
            },
            {
                name: 'Change Password',
                filename: 'Change_Password_Screen.png',
                description: 'Security settings and password change'
            },
            {
                name: 'Manage Addresses',
                filename: 'Manage_Addresses_Screen.png',
                description: 'Shipping and billing addresses'
            },
            {
                name: 'Order History',
                filename: 'Order_History_Screen.png',
                description: 'Past orders and transaction history'
            }
        ]
    }
};

let currentCategory = 'onboarding';
let currentScreenIndex = 0;

/**
 * Create mobile app showcase component
 * @param {HTMLElement} container - Container element to append the showcase
 */
export function createMobileAppShowcase(container) {
    const showcaseSection = DOM.createElement('div', [
        'mobile-app-showcase',
        'bg-card-bg', 
        'border-2', 
        'border-primary', 
        'rounded-2xl', 
        'p-8', 
        'backdrop-blur-sm', 
        'hover:shadow-xl', 
        'transition-all', 
        'duration-300', 
        'transform', 
        'hover:-translate-y-1',
        'relative'
    ]);

    // Create header
    const header = DOM.createElement('div', ['mb-8', 'text-center']);
    header.innerHTML = `
        <div class="relative inline-block">
            <h2 class="text-3xl font-bold text-primary mb-6 relative">
                📱 Mobile App Preview
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
            </h2>
        </div>
        <p class="text-dark text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Explore our ELEVATE mobile application featuring cutting-edge AR try-on technology, 
            AI-powered recommendations, and seamless shopping experience for Egyptian local brands.
        </p>
    `;

    // Create main showcase container
    const showcaseContainer = DOM.createElement('div', [
        'showcase-container',
        'flex',
        'flex-col',
        'lg:flex-row',
        'gap-8',
        'items-start'
    ]);

    // Create screen display container
    const screenContainer = DOM.createElement('div', [
        'screen-container',
        'flex-shrink-0',
        'mx-auto',
        'lg:mx-0'
    ]);

    // Create categories sidebar
    const categoriesContainer = DOM.createElement('div', [
        'categories-container',
        'flex-1',
        'space-y-4'
    ]);

    // Build screen display
    createScreenDisplay(screenContainer);

    // Build categories
    createCategoriesSection(categoriesContainer);

    // Assemble showcase
    showcaseContainer.appendChild(screenContainer);
    showcaseContainer.appendChild(categoriesContainer);
    
    showcaseSection.appendChild(header);
    showcaseSection.appendChild(showcaseContainer);
    container.appendChild(showcaseSection);

    // Initialize with first screen
    setTimeout(() => {
        updatePhoneScreen();
        AnimationUtils.slideIn(showcaseSection, 'bottom', 400);
    }, 100);
}

/**
 * Create screen display without additional phone frame
 */
function createScreenDisplay(container) {
    const screenDisplay = DOM.createElement('div', [
        'screen-display',
        'relative',
        'flex',
        'flex-col',
        'items-center',
        'space-y-6'
    ]);

    screenDisplay.innerHTML = `
        <!-- Screen Image Container -->
        <div class="screen-container relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img 
                id="current-screen"
                src="./assets/framed_screens/Splash_Screen.png"
                alt="Current Screen"
                class="max-w-full h-auto object-contain transition-opacity duration-500"
                style="max-height: 600px; width: auto;"
                loading="lazy"
            />
            
            <!-- Loading overlay -->
            <div id="screen-loading" class="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
            
            <!-- Screen Title Overlay -->
            <div class="screen-title-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black from-10% to-transparent p-4">
                <h3 id="screen-title" class="text-white font-bold text-lg text-center">Splash Screen</h3>
                <p id="screen-description" class="text-white text-sm text-center mt-1 opacity-90">Welcome screen with brand identity</p>
            </div>
        </div>
        
        <!-- Navigation Controls -->
        <div class="navigation-controls flex items-center space-x-4">
            <button id="prev-screen" class="nav-btn bg-primary text-white rounded-full p-3 hover:bg-primary-dark transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <i class="bi bi-chevron-left text-lg"></i>
            </button>
            <div class="screen-indicator bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-lg border border-primary border-opacity-20">
                <span id="screen-counter" class="text-sm font-medium text-primary">1 / 25</span>
            </div>
            <button id="next-screen" class="nav-btn bg-primary text-white rounded-full p-3 hover:bg-primary-dark transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <i class="bi bi-chevron-right text-lg"></i>
            </button>
        </div>
        
        <!-- Quick Category Navigation -->
        <div class="quick-nav flex flex-wrap justify-center gap-2 mt-4">
            <button class="quick-nav-btn bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200" data-category="onboarding">
                🚀 Auth
            </button>
            <button class="quick-nav-btn bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200" data-category="shopping">
                🛍️ Shopping
            </button>
            <button class="quick-nav-btn bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200" data-category="ai">
                🤖 AI Features
            </button>
            <button class="quick-nav-btn bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200" data-category="checkout">
                💳 Checkout
            </button>
            <button class="quick-nav-btn bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200" data-category="profile">
                👤 Profile
            </button>
        </div>
    `;

    // Add navigation event listeners
    const prevBtn = screenDisplay.querySelector('#prev-screen');
    const nextBtn = screenDisplay.querySelector('#next-screen');

    prevBtn.addEventListener('click', () => navigateScreen('prev'));
    nextBtn.addEventListener('click', () => navigateScreen('next'));

    // Add quick navigation event listeners
    const quickNavButtons = screenDisplay.querySelectorAll('.quick-nav-btn');
    quickNavButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            switchToScreen(category, 0);
        });
    });

    container.appendChild(screenDisplay);
}

/**
 * Create categories section with screen lists
 */
function createCategoriesSection(container) {
    Object.entries(MOBILE_SCREENS).forEach(([categoryKey, category]) => {
        const categoryCard = DOM.createElement('div', [
            'category-card',
            'bg-white',
            'bg-opacity-70',
            'border',
            'border-primary-light',
            'rounded-xl',
            'p-6',
            'hover:bg-opacity-90',
            'hover:shadow-lg',
            'transition-all',
            'duration-300',
            'cursor-pointer',
            'group'
        ]);

        categoryCard.setAttribute('data-category', categoryKey);

        const screensHtml = category.screens.map((screen, index) => `
            <div class="screen-item flex items-center space-x-3 p-2 rounded-lg hover:bg-primary hover:bg-opacity-10 transition-colors duration-200 cursor-pointer" 
                 data-category="${categoryKey}" data-index="${index}">
                <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <div class="flex-1">
                    <h4 class="font-medium text-primary text-sm">${screen.name}</h4>
                    <p class="text-xs text-gray-600 mt-1">${screen.description}</p>
                </div>
            </div>
        `).join('');

        categoryCard.innerHTML = `
            <div class="category-header flex items-center space-x-3 mb-4">
                <div class="category-icon text-2xl">${category.icon}</div>
                <div class="flex-1">
                    <h3 class="font-bold text-primary text-lg group-hover:text-primary-dark transition-colors duration-300">
                        ${category.title}
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">${category.description}</p>
                </div>
                <div class="screen-count bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                    ${category.screens.length}
                </div>
            </div>
            <div class="screens-list space-y-1">
                ${screensHtml}
            </div>
        `;

        // Add click listeners for screens
        categoryCard.querySelectorAll('.screen-item').forEach(screenItem => {
            screenItem.addEventListener('click', (e) => {
                e.stopPropagation();
                const categoryKey = screenItem.getAttribute('data-category');
                const screenIndex = parseInt(screenItem.getAttribute('data-index'));
                switchToScreen(categoryKey, screenIndex);
            });
        });

        // Add category click listener
        categoryCard.addEventListener('click', () => {
            switchToScreen(categoryKey, 0);
        });

        container.appendChild(categoryCard);
    });
}

/**
 * Navigate to previous/next screen
 */
function navigateScreen(direction) {
    const currentCategoryScreens = MOBILE_SCREENS[currentCategory].screens;
    
    if (direction === 'prev') {
        if (currentScreenIndex > 0) {
            currentScreenIndex--;
        } else {
            // Go to previous category's last screen
            const categories = Object.keys(MOBILE_SCREENS);
            const currentCategoryIndex = categories.indexOf(currentCategory);
            if (currentCategoryIndex > 0) {
                const prevCategory = categories[currentCategoryIndex - 1];
                currentCategory = prevCategory;
                currentScreenIndex = MOBILE_SCREENS[prevCategory].screens.length - 1;
            }
        }
    } else if (currentScreenIndex < currentCategoryScreens.length - 1) {
        currentScreenIndex++;
    } else {
        // Go to next category's first screen
        const categories = Object.keys(MOBILE_SCREENS);
        const currentCategoryIndex = categories.indexOf(currentCategory);
        if (currentCategoryIndex < categories.length - 1) {
            const nextCategory = categories[currentCategoryIndex + 1];
            currentCategory = nextCategory;
            currentScreenIndex = 0;
        }
    }
    
    updatePhoneScreen();
}

/**
 * Switch to specific screen
 */
function switchToScreen(categoryKey, screenIndex) {
    currentCategory = categoryKey;
    currentScreenIndex = screenIndex;
    updatePhoneScreen();
}

/**
 * Update screen display
 */
function updatePhoneScreen() {
    const screenImg = document.getElementById('current-screen');
    const loadingOverlay = document.getElementById('screen-loading');
    const screenCounter = document.getElementById('screen-counter');
    const screenTitle = document.getElementById('screen-title');
    const screenDescription = document.getElementById('screen-description');
    const prevBtn = document.getElementById('prev-screen');
    const nextBtn = document.getElementById('next-screen');
    
    if (!screenImg || !loadingOverlay || !screenCounter) return;

    const currentScreen = MOBILE_SCREENS[currentCategory].screens[currentScreenIndex];
    
    // Show loading
    loadingOverlay.style.opacity = '1';
    
    // Update image and content
    setTimeout(() => {
        screenImg.src = `./assets/framed_screens/${currentScreen.filename}`;
        screenImg.alt = currentScreen.name;
        
        // Update title and description
        if (screenTitle) screenTitle.textContent = currentScreen.name;
        if (screenDescription) screenDescription.textContent = currentScreen.description;
        
        // Update counter
        const totalScreens = Object.values(MOBILE_SCREENS).reduce((total, cat) => total + cat.screens.length, 0);
        let currentPosition = 0;
        
        // Calculate current position
        for (const [catKey, category] of Object.entries(MOBILE_SCREENS)) {
            if (catKey === currentCategory) {
                currentPosition += currentScreenIndex + 1;
                break;
            }
            currentPosition += category.screens.length;
        }
        
        screenCounter.textContent = `${currentPosition} / ${totalScreens}`;
        
        // Update navigation buttons
        const isFirstScreen = currentCategory === Object.keys(MOBILE_SCREENS)[0] && currentScreenIndex === 0;
        const lastCategory = Object.keys(MOBILE_SCREENS)[Object.keys(MOBILE_SCREENS).length - 1];
        const isLastScreen = currentCategory === lastCategory && 
                           currentScreenIndex === MOBILE_SCREENS[lastCategory].screens.length - 1;
        
        if (prevBtn) prevBtn.disabled = isFirstScreen;
        if (nextBtn) nextBtn.disabled = isLastScreen;
        
        // Hide loading
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
        }, 200);
        
    }, 300);

    // Update active states in categories and quick nav
    updateCategoryStates();
    updateQuickNavStates();
}

/**
 * Update category active states
 */
function updateCategoryStates() {
    document.querySelectorAll('.category-card').forEach(card => {
        const categoryKey = card.getAttribute('data-category');
        
        if (categoryKey === currentCategory) {
            card.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');
        } else {
            card.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
        }
    });

    // Update screen items
    document.querySelectorAll('.screen-item').forEach(item => {
        const categoryKey = item.getAttribute('data-category');
        const screenIndex = parseInt(item.getAttribute('data-index'));
        
        if (categoryKey === currentCategory && screenIndex === currentScreenIndex) {
            item.classList.add('bg-primary', 'bg-opacity-20');
        } else {
            item.classList.remove('bg-primary', 'bg-opacity-20');
        }
    });
}

/**
 * Update quick navigation active states
 */
function updateQuickNavStates() {
    document.querySelectorAll('.quick-nav-btn').forEach(btn => {
        const categoryKey = btn.getAttribute('data-category');
        
        if (categoryKey === currentCategory) {
            btn.classList.remove('bg-primary-light', 'text-primary');
            btn.classList.add('bg-primary', 'text-white');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-primary-light', 'text-primary');
        }
    });
}

export default createMobileAppShowcase;
