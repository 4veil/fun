$(document).ready(function() {

    function get_random_color() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }


    $( ".square-tile" ).mouseenter(function() {
        $( this ).css('background-color', get_random_color() );
        $( this ).css('box-shadow', "0 0 8px white");
        $( this ).css('z-index', "100000");
    });

    $( ".square-tile" ).mouseleave(function() {
        $( this ).css('box-shadow', "none");
        $( this ).css('z-index', "1");
    });

});

