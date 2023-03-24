var codeChallenge = document.querySelector(".code-challenge");
var startButtonEl = document.querySelector("button");
var timerEl = document.querySelector(".timer-count");
var contentEl = document.querySelector(".quiz-questions");

var timer;
var secondsLeft = 75;
var indexOfCurrentQuestion = 0;

startButtonEl.addEventListener("click", function (event) {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timer);
      timerEl.textContent = "All done!";
      quizComplete();
    }
  }, 1000);

  codeChallenge.classList.add("hide")
  contentEl.classList.remove("hide")
  
  renderNextQuestion()
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
  document.querySelector("main").innerHTML = "";
  var question = questions[indexOfCurrentQuestion]
  var questionContainerEl = document.createElement("div");

  var titleEl = document.createElement("h2");
  titleEl.textContent = question.title;
  questionContainerEl.appendChild(titleEl);

  for (var i = 0; i < question.choices.length; i++) {
    var optionEl = document.createElement("button");
    optionEl.textContent = firstQuestion.choices[i];
    questionContainerEl.appendChild(optionEl);
  }

  document.querySelector("main").appendChild(questionContainerEl);
}


renderNextQuestion(questions[1]);

function renderNextQuestion() {

  contentEl.innerHTML = "";
  var currentQuestion = questions[indexOfCurrentQuestion];
  var headingEl = document.createElement("h2");
  headingEl.textContent = currentQuestion.title;
  contentEl.append(headingEl);

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("class", "choice");
    buttonEl.textContent = currentQuestion.choices[i];
    contentEl.appendChild(buttonEl);
  }
}
