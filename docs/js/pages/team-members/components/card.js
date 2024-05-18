function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card', 'glass-effect');

    card.innerHTML = `
        <div class="image">
            <img src="./assets/Graduation Hat 3.svg" alt="" class="hat" />
            <img src="${data.imgSrc}" alt="" class="person" />
            <img src="./assets/Graduation Paper 2.svg" alt="" class="paper" />
        </div>
        <h3>${data.name}</h3>
        <hr />
        <div class="description">
            ${data.description.split('\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
        <div class="contacts glass-effect">
            <a href="${data.contacts.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a href="${data.contacts.github}" target="_blank"><i class="bi bi-github"></i></a>
            <a href="${data.contacts.email}" target="_blank"><i class="bi bi-envelope-fill"></i></a>
        </div>
        <div class="additional-links">
            ${data.additionalLinks?.map((link) =>
            `${createHyperLink({
                content: link.name,
                link: link.link
            })}`).join('') || ''}
        </div>
    `
    return card;
}

function createHyperLink({ content, link }) {
    return `
        <a href="${link}" target="_blank">${content}</a>
    `
}

export default createCard;