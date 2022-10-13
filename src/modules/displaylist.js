const displayList = async (arr) => {
    const leaderList = document.querySelector('.score-list');
    leaderList.innerHTML = '';
    for (let i = 0; i < 10; i += 1) {
        const li = document.createElement('li');
        li.innerHTML = `${arr[i].user}: ${arr[i].score}`;
        leaderList.appendChild(li);
    }
}

export default displayList;