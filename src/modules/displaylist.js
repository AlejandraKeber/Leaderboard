const displayList = async (arr) => {
  const leaderList = document.querySelector('.score-list');
  leaderList.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `<p>${i + 1}. ${arr[i].user}:</p><p> ${arr[i].score}</p>`;
    leaderList.appendChild(li);
  }
};

export default displayList;