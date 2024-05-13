function createComingSoonComponent() {
    const comingSoon = document.createElement('section');
    comingSoon.classList.add('coming-soon');
    comingSoon.innerHTML = `
        <div class="container">
            <img src="/assets/coming-soon.svg" alt="Coming Soon">
        </div>
    `;
    return comingSoon;
}

export default createComingSoonComponent;