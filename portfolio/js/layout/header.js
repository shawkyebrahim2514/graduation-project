function createHeader(pageName) {
    const header = document.createElement('header');
    header.innerHTML = `
        <section class="title">
            <div class="container">
                <h2>No Project Until Now</h2>
            </div>
        </section>
        <section class="links">
            <div class="container">
                <a 
                    href="/project-description" 
                    class="${pageName=="project-description"?"active":""}">
                    Project Description
                </a>
                <a 
                    href="/project-documentation"
                    class="${pageName=="project-documentation"?"active":""}">
                    Project Documentation
                </a>
                <a 
                    href="/" 
                    class="${pageName=="team-members"?"active":""}">
                    Team Members
                </a>
            </div>
        </section>
    `;
    return header;
}

export default createHeader;