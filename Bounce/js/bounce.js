$( document ).ready(function() {

    var points = 0;
    var level = 1;

    var messages = [    "Well done!",
                        "Excellent clickin'!",
                        "That was Awesome!",
                        "You are doing very well",
                        "BAM!",
                        "You did well"]

    $('#curLevel').text(level);

    function addPoints() {

        points += 1;
        $("#points").text("You have " + points + " points");

        if ( points % 10 == 0 ) {
            increaseLevel();
            displayMessage();
        }

    };

    function increaseLevel() {
        level +=1;
        speedUpAnimation();
        $('#curLevel').text(level);

    };

    function displayMessage() {
        var rand = Math.floor(Math.random() * 5);
        var message = messages[rand];

        $('#winnerMessage').text(message);
        $('#levelMessage').text('Level ' + level);

        $('.message').show();
        $('.ball-wrapper').hide();

        setTimeout(function() {
            $('.message').hide();
            $('.ball-wrapper').show();
         }, 3000);
    };

    function speedUpAnimation() {
        var speed = $('.ball').css('animation-duration');
        var newSpeed = (speed.split('s'))[0] - 1;
        $('.ball').css('animation-duration', newSpeed + 's' );
    };

    $('.ball').click( function () {
        addPoints();
    });
});
