import createCard from '../components/card.js';

const teamMembersInformation = [
    {
        name: "Shawky Ebrahim",
        imgSrc: "https://avatars.githubusercontent.com/shawkyebrahim2514",
        description: `
            SWE intern @Microsoft\n
            ACPC 2022 Finalist
        `,
        contacts: {
            email: "mailto:shawky.ebrahim2514@gmail.com",
            linkedin: "https://www.linkedin.com/in/shawkyebrahim2514/",
            github: "https://github.com/shawkyebrahim2514"
        }
    },
    {
        name: "Seif Yahia Al-Gohary",
        imgSrc: "https://avatars.githubusercontent.com/iSeFz",
        description: `
            Random human trying to code ;)
        `,
        contacts: {
            email: "mailto:seif_yahia@outlook.com",
            linkedin: "https://www.linkedin.com/in/seifyahia",
            github: "https://github.com/iSeFz"
        }
    },
    {
        name: "Adham Khaled Fahmy",
        imgSrc: "https://avatars.githubusercontent.com/Adham-K-Fahmy",
        description: `
            ACPC 2023 Finalist
        `,
        contacts: {
            email: "mailto:adham.kh.fahmy@gmail.com",
            linkedin: "https://www.linkedin.com/in/adham-khaled-965a3321a/",
            github: "https://github.com/Adham-K-Fahmy"
        }
    },
    {
        name: "Nour Wael",
        imgSrc: "https://avatars.githubusercontent.com/nourelshaer",
        description: `
            Python Developer Intern @Vodafone
        `,
        contacts: {
            email: "mailto:nour.elshaer@outlook.com",
            linkedin: "https://www.linkedin.com/in/nourelshaer",
            github: "https://github.com/nourelshaer"
        }
    },
    {
        name: "Nour Tarek",
        imgSrc: "https://avatars.githubusercontent.com/NourTarek201",
        description: `
        `,
        contacts: {
            email: "mailto:nourtarrek201@gmail.com",
            linkedin: "https://www.linkedin.com/in/nour-tarek-62b234231/",
            github: "https://github.com/NourTarek201"
        }
    },
]

// Create the team members section (Cards)
const cardsSection = document.querySelector('main');
cardsSection.className = '';
cardsSection.classList.add('team-members-content');

const cardsContainer = document.createElement('div');
cardsContainer.classList.add('container');

cardsSection.append(cardsContainer);

teamMembersInformation.forEach((teamMember) => {
    cardsContainer.append(createCard(teamMember));
});

export default cardsSection;