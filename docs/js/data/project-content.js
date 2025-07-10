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
                id: 'problem-statement',
                title: 'Problem Statement',
                content: 'Local Egyptian brands face a significant barrier to expanding their reach and visibility due to their reliance on social media and limited online presence. The lack of a unified digital platform for local brands creates a gap between consumer demand for accessible local products and the existing, scattered online presence of these businesses.',
                subsections: [
                    {
                        title: 'Core Challenges',
                        content: 'Egyptian local brands encounter multiple interconnected challenges that limit their growth potential:',
                        listItems: [
                            {
                                title: 'Limited Digital Infrastructure:',
                                content: 'Brands rely heavily on social media platforms and physical stores, lacking comprehensive e-commerce solutions.'
                            },
                            {
                                title: 'Fragmented Market Presence:',
                                content: 'Without a centralized platform, local brands struggle to attract a broader audience and maintain consistent online visibility.'
                            },
                            {
                                title: 'Missed Technology Opportunities:',
                                content: 'Brands miss the opportunity to benefit from collective marketing, exposure, and technological tools that enhance the user experience.'
                            }
                        ]
                    },
                    {
                        title: 'Economic Impact',
                        content: 'Addressing this gap is critical for promoting local brands and supporting the Egyptian economy. The current situation prevents local businesses from reaching their full potential and limits consumer access to authentic Egyptian products.',
                        listItems: [
                            {
                                title: 'Brand Growth Limitation:',
                                content: 'SMEs cannot scale effectively without proper digital infrastructure and centralized marketplace presence.'
                            },
                            {
                                title: 'Consumer Access Barriers:',
                                content: 'Shoppers struggle to discover and access local brands due to scattered online presence and lack of unified shopping experience.'
                            },
                            {
                                title: 'Economic Development:',
                                content: 'The absence of a dedicated platform hinders the growth of the local economy and "Made in Egypt" initiatives.'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'objective',
                title: 'Objective',
                content: 'Our main objective of this project is to create an e-commerce platform that will:',
                listItems: [
                    'Centralize Egyptian local brands, especially clothing brands, providing them with an extended reach.',
                    'Offer features like brand directory, product listings, reviews, recommendations, and AI try-on options to improve customer experience.',
                    'Develop a scalable platform that could expand globally, allowing Egyptian brands to gain international visibility.'
                ]
            },
            {
                id: 'market-analysis',
                title: 'Market Analysis',
                content: 'The market for local Egyptian brands has demonstrated significant potential, particularly due to the increasing consumer support for "Made in Egypt" initiatives. However, many local brands are limited by their reliance on social media and physical stores, which constrains their growth. Research indicates a substantial demand for a centralized platform where Egyptian brands, particularly small to medium-sized enterprises (SMEs), can showcase their products and expand their customer base.',
                subsections: [
                    {
                        title: 'Stakeholders',
                        content: 'Our main stakeholders include diverse groups across the Egyptian market ecosystem:',
                        listItems: [
                            {
                                title: 'Egyptian Shoppers:',
                                content: 'Consumers actively looking for a centralized platform to discover authentic local brands, supporting local businesses and boycott initiatives.'
                            },
                            {
                                title: 'Small to Medium Enterprises (SMEs):',
                                content: 'Egyptian businesses seeking to expand their online presence and reach a broader digital audience beyond traditional social media channels.'
                            },
                            {
                                title: 'Established Egyptian Brands:',
                                content: 'Well-known local brands aiming to connect with a wider digital audience and enhance their e-commerce capabilities.'
                            }
                        ]
                    },
                    {
                        title: 'Market Gaps',
                        content: 'Current local competitors are lacking several key features that are popular on international platforms, creating significant opportunities for innovation:',
                        listItems: [
                            {
                                title: 'AI-Powered Recommendations:',
                                content: 'The absence of personalized product suggestions based on user behavior, purchase history, and browsing patterns.'
                            },
                            {
                                title: 'AI Try-Before-You-Buy:',
                                content: 'The lack of virtual try-on capabilities for clothing, a feature which enhances the shopping experience and user engagement by introducing a virtual fitting room experience.'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'competitor-analysis',
                title: 'Competitor Analysis',
                content: 'According to our recent analysis of existing studies on competitor e-commerce projects, we concluded that there are two main types of competitors:',
                subsections: [
                    {
                        title: 'Competitor Categories',
                        content: 'Our analysis identifies distinct competitor groups in the Egyptian e-commerce landscape:',
                        listItems: [
                            {
                                title: 'Local Stores and Online Pages (Direct Competitors):',
                                content: 'Existing local stores such as Domanza, Go Native, Labelled, and Locally primarily depend on social media or physical stores for their presence, instead of having dedicated platforms. This limits user engagement and the availability of advanced features and limits their reach to different customers.'
                            },
                            {
                                title: 'Larger E-commerce Sites (Indirect Competitors):',
                                content: 'While larger e-commerce sites like Jumia and Noon occasionally feature local clothing brands, they lack dedicated support or features tailored to the unique needs of smaller, emerging Egyptian businesses.'
                            }
                        ]
                    },
                    {
                        title: 'Competitive Analysis Matrix',
                        content: 'The following comparison table demonstrates ELEVATE\'s competitive advantages across key platform features:',
                        comparisonTable: {
                            headers: ['Feature / Platform', 'Domanza', 'Go Native', 'Labelled', 'Locally', 'ELEVATE'],
                            rows: [
                                {
                                    feature: 'Offline Store',
                                    competitors: ['✓', '✓', '✓', '✓', '✗']
                                },
                                {
                                    feature: 'Online Store',
                                    competitors: ['✓', '✓', '✗', '✗', '✓']
                                },
                                {
                                    feature: 'Mobile App',
                                    competitors: ['✗', '✗', '✗', '✗', '✓']
                                },
                                {
                                    feature: 'Subscription Plans',
                                    competitors: ['✗', '✗', '✗', '✗', '✓']
                                },
                                {
                                    feature: 'Shop By Brand',
                                    competitors: ['✓', '✓', '✗', '✗', '✓']
                                },
                                {
                                    feature: 'Visual Search',
                                    competitors: ['✗', '✗', '✗', '✗', '✓']
                                },
                                {
                                    feature: 'AI Virtual Try-On',
                                    competitors: ['✗', '✗', '✗', '✗', '✓']
                                },
                                {
                                    feature: 'AI-Powered Recommendations',
                                    competitors: ['✗', '✗', '✗', '✗', '✓']
                                }
                            ]
                        }
                    },
                    {
                        title: 'Market Opportunity',
                        content: 'In summary, the Egyptian market is underserved by current platforms, providing a clear opportunity to support local brands through a dedicated e-commerce solution that emphasizes a seamless shopping experience and advanced digital features.',
                        listItems: [
                            {
                                title: 'Technology Gap:',
                                content: 'No existing competitor offers AI-powered features like virtual try-on, visual search, or intelligent recommendations.'
                            },
                            {
                                title: 'Platform Completeness:',
                                content: 'ELEVATE is the only platform providing both mobile app and comprehensive online presence with subscription-based services.'
                            },
                            {
                                title: 'Innovation Leadership:',
                                content: 'Our advanced features position ELEVATE as the technology leader in the Egyptian local brand e-commerce space.'
                            }
                        ]
                    }
                ]
            },
        ]
    }
};

export default PROJECT_CONTENT;
