$(document).ready(function() {
    var rand;
    var number;

    $('body').on('click', function (e) {
        createSquare(e);
    });

    function createSquare(e) {

        var rand = randomInt(0, 7);

        randomHeight();

            $(".canvas").append('<div class="circle' + rand + '  animate"></div>');
            $(".circle" + rand).css( {top: e.pageY, left: e.pageX, backgroundColor: randomColor, height: number, width: number });
            $(".circle" + rand).css("border-radius", "50%");
    }

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    function randomHeight() {
        number = 1 + Math.floor(Math.random() * 90);
    };

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

});

