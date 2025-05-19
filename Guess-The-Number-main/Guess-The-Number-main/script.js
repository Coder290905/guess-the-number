const instructions = document.getElementById('instructions');
const difficulty = document.getElementById('difficultyContainer');
const game = document.getElementById('gameContainer');
const win = document.getElementById('winContainer');
const lose = document.getElementById('loseContainer');
const winHomeBtn = document.getElementById('winHomeBtn');
const winPlayAgainBtn = document.getElementById('winPlayAgainBtn');
const loseHomeBtn = document.getElementById('loseHomeBtn');
const losePlayAgainBtn = document.getElementById('losePlayAgainBtn');
const nextBtn = document.getElementById('nextBtn');
const mediumBtn = document.getElementById('mediumBtn');
const hardBtn = document.getElementById('hardBtn');
const guess = document.getElementById('guess');
const check = document.getElementById('check');
const higher = document.getElementById('higher');
const lower = document.getElementById('lower');
const wins = document.getElementById('wins');
const loses = document.getElementById('loses');
const options = document.getElementById('options');
const correctGuess = document.getElementById('correctGuess');
const chancesTaken = document.getElementById('chancesTaken');
const incorrectGuess = document.getElementById('incorrectGuess');
const incorrectChances = document.getElementById('incorrectChances');
let chances = 9;
let totalWins = 0;
let totalLoses = 0;
let value;
let num;

nextBtn.addEventListener('click', function() {
    instructions.style.display = 'none';
    difficulty.style.display = 'block';
});

document.querySelector('#options').addEventListener('click', function(e) {
    if (e.target.getAttribute('id') === 'easyBtn') {
        value = 100;
        num = Math.floor(Math.random() * value);
        console.log(num);
    } else if (e.target.getAttribute('id') === 'mediumBtn') {
        value = 250;
        num = Math.floor(Math.random() * value);
        console.log(num);
    } else {
        value = 500;
        num = Math.floor(Math.random() * value);
        console.log(num);
    };

    document.getElementById('range').innerText = 'The number lies between 0 to ' + `${value}`;
    difficulty.style.display = 'none';
    game.style.display = 'block';
});

const clear = () => {
    for (let i = 0; i < 11; i++) {
        higher.lastElementChild.remove();
        lower.lastElementChild.remove();
        let higherLi = document.createElement('li');
        let lowerLi = document.createElement('li');
        higherLi.innerText = '--';
        lowerLi.innerText = '--';
        higher.insertBefore(higherLi, higher.firstChild);
        lower.insertBefore(lowerLi, lower.firstChild);
        chances = 9;
        document.querySelector("#chances").innerText = `You have ${chances + 1} chances left.`;
    };
};

check.addEventListener('click', function() {
    if (`${guess.value}` == '') {
        pass;
    } else if (`${guess.value}` == num) {
        totalWins++;
        wins.innerText = totalWins;
        correctGuess.innerText = `${guess.value}` + ' is the correct guess!';
        chancesTaken.innerText = 'You took ' + `${10 - chances}` + ' chance(s)!';
        game.style.display = 'none';
        win.style.display = 'block';
        guess.value = '';
    } else {
        chances--;
        document.querySelector("#chances").innerText = `You have ${chances + 1} chances left.`;
        if (chances < 0) {
            guess.value = '';
            totalLoses++;
            loses.innerText = totalLoses;
            incorrectChances.innerText = 'You have 0 chances left.';
            incorrectGuess.innerText = `${num}` + ' is the correct number.';
            game.style.display = 'none';
            lose.style.display = 'block';
            clear();
        } else if (`${guess.value}` < num) {
            higher.lastElementChild.remove();
            lower.lastElementChild.remove();
            let higherLi = document.createElement('li');
            let lowerLi = document.createElement('li');
            higherLi.innerText = `${guess.value}`;
            lowerLi.innerText = '--';
            higher.insertBefore(higherLi, higher.firstChild);
            lower.insertBefore(lowerLi, lower.firstChild);
            guess.value = '';
        } else {
            lower.lastElementChild.remove();
            higher.lastElementChild.remove();
            let lowerLi = document.createElement('li');
            let higherLi = document.createElement('li');
            lowerLi.innerText = `${guess.value}`;
            higherLi.innerText = '--';
            higher.insertBefore(higherLi, higher.firstChild);
            lower.insertBefore(lowerLi, lower.firstChild);
            guess.value = '';
        };
    };
});

winHomeBtn.addEventListener('click', function() {
    win.style.display = 'none';
    instructions.style.display = 'block';
    clear();
});

loseHomeBtn.addEventListener('click', function() {
    lose.style.display = 'none';
    instructions.style.display = 'block';
    clear();
});

winPlayAgainBtn.addEventListener('click', function() {
    win.style.display = 'none';
    difficulty.style.display = 'block';
    clear();
});

losePlayAgainBtn.addEventListener('click', function() {
    lose.style.display = 'none';
    difficulty.style.display = 'block';
    clear();
});

guess.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        check.click();
    };
});
