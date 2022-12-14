import './style.css';
/* eslint-disable import/no-unresolved */
import getScores from './modules/getscores.js';
import postScore from './modules/postscore.js';

const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');
const userName = document.querySelector('.name-input');
const userScore = document.querySelector('.score-input');

getScores();

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  await postScore(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
});

refresh.addEventListener('click', () => {
  getScores();
});
