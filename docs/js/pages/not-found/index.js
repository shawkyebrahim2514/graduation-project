function createNotFoundComponent() {
    const notFound = document.createElement('section');
    notFound.className = 'flex items-center justify-center min-h-screen py-12';
    notFound.innerHTML = `
        <div class="max-w-2xl mx-auto px-4 text-center">
            <img src="./assets/404.svg" 
                 alt="Not Found" 
                 class="w-full max-w-md mx-auto mb-8 drop-shadow-lg" />
            <h2 class="text-4xl font-bold text-primary mb-4">Page Not Found</h2>
            <p class="text-lg text-dark mb-6">The page you're looking for doesn't exist.</p>
            <button onclick="window.history.back()" 
                    class="bg-primary text-light px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 font-medium">
                Go Back
            </button>
        </div>
    `;
    return notFound;
}

export default createNotFoundComponent;