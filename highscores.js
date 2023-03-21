var clearHighscoresEl = document.querySelector('clear-highscores');
var highscoresEl = document.querySelector('highscores-list');

function clearDisplay() {
    highscoresEl.innerHTML = '';
}

function clearHighscores() {
    localStorage.clear();
    clearDisplay();
}


clearHighscoresEl.addEventListener('click', clearHighscores);
