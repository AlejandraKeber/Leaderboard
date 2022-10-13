import './style.css';
import getScores from './modules/getscores';
import postScore from './modules/postscore';

const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');
const userName = document.querySelector('.name-input');
const userScore = document.querySelector('.score-input');

refresh.addEventListener('click', () => {
    getScores();
});

submit.addEventListener('click', async (e) => {
    e.preventDefault();
    await postScore(userName.value, parseInt(userScore.value, 10));
    userName.value = '';
    userScore.value = '';
});

getScores();


