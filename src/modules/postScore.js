const postScore = async (user, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QKY1phfIna0h5X8Qb6hg/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => data.result);
};

export default postScore;