var submitButtonEl = document.querySelector('.submit-score');
var initialsEl = document.querySelector('.initials');
var scoreEl = document.querySelector('.score');
var highScoresEl = document.querySelector('#highscores-list');

submitButtonEl.addEventListener('click', function () {
    var initials = initialsEl.value.trim();
    var score = scoreEl.textContent.trim();

    if (initials !== '' && score !== '') {
        var highScores = JSON.parse(localStorage.getItem('highscores')) || [];

        var newScore = {
            initials: initials,
            score: score,
        };

        highScores.push(newScore);
        localStorage.setItem('highscores', JSON.stringify(highScores));


        initialsEl.value = '';

        window.location.href = 'highscores.html';
    }
});

function displayHighscores() {
    var highScores = JSON.parse(localStorage.getItem('highscores')) || [];

    highScores.forEach(function (score) {
        var listItemEl = document.createElement('li');
        listItemEl.textContent = score.initials + ' - ' + score.score;
        highScoresEl.appendChild(listItemEl);
    });
}

displayHighscores();
