$(document).ready( function () {

    createShapes();

    $('.shape').draggable({
        containment: '.wrapper',
        stack: '.shape',
        snap: true,
        snapMode: 'outer',
        snapTolerance: 13,
    });

    function createShapes(){
        var shapes = ["square", "rectangle", "triangle-up", "circle", "triangle-down",
        "triangle-left", "triangle-right", "triangle-topleft", "triangle-topright",
        "triangle-bottomleft", "triangle-bottomright", "parallelogram" ];

        for ( var i = 0; i < shapes.length; i++ ) {
            var shape = shapes[i];
            addShape(shape);
        }
    }

    function addShape(shape) {
        $('.wrapper-block-select').append('<div class="shape" id="' + shape + '"></div>');

        if (shape == 'square' || shape == 'rectangle' || shape == 'circle' || shape == 'parallelogram') {
            $('#' + shape).css("background-color", "#" + get_random_color());
        }

    }

    function get_random_color() {
        return '#' + Math.random().toString(16).slice(2, 8);
    }

});