var codeChallenge = document.querySelector('.code-challenge');
var startButtonEl = document.querySelector('.start-btn');
var timerEl = document.querySelector('.timer-count');
var contentEl = document.querySelector('.quiz-questions');
var resultsEl = document.querySelector('.quiz-complete');
var scoreEl = document.querySelector('.score');
var initialsEl = document.querySelector('.initials');
var submitButtonEl = document.querySelector('.submit-score');
var highScoresEl = document.querySelector('.highscores');
var feedbackEl = document.querySelector('.feedback');

var timer;
var secondsLeft = 75;
var indexOfCurrentQuestion = 0;
var score = 0;

startButtonEl.addEventListener('click', function (event) {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      quizComplete();
    }
  }, 1000);

  codeChallenge.classList.add('hide');
  contentEl.classList.remove('hide');
  feedbackEl.classList.remove('hide');
  renderNextQuestion();
});

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if/else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within _____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

function renderNextQuestion() {
  if (indexOfCurrentQuestion === questions.length) {
    quizComplete();
    return;
  }

  var question = questions[indexOfCurrentQuestion];

  document.getElementById('questions').textContent = question.title;

  var answerChoicesEl = document.getElementById('answer');
  answerChoicesEl.innerHTML = '';

  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var choiceButtonEl = document.createElement('button');
    choiceButtonEl.textContent = choice;
    choiceButtonEl.setAttribute('data-index', i);

    choiceButtonEl.addEventListener('click', function () {
      var selectedAnswerIndex = parseInt(this.getAttribute('data-index'));
      checkAnswer(selectedAnswerIndex);
    });

    answerChoicesEl.appendChild(choiceButtonEl);
  }
}

function checkAnswer(selectedAnswerIndex) {
  var question = questions[indexOfCurrentQuestion];

  if (question.answer === question.choices[selectedAnswerIndex]) {
    feedbackEl.textContent = 'Correct!';
    score++;
  } else {
    feedbackEl.textContent = 'Wrong!';
    secondsLeft -= 15;
  }

  indexOfCurrentQuestion++;
  renderNextQuestion();
}

function quizComplete() {
  clearInterval(timer);
  timerEl.textContent = 'All done!';
  contentEl.classList.add('hide');
  resultsEl.classList.remove('hide');
  feedbackEl.classList.add('hide');
}

