function createComingSoonComponent() {
    const comingSoon = document.createElement('section');
    comingSoon.className = 'flex items-center justify-center min-h-screen py-12';
    comingSoon.innerHTML = `
        <div class="max-w-2xl mx-auto px-4 text-center">
            <img src="./assets/coming-soon.svg" 
                 alt="Coming Soon" 
                 class="w-full max-w-md mx-auto mb-8 drop-shadow-lg" />
            <h2 class="text-4xl font-bold text-primary mb-4">Coming Soon</h2>
            <p class="text-lg text-dark">This feature is under development and will be available soon!</p>
        </div>
    `;
    return comingSoon;
}

export default createComingSoonComponent;