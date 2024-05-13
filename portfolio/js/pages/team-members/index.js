import createHeaderLayout from '../../layout/header.js';
import cardsSection from './util/cards.js';

const body = document.querySelector('body');
body.prepend(createHeaderLayout('team-members'));
body.append(cardsSection);