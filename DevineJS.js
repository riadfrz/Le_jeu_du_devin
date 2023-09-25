// Constantes
const minNumber = 1;
const maxNumber = 100;
const maxTries = 6;

// Variables
let secretNumber;
let triesLeft;
let gameOver = false;

// Éléments du DOM
const guessInput = document.getElementById('guessInput');
const playButton = document.getElementById('playButton');
const message = document.getElementById('message');

// Fonction pour générer un nombre aléatoire
function generateSecretNumber() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

// Fonction pour afficher un message dans la zone de résultat
function showMessage(text, className) {
    message.textContent = text;
    message.className = className;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    secretNumber = generateSecretNumber();
    triesLeft = maxTries;
    gameOver = false;
    playButton.textContent = 'Jouer';
    guessInput.value = '';
    showMessage('', '');
}

// Gestionnaire d'événement pour le bouton "Jouer"
playButton.addEventListener('click', function () {
    playButton.textContent = 'Essayer'
    if (gameOver) {
        resetGame();
        return;
    }

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        showMessage('Erreur : Entrez un nombre entre 1 et 100.', 'black-text');
        return;
    }

    triesLeft--;

    if (guess === secretNumber) {
        showMessage(` [${triesLeft}] C'est Gagné ! le nombre mystere etait bien ${secretNumber}.`, 'green-text');
        gameOver = true;
        playButton.textContent = 'Rejouer ?';
    } else if (triesLeft === 0) {
        showMessage(` [${triesLeft}] Perdu ! Le nombre mystere etait ${secretNumber}.`, 'red-text');
        gameOver = true;
        playButton.textContent = 'Rejouer ?';
    } else if (guess < secretNumber) {
        showMessage(` [${triesLeft}]  C'est plus`, 'blue-text');
    } else {
        showMessage( ` [${triesLeft}]  C'est moin`, 'blue-text') ;
        showMessage( ` [${triesLeft}]  C'est moin`, 'blue-text') ;
    }
});

// Initialisation du jeu
resetGame();
