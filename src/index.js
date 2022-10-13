import './style.css';

import displayList from './modules/score.js';

const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');

displayList();

refresh.addEventListener('click', displayList);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    addScore();
    displayList();
});