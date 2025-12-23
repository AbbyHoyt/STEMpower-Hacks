var numQuestion = 0;
var score = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

q1a1.addEventListener("click", incorrect);
q1a2.addEventListener("click", correct);
q1a3.addEventListener("click", incorrect);
q1a4.addEventListener("click", incorrect);

q2a1.addEventListener("click", correct);
q2a2.addEventListener("click", incorrect);

q3a1.addEventListener("click", incorrect);
q3a2.addEventListener("click", incorrect);
q3a3.addEventListener("click", incorrect);
q3a4.addEventListener("click", correct);

q4a1.addEventListener("click", correct);
q4a2.addEventListener("click", incorrect);

q5a1.addEventListener("click", incorrect);
q5a2.addEventListener("click", incorrect);
q5a3.addEventListener("click", incorrect);
q5a4.addEventListener("click", correct);

function correct() {
  score += 1;
  numQuestion += 1;

  if (numQuestion == 5) {
    showScore();
  }  
}

function incorrect() {
  numQuestion += 1;

  if (numQuestion == 5) {
    showScore();
  }  
}

function showScore() {
    result.innerHTML = "Your Score: " + score + "/5"
}