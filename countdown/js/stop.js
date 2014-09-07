$(document).ready( function() {

	var timer = false;
	var minutes;
	var seconds;
	var hours;
	var totalSeconds;

	$("#button-start").click( function() {

		
		totalSeconds = $(".user-time").val();

		if (parseInt($(".user-time").val(), 10)) {
			timer = true;
			totalSeconds = $(".user-time").val();
			turnSecondsIntoMinutes(totalSeconds);
			countDown(minutes, seconds, totalSeconds);
		} else {
			alert("Please enter a number!");
		}


		
	});

	$("#button-stop").click( function() {

		timer = false;
		minutes = 0;
		minutes = 0;
		hours = 0;

		splitNumber(minutes, "minutes");
		splitNumber(minutes, "seconds");
		splitNumber(hours, "hours");
		
	});

	function turnSecondsIntoMinutes(totalSeconds) {

		hours = Math.floor(totalSeconds / (60 * 60));
		var divisor_for_min = totalSeconds % (60 * 60);
		minutes = Math.floor(divisor_for_min / 60);

		var divisor_for_secs = divisor_for_min % 60;
		seconds = Math.ceil(divisor_for_secs);

		console.log("Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
	}
	
	function getTens(time, whichNumber, wheretoPlace) {
		var tens = Math.floor(time/10);
		makeNumber(tens, whichNumber, wheretoPlace);
	}

	function getUnits(time, whichNumber, wheretoPlace) {
		var units = time % 10;
		makeNumber(units, whichNumber, wheretoPlace);
	}

	function splitNumber(time, wheretoPlace) {
		getTens(time, "tens", wheretoPlace);
		getUnits(time, "units", wheretoPlace);
	}

	function countDown(mins, secs, totalSecs) {
		setTimeout(function () {
			if (timer) {

				if ( totalSecs != 0) {

					splitNumber(mins, "minutes");
					splitNumber(secs, "seconds");
					splitNumber(hours, "hours");

				} else {

					timer = false;
					makeNumber(0, "units", "seconds");
					alert("Countdown over!");
				}

				if (secs == 0) {

					if (mins != 0) {
						mins = mins - 1;
						secs = 60;
					}

				}

				if (mins == 0) {

					if (hours != 0) {
						hours = hours - 1;
						mins = 60;
					}

				}

				secs = secs -1;
				totalSecs = totalSecs - 1;

				countDown(mins, secs, totalSecs);
			}
		}, 1000);
	};

	function makeNumber(numberToMake, whichNumber, wheretoPlace) {
		wheretoPlace = '.' + wheretoPlace;
		whichNumber = '.' + whichNumber
		console.log("Number to make: " + numberToMake + " Where to place: " + wheretoPlace + " which digit: " + whichNumber);
		if (numberToMake == 0) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").show();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").show();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();
		}

		if (numberToMake == 1) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#two").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#three").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#four").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 2) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").show();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").hide();

		}

		if (numberToMake == 3) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 4) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#four").show();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 5) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").show();
			$(wheretoPlace + ' ' + whichNumber).children("#five").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#six").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 6) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").show();
			$(wheretoPlace + ' ' + whichNumber).children("#five").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#six").show();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 7) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#three").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#four").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 8) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").show();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").show();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}

		if (numberToMake == 9) {
			$(wheretoPlace + ' ' + whichNumber).children("#one").show();
			$(wheretoPlace + ' ' + whichNumber).children("#two").show();
			$(wheretoPlace + ' ' + whichNumber).children("#three").show();
			$(wheretoPlace + ' ' + whichNumber).children("#four").show();
			$(wheretoPlace + ' ' + whichNumber).children("#five").show();
			$(wheretoPlace + ' ' + whichNumber).children("#six").hide();
			$(wheretoPlace + ' ' + whichNumber).children("#seven").show();

		}
	}




});