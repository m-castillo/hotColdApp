$(document).ready(function(){
	
	/* This document has lots of comments to guide whoever is interested. 
	The reason? I was looking at codes and sometimes I had no idea why the 
	code was there or where it was heading. Hopefully this one helps some people. --- */

	/* --- Declare variables globally. 
	They will be accesible anywhere. Don't give them values, just give them 
	names and that will be enough --- */

	var computerNumber;
	var userNumber;
	var closeNumber;
	var newGame;
	var count;

	/* --- This function resets the game --- */

	function newGame() {
		computerNumber = Math.floor(Math.random() * 101); /* --- Get a random number up to 100 --- */
		console.log(computerNumber); /* --- Random number will be displayed in console --- */
		$("#feedback").text("Make your Guess");
		$("#guessList").children().remove(); /* --- Every number entered will be a li children under ul guessList. This will remove the children (thus, not showing any numbers) --- */
		$("#count").text(0); /* --- count shows zero --- */
		count = 1; /* --- reset count variable --- */
	}

	/* --- Game --- */

	$("#userGuess").keypress(function (e) { /* --- Instead of click, Enter key is used. Less annoying for me. But it click needed, change this line to $("#userGuess").click(function () { code here }); --- */ 
	    if (e.keyCode == 13) { /* --- Every key has a number. The number for the "Enter" key is 13 --- */
	        userNumber = $("#userGuess").val(); /* --- The number entered will become a variable every time the user hits Enter --- */

	        if (isNaN(userNumber)) { /* --- Program asks the userNumber: are you a number? If you are not, then the following code will happen --- */
	        	console.log("User has not entered a number."); /* --- Console will log that something else than a number has been entered --- */
	        	alert("Enter a number"); /* --- Pop up alert to the user --- */
	        	event.preventDefault(); /* --- Prevents program to run another random number --- */
	        	$("#userGuess").val(""); /* --- The input field will return a blank value and ready to use without clicking on it --- */
	        }

	        else { /* --- If you are a number, then do this --- */
		        console.log("You entered " + userNumber);
		        event.preventDefault();


		        closeNumber = Math.abs(computerNumber - userNumber); /* --- Math.abs gives you an absolute number... that means there are no negative number. The purpose of this is to find out if the user is closer or further than the random number --- */

		        if (userNumber == computerNumber) { /* --- If both numbers are the same, then bingo! --- */
		            $("#feedback").text("You got it!");
		        } else if (closeNumber >= 25) { /* --- If the number entered is equal or higher than 25, then it will display "Cold!" ---- */
		            $("#feedback").text("Cold!");
		        } else if (closeNumber <= 24 && closeNumber >= 15 ) { /* --- Numbered entered between 24 and 15 --- */
		            $("#feedback").text("Warm!");
		        } else if (closeNumber <= 14 && closeNumber >= 6) {
		            $("#feedback").text("Hot!");
		        } else if (closeNumber <= 5) {
		            $("#feedback").text("Very hot");
		        }

		        $("#userGuess").val(""); 
		        $("#count").text(count++); /* --- It adds every accepted try one by one (++ adds one) --- */
		        $("#guessList").prepend("<li>" + userNumber + "</li>"); /* --- Every number is going to be placed first in the list. Append would place them last, but I want users to see the last number they enter right away --- */
	    	}
	    }
	});

	/* --- New Game when clicking "New Game" --- */

	$(".new").click(function () { /* --- Every time the user clicks "New Game", newGame function will run --- */
		newGame();
	});

	newGame(); /* --- A new game starts. Without this lone function, the game will not run. I decided to leave this function at the end, so someone could see the flow of the code --- */


	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
	});


});


