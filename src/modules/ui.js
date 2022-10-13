import getScores from './modules/getscores.js';
import postScore from './modules/addscore.js';

const displayScores = async () => {
    const scores = await getScores();
    const leaderList = document.querySelector('.score-list');
    const fragment = new DocumentFragment();
    leaderList.innerHTML = '';
    if (scores.length === 0) {
        const message = document.createElement('p');
        message.innerText = 'Submit your score using the form';
        leaderList.append(message);
    } else {
        scores.forEach((element) => {
            const { user, score } = element;
            const li = document.createElement('li');
            li.classList.add('scoreinfo');
            li.innerText = `${user}: ${score}`;
            fragment.append(li);
        });
        leaderList.append(fragment);
    }
};

const addScore = () => {
    const inputs = document.querySelector('.formscore').elements;
    const [user, score] = [inputs[0].value, inputs[1].value];
    postScore(user, score);
    inputs[0].value = '';
    inputs[1].value = '';
    displayScores();
};

export { displayScores, addScore };


