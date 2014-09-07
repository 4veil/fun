$(document).ready(function() {

    var colour = get_random_color();

    function get_random_color() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }

    $(".random").css('background-color', colour );

    $(".random").click (function() {
        colour = get_random_color();
        $( this ).css('background-color', colour);
    });

    $(".colour-square").click (function() {
        colour = $( this ).css("background-color");
    });

    $(".square").click (function() {
        $( this ).css("background-color", colour);
    });



});
