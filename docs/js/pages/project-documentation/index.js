import createComingSoonComponent from '../coming-soon/index.js';

function createProjectDocumentationPage(mainSection) {
    mainSection.className = '';
    mainSection.innerHTML = ``;
    mainSection.classList.add('project-documentation-content');
    mainSection.appendChild(content());
}

function content() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
        <div class="project-documentation">
            <div id="objective">
                <h2>Objective</h2>
                <p>Our main objective of this project is to create an e-commerce platform that will:</p>
                <ul>
                    <li>Centralize Egyptian local brands, especially clothing brands, providing them with an extended reach.</li>
                    <li>Offer features like brand directory, product listings, reviews, recommendations, and AR try-on options to improve customer experience.</li>
                    <li>Develop a scalable platform that could expand globally, allowing Egyptian brands to gain international visibility.</li>
                </ul>
                </p>
            </p>
        </div>
        <div id="market-analysis">
            <h2>Market Analysis</h2>
            <p>The market for local Egyptian brands has demonstrated significant potential, particularly due to the increasing consumer support for "Made in Egypt" initiatives. However, many local brands are limited by their reliance on social media and physical stores, which constrains their growth. Research indicates a substantial demand for a centralized platform where Egyptian brands, particularly small to medium-sized enterprises (SMEs), can showcase their products and expand their customer base</p>
            <p>Current local competitors are lacking several key features that are popular on international platforms, such as:</p>
            <ul>
                <li>AI-Powered Recommendations: The absence of personalized product suggestions based on user behavior.</li>
                <li>Augmented Reality (AR): The lack of virtual try-on capabilities for clothing, a feature which enhances the shopping experience and user engagement.</li>
            </ul>
        </div>
        <div id="competitor-analysis">
            <h2>Competitor Analysis</h2>
            <p>According to our recent analysis of existing studies on competitor e-commerce projects, we concluded that there are two main types of competitors:</p>
            <ul>
                <li><b>Local Stores and Online Pages (Direct Competitors):</b>
                Existing local stores such as Domanza, Go Native, Labelled, and Locally primarily depend on social media or physical stores for their presence, instead of having dedicated platforms. This limits user engagement and the availability of advanced features and limits their reach to different customers
                </li>
                <li><b>Larger E-commerce Sites (Indirect Competitors):</b>
                While larger e-commerce sites like Jumia and Noon occasionally feature local clothing brands, they lack dedicated support or features tailored to the unique needs of smaller, emerging Egyptian businesses
                .</li>
            </ul>
        </div>
        <div id="technologies">
            <h2>Technologies and Tools Used</h2>
            <p>The ELEVATE platform is built using a combination of cutting-edge technologies to ensure scalability, high performance, and user engagement. Each technology has been selected based on its efficiency in handling e-commerce functionalities, AI-driven recommendations, and augmented reality experiences.</p>
            <ul>
                <li>
                    <p>
                        <b>Front-End Development: React.js</b>
                    </p>
                    <p>
                        React.js is a popular JavaScript library known for its efficiency in creating dynamic and responsive user interfaces. Its component-based architecture enables modular development, facilitating seamless navigation, personalized user interactions, and real-time updates.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Back-End Development: Node.js, FastAPI</b>
                    </p>
                    <p>
                        Node.js is chosen for handling e-commerce operations such as user authentication, product management, and order processing. Its event-driven, non-blocking architecture makes it ideal for handling multiple concurrent requests efficiently.
                    </p>
                    <p>
                        FastAPI is integrated to serve AI-related functionalities such as personalized recommendations, image-based search, try-on features, and AR experiences. Its asynchronous capabilities and high performance make it well-suited for AI model interactions.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Database Management: Firebase</b>
                    </p>
                    <p>
                        Firebase is a cloud-based NoSQL database known for real-time synchronization, which enhances platform responsiveness. It supports scalability and flexible data handling, making it ideal for storing product catalogs, user profiles, and order histories.
                    </p>
                </li>
                <li>
                    <p>
                        <b>AI and Machine Learning: TensorFlow & TensorFlow Recommenders</b>
                    </p>
                    <p>
                        TensorFlow provides powerful tools for building AI-powered recommendation engines that analyze user behavior and purchase history.
                    </p>
                    <p>
                        TensorFlow Recommenders specializes in personalized product suggestions, improving user experience and increasing engagement.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Visual Search and AR: OpenCV/YOLO (Visual Search) & Snapchat Lenses (AR Try-On)</b>
                    </p>
                    <p>
                        OpenCV/YOLO enables image recognition, allowing users to upload images and find similar products using AI-based object detection.
                    </p>
                    <p>
                        Snapchat Lenses facilitate AR-based virtual try-on experiences, allowing customers to preview clothing items before purchasing.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Payment Integration: PayMob & Fawry</b>
                    </p>
                    <p>
                        These payment gateways provide secure and seamless digital transactions using credit cards and mobile wallets. Their wide adoption in Egypt makes them a reliable choice for facilitating payments.
                    </p>
                </li>
            </ul>
        </div>
    `;
    return container;
}

export default createProjectDocumentationPage;