const nickname = document.querySelector('#nickname');
const startBtn = document.querySelector('.btn-start');
const resultBtn = document.querySelector('.btn-result');
const bestResultBtn = document.querySelector('.btn-best-result');
const clearResultBtn = document.querySelector('.btn-clear');
const clearBestResultBtn = document.querySelector('.btn-clear-best');
const clicker = document.querySelector('.btn-main');
let bestHighScore = 0;

const playGame = () => {
    let clicks = 0;
    let highScore = 0;
    const timer = 5000;

    const setScores = () => {
        if (clicks > highScore) {
            highScore = clicks;
            sessionStorage.setItem('highScore', highScore);
        }
        if (highScore > bestHighScore) {
            bestHighScore = highScore;
            localStorage.setItem('nickname', nickname.value);
            localStorage.setItem('bestHighScore', bestHighScore);
        }
    };

    const countClicks = () => {
        clicker.addEventListener('click', () => {
            clicks += 1;
        });
        setTimeout(() => {
            alert(`You clicked ${clicks} times`);
            setScores();
        }, timer);
    };

    countClicks();
};

const updateNickname = () => {
    nickname.addEventListener('input', (e) => {
        nickname.value = e.target.value;
    });
};

const validateNickname = () => {
    updateNickname();
    try {
        if (!nickname.value.trim()) {
            throw new Error('Empty nickname');
        }
        playGame();
    } catch (err) {
        alert(err);
    }
};

const getResult = () => {
    alert(`Best result is: ${sessionStorage.highScore}`);
};
const getBestResult = () => {
    alert(`Best result is: ${localStorage.bestHighScore} by ${localStorage.nickname}`);
};
const clearHighscore = () => {
    sessionStorage.setItem('highScore', 0);
    alert('Best result is cleared');
};
const clearBestHighscore = () => {
    localStorage.removeItem('nickname');
    localStorage.setItem('bestHighScore', 0);
    alert('Best result of all time is cleared');
};

startBtn.addEventListener('click', validateNickname);
resultBtn.addEventListener('click', getResult);
bestResultBtn.addEventListener('click', getBestResult);
clearResultBtn.addEventListener('click', clearHighscore);
clearBestResultBtn.addEventListener('click', clearBestHighscore);
