var timerSeconds = 120;
var correctAnswers = 0;
var wrongAnswers = 0;
var Unanswered = 10;

$(document).ready(function(){

	hideQuiz();
	hideResults();
	hideDoneButton();
	hideTimer();
	hideRestartButton();


	var timer;

	$("#start").on("click", run);
	$("#done").on("click", stop);
	$("#restart").on("click", restart);

	function run() {
		timer = setInterval(decrement, 1000);
		showTimer();
		showQuiz();
		showDoneButton();
		hideStartButton();
	}

	function decrement() {
		timerSeconds--;
		$("#time-remaining").html(timerSeconds);

		if (timerSeconds === 0) {
			stop();
		}
	}

	function stop() {
		clearInterval(timer);
		timerSeconds = 120;
		$("#time-remaining").html(timerSeconds);
		hideTimer();
		hideQuiz();
		hideDoneButton();
		showResults();
		showRestartButton();
	}

	function restart() {
		timer = setInterval(decrement, 1000);
		resetQuiz();
		resetResults();
		showTimer();
		showQuiz();
		showDoneButton();
		hideResults();
		hideRestartButton();
	}

	function showQuiz() {
		$("#quiz").show();
	}

	function hideQuiz() {
		$("#quiz").hide();
	}

	function showResults() {
		$("#results").show();
	}

	function hideResults() {
		$("#results").hide();
	}

	function showTimer() {
		$("#timer").show();
	}

	function hideTimer() {
		$("#timer").hide();
	}

	function showDoneButton() {
		$("#done").show();
	}

	function hideDoneButton() {
		$("#done").hide();
	}

	function showRestartButton() {
		$("#restart").show();
	}

	function hideRestartButton() {
		$("#restart").hide();
	}

	function showStartButton(){
		$("#start").show();
	}

	function hideStartButton() {
		$("#start").hide();
	}

	function resetQuiz() {
		document.getElementsByClassName("formFields")[0].reset();
		document.getElementsByClassName("formFields")[1].reset();
		document.getElementsByClassName("formFields")[2].reset();
		document.getElementsByClassName("formFields")[3].reset();
		document.getElementsByClassName("formFields")[4].reset();
        document.getElementsByClassName("formFields")[5].reset();
        document.getElementsByClassName("formFields")[6].reset();
        document.getElementsByClassName("formFields")[7].reset();
        document.getElementsByClassName("formFields")[8].reset();
        document.getElementsByClassName("formFields")[9].reset();
	}

	function resetResults(){
		$("#correctAnswers").html(correctAnswers = 0);
		$("#wrongAnswers").html(wrongAnswers = 0);
		$("#Unanswered").html(Unanswered = 10);

	}

	$(function () {
		$('.questions input[type="radio"]').click(function() {

			var type = $(this).data('type'),
			correctAnswerCount = $('.questions input[type="radio"]:checked[data-type="1"]').length;

			if (type === 1) {
				correctAnswers++;
				Unanswered = Unanswered - 1;
				$("#correctAnswers").html(correctAnswers);
				$("#Unanswered").html(Unanswered);
			}

			else if (type === 0) {
				wrongAnswers++;
				Unanswered = Unanswered -1;
				$("#wrongAnswers").html(wrongAnswers);
				$("#Unanswered").html(Unanswered);
			}

			else {
				Unanswered = Unanswered;
				$("#Unanswered").html(Unanswered);
			}
		});
	});

});

