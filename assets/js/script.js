// Pseudo-Code

$(document).ready(function () {
  // variables
  // correct
  var correct = 0;
  // incorrect
  var incorrect = 0;
  // unanswered
  var unanswered = 0;
  // questions array
  var questions = ["How many Superbowls have the Eagles won?", "Who is the Eagles starting quarterback?", "What is the name of the Eagles Stadium?"];
  // incorrect answers array/object?
  var incorrectAnswers = ["Zero", "Two", "Donovan McNabb", "Doug Peterson", "Ford Field", "Heinz Field"];
  // correct answers array
  var correctAnswers = ["One", "Carson Wentz", "Lincoln Financial Field"];
  // time remaining
  var timer;
  var intervalId;

  function decrement() {
    timer--;
    $("#time-remaining").text("Time Remaining: " + timer);
  }

  function run() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
  }

  function stop() {
    clearInterval(intervalId);
  }

  function incorrectFunction() {
    timer = 5;
    incorrect++;
    $("#time-remaining").text("Time Remaining: " + timer);
    run();
    $("#result").text("INCORRECT!");
    $("#questions").text("");
    if (timer === 0) {
      stop();
    }
  };

  function correctFunction() {
    timer = 5;
    correct++;
    $("#time-remaining").text("Time Remaining: " + timer);
    run();
    $("#result").text("CORRECT!");
    $("#questions").text("");
    if (timer === 0) {
      stop();
    }
  };

  function unansweredFunction() {
    timer = 5;
    unanswered++;
    $("#time-remaining").text("Time Remaining: " + timer);
    run();
    $("#results").text("UNANSWERED!");
    $("#questions").text("");
  };
  // When the document is opened, click start to begin and start the game
  $("#start-game").on("click", function () {
    timer = 30;
    // write the time remaining to the page
    $("#time-remaining").text("Time Remaining: " + timer);
    run();
    // write the questions and answers to the page
    $("#questions").text(questions[0]);
    $("#questions").append("<div class='incorrect'>" + incorrectAnswers[0] + "</div>");
    $("#questions").append("<div class='correct'>" + correctAnswers[0] + "</div>");
    $("#questions").append("<div class='incorrect'>" + incorrectAnswers[1] + "</div>");
    $(".correct").on("click", function () {
      correctFunction();
    });
    $(".incorrect").on("click", function () {
      incorrectFunction();
    });
    if (timer <= 0) {
      stop();
      unansweredFunction();
    }
  });




  // if correct answer selected ++ correct variable
  // if incorrect answer is selected ++ incorrect variable
});