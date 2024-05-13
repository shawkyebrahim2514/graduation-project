function createNotFoundComponent() {
    const notFound = document.createElement('section');
    notFound.classList.add('not-found');
    notFound.innerHTML = `
        <div class="container">
            <img src="./assets/404.svg" alt="Not Found">
        </div>
    `;
    return notFound;
}

export default createNotFoundComponent;