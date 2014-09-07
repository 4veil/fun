$(document).ready(function() {

    var words = getWords();
    var currentWord;
    var scrambledWord;
    var gameOver = false;
    var cutDownListOfWords

    var playerPoints = 0;
    var playerLives = 3;

    $('.score').text("Score: " + playerPoints);
    $('.lives').text("Lives: " + playerLives);
    $('.retry').hide();

    setWord( getNum() );

    $('.button').click( function(){
        gameRunning();
    });

    $('.retry p').click( function(){
        restartGame();
    });

    $("#guess").submit(function() {
        gameRunning();
        return false;
    });

    function gameRunning(){
        if (!gameOver) {
            if (checkGuess() == true ){
                console.log("You did it!");
                playerPoints += 10;
                setWord( getNum() );
            } else {
                playerLives--;
                checkLives();

                if (!gameOver) {
                    setWord( getNum() );
                } else {
                    console.log("Game over!");
                    $('#user-word').text("Game over");
                    $('#guess').hide();
                    $('.player-scores').hide();
                    $('.retry').show();
                }
            }
        }

        $('.score').text("Score: " + playerPoints);
        $('.lives').text("Lives: " + playerLives);
    }

    function setWord(x) {
        currentWord = words[x];
        scrambledWord = scrambleWord(currentWord);
        console.log("Original word: " + currentWord + " Mixed word: " + scrambledWord);
        $('#user-word').text(scrambledWord);
        $('.user-guess').val("");
    }

    function checkGuess() {
        if ($('.user-guess').val() == currentWord) {
            return true;
        }
    }

    function checkLives() {
        if (playerLives == 0) {
            gameOver = true;
        }
    }

    function scrambleWord(currentWord) {
        var a = currentWord.split("");
        var len = a.length;

        for(var i = len - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join('');
    }

    function getNum() {
        return Math.floor(Math.random() * (words.length) ) + 1;
    }

    function getWords() {
        var array;

        $.ajax({
            type: 'GET',
            url: 'words.html',
            async: false,
            success: function (data) {
                array = data.split(" ");
            }
        });
        return array
    };

    function restartGame() {
        playerPoints = 0;
        playerLives = 3;
        gameOver = false;

        $('#guess').show();
        $('.player-scores').show();
        $('.retry').hide();

        setWord( getNum() );

        $('.score').text("Score: " + playerPoints);
        $('.lives').text("Lives: " + playerLives);
    }

});