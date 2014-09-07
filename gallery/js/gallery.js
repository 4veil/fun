$(document).ready( function () {

    $(".picture").click( function() {
        var source = $(this).children().attr('src');
        $(".main-picture").fadeIn("slow");
        setImage(source);
    });

    $(".main-picture").click( function() {
        closeImage();
    });

    function setImage(source) {
        $("#selected-image").attr("src", source);
    }

    function closeImage() {
        $(".main-picture").fadeOut("slow");
    }


});