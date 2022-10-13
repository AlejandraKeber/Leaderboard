const getScores = async () => {
    const { value } = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QKY1phfIna0h5X8Qb6hg/scores/').then((response) => response.json());
    return value;
};

export default getScores;