import displayList from './displaylist.js';

const getScores = async () => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QKY1phfIna0h5X8Qb6hg/scores/')
        .then((response) => response.json())
        .then((data) => {
            const info = data.result;
            const infoSorted = info.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
            displayList(infoSorted);
        });
};

export default getScores;