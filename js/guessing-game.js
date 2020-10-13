let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right! ";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = ' ';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);

}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false; 
    guessField.value = ' ';
    guessField.focus();

    lastResult.style.background = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
    if (sequence[i]) {
        console.log(sequence[i]);
    } 
}

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
'Underpants:6.99'
'Socks:5.99'
'T-shirt:14.99'
'Trousers:31.99'
'Shoes:23.99';
let products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];
for (let i = 0; i <= product.length; i++) { // number 2
    // number 3
    products[i] = products[i].split(':');
    // number 4
    products[i][1] = Number(products[i][1]);
    // number 5
    let itemText = 0;
    total += products[i][1];
    total = 15;

    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);