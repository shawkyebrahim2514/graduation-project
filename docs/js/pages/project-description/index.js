import createComingSoonComponent from '../coming-soon/index.js';

function createProjectDescriptionPage(mainSection) {
    mainSection.className = '';
    mainSection.innerHTML = ``;
    mainSection.classList.add('project-description-content');
    mainSection.appendChild(content());
}

function content() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
        <div class="project-description">
            <p>
                ELEVATE introduces a new and innovative way of shopping online, especially for clothing, as it gives the user the ability to virtually try on clothes at home without the need to go to offline stores. Gathering Egyptian local brands in one place is the main idea of the project, where users can shop for clothing from multiple local brands all in one place
            </p>
            <p>
                The project aims to refresh the market of online shopping for clothing and to help more Egyptian local brands gain broader visibility and extended reach. Introducing a digital solution to the market of clothing is the most competitive edge in the project, as most clothing brands rely on offline stores, limiting their exposure
            </p>
            <p>
                ELEVATE addresses the need for easy online shopping experience, while current online shopping websites mostly have the usual e-commerce functionalities and do not offer extra features for the customer. The project provides an easy way for the customer to imagine how a piece of clothing would look on him/her without trying it on themselves
            </p>
            <p>
                Introducing a centralized platform for shopping from multiple local brands in Egypt with a focus on user experience and innovation is one of the main attempts to help fill the gap in the market. Integrating artificial intelligent features like personalized recommendations and augmented reality try on are also attempts to digitize the shopping experience and make it more engaging
            </p>
            <p>
                ELEVATE has the potential to become one of the most significant platforms in the clothing industry, as it offers a different and slightly new experience to the customer through integrating technology with real-life applications like shopping for clothing
            </p>
        </div>
    `;
    return container;
}

export default createProjectDescriptionPage;