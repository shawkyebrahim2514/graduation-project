/**
 * Project content data
 */

export const PROJECT_CONTENT = {
    description: {
        title: 'Project Description',
        sections: [
            {
                id: 'vision',
                content: 'ELEVATE is a groundbreaking e-commerce platform that transforms how Egyptians discover and purchase local fashion. By combining cutting-edge AI technology with a passion for supporting "Made in Egypt" initiatives, we create the first unified marketplace exclusively dedicated to Egyptian local brands.'
            },
            {
                id: 'the-problem',
                content: 'Egyptian fashion brands with incredible talent and unique designs are struggling to reach customers beyond social media posts and physical stores. Meanwhile, consumers who want to support local businesses face the challenge of discovering and accessing these scattered brands across different platforms.'
            },
            {
                id: 'our-solution',
                content: 'ELEVATE bridges this gap by creating a centralized digital ecosystem where customers can explore hundreds of Egyptian brands in one place. Our AI-powered virtual try-on technology lets users see how clothes look on them before purchasing, while visual search helps them find exactly what they\'re looking for with just a photo.'
            },
            {
                id: 'what-makes-us-different',
                content: 'Unlike traditional e-commerce platforms, ELEVATE is built specifically for the Egyptian market with features that matter: Arabic interface, local payment methods, nationwide delivery, and subscription plans that benefit both customers and brands. Our mobile-first approach ensures everyone can access quality local fashion.'
            },
            {
                id: 'impact',
                content: 'ELEVATE empowers over 200 local brands to scale digitally while giving millions of Egyptian consumers easy access to authentic, locally-made fashion. We\'re not just selling clothes – we\'re building an ecosystem that strengthens the local economy and celebrates Egyptian creativity.'
            },
            {
                id: 'the-future',
                content: 'Starting in Egypt, ELEVATE\'s vision extends across the Middle East and North Africa, creating a regional platform that showcases the best of local fashion. We\'re building the foundation for a new era of digital commerce that puts local brands and communities first.'
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
            {
                id: 'external-links',
                title: 'External Links',
                content: 'Access our comprehensive resources, source code repositories, live demonstrations, and connect with our team through the following links:',
                externalLinks: {
                    categories: [
                        {
                            id: 'documentation',
                            title: 'Documentation & Reports',
                            icon: '📚',
                            links: [
                                {
                                    title: 'Full Project Documentation PDF',
                                    description: 'Complete technical documentation and project report',
                                    url: 'https://github.com/shawkyebrahim2514/graduation-project/blob/main/docs/assets/ELEVATE.pdf',
                                    icon: '📄'
                                },
                                {
                                    title: 'API Documentation (Swagger)',
                                    description: 'Interactive API documentation and testing interface',
                                    url: 'https://elevate-gp.vercel.app/api/v1/docs/',
                                    icon: '🔧'
                                }
                            ]
                        },
                        {
                            id: 'repositories',
                            title: 'Source Code Repositories',
                            icon: '💻',
                            links: [
                                {
                                    title: 'Mobile App Frontend',
                                    description: 'Flutter-based mobile application source code',
                                    url: 'https://github.com/iSeFz/ELEVATE',
                                    icon: '📱'
                                },
                                {
                                    title: 'Website Frontend (Brand Owners)',
                                    description: 'React-based brand owner dashboard and website',
                                    url: 'https://github.com/iSeFz/ELEVATE-Website',
                                    icon: '🌐'
                                },
                                {
                                    title: 'Backend Repository',
                                    description: 'Node.js backend API and server implementation',
                                    url: 'https://github.com/iSeFz/ELEVATE-Backend',
                                    icon: '⚙️'
                                }
                            ]
                        },
                        {
                            id: 'demonstrations',
                            title: 'Live Demonstrations',
                            icon: '🚀',
                            links: [
                                {
                                    title: 'Mobile App Live Demo',
                                    description: 'Experience the mobile app features and AI try-on',
                                    url: 'https://github.com/shawkyebrahim2514/graduation-project/blob/main/docs/assets/demos/Mobile-Demo.mp4',
                                    icon: '📲'
                                },
                                {
                                    title: 'Brand Owner Dashboard Demo',
                                    description: 'Explore the brand management and analytics platform',
                                    url: 'https://github.com/shawkyebrahim2514/graduation-project/blob/main/docs/assets/demos/Website-Demo.mp4',
                                    icon: '📊'
                                }
                            ]
                        },
                        {
                            id: 'team',
                            title: 'Team & Professional Network',
                            icon: '👥',
                            links: [
                                {
                                    title: 'Seif Yehia - LinkedIn',
                                    description: 'Project lead and mobile frontend development specialist',
                                    url: 'https://www.linkedin.com/in/seifyahia',
                                    icon: '👨‍💼'
                                },
                                {
                                    title: 'Shawky Ebrahim - LinkedIn',
                                    description: 'Backend architect and AI integration expert',
                                    url: 'https://www.linkedin.com/in/shawkyebrahim2514/',
                                    icon: '👨‍💻'
                                },
                                {
                                    title: 'Adham Khaled - LinkedIn',
                                    description: 'Web frontend development specialist',
                                    url: 'https://www.linkedin.com/in/adham-khaled-965a3321a/',
                                    icon: '👨‍💻'
                                },
                                {
                                    title: 'Belal Eid - LinkedIn',
                                    description: 'Mobile frontend development specialist',
                                    url: 'https://linkedin.com/in/elevate-backend-dev',
                                    icon: '👨‍💻'
                                },
                                {
                                    title: 'Nour Wael - LinkedIn',
                                    description: 'Mobile development and data engineering specialist',
                                    url: 'https://linkedin.com/in/elevate-ux-designer',
                                    icon: '👩‍💻'
                                },
                                {
                                    title: 'Nour Tarek - LinkedIn',
                                    description: 'Mobile frontend development specialist and UX/UI designer',
                                    url: 'https://www.linkedin.com/in/nour-tarek-zoair/',
                                    icon: '👩‍💻'
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
};

export default PROJECT_CONTENT;
