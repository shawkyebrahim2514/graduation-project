function createHeader(pageName) {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = `
        <section class="title">
            <div class="container">
                <h2>No Project Until Now</h2>
            </div>
        </section>
        <section class="links container glass-effect">
            <div class="content">
                <a 
                    href="/project-description"
                    id="project-description">
                    Project Description
                </a>
                <a 
                    href="/project-documentation"
                    id="project-documentation">
                    Project Documentation
                </a>
                <a 
                    href="/" 
                    id="team-members"
                    class="active"}">
                    Team Members
                </a>
            </div>
        </section>
    `;
    addLinksEventListeners(headerContainer);
    return headerContainer;
}

function addLinksEventListeners(container) {
    container.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageName = event.target.id;
            makeOneActiveLink(container, pageName);
        });
    });
}

function makeOneActiveLink(container, pageName) {
    container.querySelectorAll('a').forEach((link) => {
        link.classList.remove('active');
    });
    container.querySelector(`#${pageName}`).classList.add('active');
}

export default createHeader;