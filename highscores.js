var submitButtonEl = document.querySelector('.submit-score');
var initialsEl = document.querySelector('.initials');
var scoreEl = document.querySelector('.score');
var highscoresEl = document.querySelector('#highscores-list');

submitButtonEl.addEventListener('click', function () {
    var initials = initialsEl.value.trim();
    var score = scoreEl.textContent.trim();

    if (initials !== '' && score !== '') {
        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

        var newScore = {
            initials: initials,
            score: score,
        };

        highscores.push(newScore);
        localStorage.setItem('highscores', JSON.stringify(highscores));


        initialsEl.value = '';

        window.location.href = 'highscores.html';
    }
});

function displayHighscores() {
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    highscores.forEach(function (score) {
        var listItemEl = document.createElement('li');
        listItemEl.textContent = score.initials + ' - ' + score.score;
        highscoresEl.appendChild(listItemEl);
    });
}

displayHighscores();
