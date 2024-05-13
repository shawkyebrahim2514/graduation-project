function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${data.imgSrc}" alt="" />
        <h3>${data.name}</h3>
        <hr />
        <div class="description">
            ${data.description.split('\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
        <div class="contacts">
            <a href="${data.contacts.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a href="${data.contacts.github}" target="_blank"><i class="bi bi-github"></i></a>
            <a href="${data.contacts.email}" target="_blank"><i class="bi bi-envelope-fill"></i></a>
        </div>
    `

    return card;
}

export default createCard;