/**
 * Project content data
 */

export const PROJECT_CONTENT = {
    description: {
        title: 'Project Description',
        sections: [
            {
                id: 'introduction',
                content: 'ELEVATE introduces a new and innovative way of shopping online, especially for clothing, as it gives the user the ability to virtually try on clothes at home without the need to go to offline stores. Gathering Egyptian local brands in one place is the main idea of the project, where users can shop for clothing from multiple local brands all in one place'
            },
            {
                id: 'market-refresh',
                content: 'The project aims to refresh the market of online shopping for clothing and to help more Egyptian local brands gain broader visibility and extended reach. Introducing a digital solution to the market of clothing is the most competitive edge in the project, as most clothing brands rely on offline stores, limiting their exposure'
            },
            {
                id: 'user-experience',
                content: 'ELEVATE addresses the need for easy online shopping experience, while current online shopping websites mostly have the usual e-commerce functionalities and do not offer extra features for the customer. The project provides an easy way for the customer to imagine how a piece of clothing would look on him/her without trying it on themselves'
            },
            {
                id: 'centralized-platform',
                content: 'Introducing a centralized platform for shopping from multiple local brands in Egypt with a focus on user experience and innovation is one of the main attempts to help fill the gap in the market. Integrating artificial intelligent features like personalized recommendations and augmented reality try on are also attempts to digitize the shopping experience and make it more engaging'
            },
            {
                id: 'potential',
                content: 'ELEVATE has the potential to become one of the most significant platforms in the clothing industry, as it offers a different and slightly new experience to the customer through integrating technology with real-life applications like shopping for clothing'
            }
        ]
    },
    
    documentation: {
        title: 'Project Documentation',
        sections: [
            {
                id: 'objective',
                title: 'Objective',
                content: 'Our main objective of this project is to create an e-commerce platform that will:',
                listItems: [
                    'Centralize Egyptian local brands, especially clothing brands, providing them with an extended reach.',
                    'Offer features like brand directory, product listings, reviews, recommendations, and AR try-on options to improve customer experience.',
                    'Develop a scalable platform that could expand globally, allowing Egyptian brands to gain international visibility.'
                ]
            },
            {
                id: 'market-analysis',
                title: 'Market Analysis',
                content: 'The market for local Egyptian brands has demonstrated significant potential, particularly due to the increasing consumer support for "Made in Egypt" initiatives. However, many local brands are limited by their reliance on social media and physical stores, which constrains their growth. Research indicates a substantial demand for a centralized platform where Egyptian brands, particularly small to medium-sized enterprises (SMEs), can showcase their products and expand their customer base',
                additionalContent: 'Current local competitors are lacking several key features that are popular on international platforms, such as:',
                listItems: [
                    'AI-Powered Recommendations: The absence of personalized product suggestions based on user behavior.',
                    'Augmented Reality (AR): The lack of virtual try-on capabilities for clothing, a feature which enhances the shopping experience and user engagement.'
                ]
            },
            {
                id: 'competitor-analysis',
                title: 'Competitor Analysis',
                content: 'According to our recent analysis of existing studies on competitor e-commerce projects, we concluded that there are two main types of competitors:',
                listItems: [
                    {
                        title: 'Local Stores and Online Pages (Direct Competitors):',
                        content: 'Existing local stores such as Domanza, Go Native, Labelled, and Locally primarily depend on social media or physical stores for their presence, instead of having dedicated platforms. This limits user engagement and the availability of advanced features and limits their reach to different customers'
                    },
                    {
                        title: 'Larger E-commerce Sites (Indirect Competitors):',
                        content: 'While larger e-commerce sites like Jumia and Noon occasionally feature local clothing brands, they lack dedicated support or features tailored to the unique needs of smaller, emerging Egyptian businesses'
                    }
                ]
            },
            {
                id: 'technologies',
                title: 'Technologies and Tools Used',
                content: 'The ELEVATE platform is built using a combination of cutting-edge technologies to ensure scalability, high performance, and user engagement. Each technology has been selected based on its efficiency in handling e-commerce functionalities, AI-driven recommendations, and augmented reality experiences.',
                technologies: [
                    {
                        name: 'Front-End Development: React.js',
                        description: 'React.js is a popular JavaScript library known for its efficiency in creating dynamic and responsive user interfaces. Its component-based architecture enables modular development, facilitating seamless navigation, personalized user interactions, and real-time updates.'
                    },
                    {
                        name: 'Back-End Development: Node.js, FastAPI',
                        description: 'Node.js is chosen for handling e-commerce operations such as user authentication, product management, and order processing. Its event-driven, non-blocking architecture makes it ideal for handling multiple concurrent requests efficiently.',
                        additionalDescription: 'FastAPI is integrated to serve AI-related functionalities such as personalized recommendations, image-based search, try-on features, and AR experiences. Its asynchronous capabilities and high performance make it well-suited for AI model interactions.'
                    },
                    {
                        name: 'Database Management: Firebase',
                        description: 'Firebase is a cloud-based NoSQL database known for real-time synchronization, which enhances platform responsiveness. It supports scalability and flexible data handling, making it ideal for storing product catalogs, user profiles, and order histories.'
                    },
                    {
                        name: 'AI and Machine Learning: TensorFlow & TensorFlow Recommenders',
                        description: 'TensorFlow provides powerful tools for building AI-powered recommendation engines that analyze user behavior and purchase history.',
                        additionalDescription: 'TensorFlow Recommenders specializes in personalized product suggestions, improving user experience and increasing engagement.'
                    },
                    {
                        name: 'Visual Search and AR: OpenCV/YOLO (Visual Search) & Snapchat Lenses (AR Try-On)',
                        description: 'OpenCV/YOLO enables image recognition, allowing users to upload images and find similar products using AI-based object detection.',
                        additionalDescription: 'Snapchat Lenses facilitate AR-based virtual try-on experiences, allowing customers to preview clothing items before purchasing.'
                    },
                    {
                        name: 'Payment Integration: PayMob & Fawry',
                        description: 'These payment gateways provide secure and seamless digital transactions using credit cards and mobile wallets. Their wide adoption in Egypt makes them a reliable choice for facilitating payments.'
                    }
                ]
            }
        ]
    }
};

export default PROJECT_CONTENT;
