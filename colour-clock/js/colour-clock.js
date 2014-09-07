

$(document).ready(function() {

    var colour;

    function formatTime(i) {
        if (i  < 10) {
            i = '0' + i;
        }
        return i;
    }

    function formatColour(i) {
        if (i.length  < 2) {
            i = '0' + i;
        }
        return i;
    }

    function timeToColour(x, y, z) {

        red = Math.round(255 * (x / 23)).toString(16).toUpperCase();
        green = Math.round(255 * (y / 59)).toString(16).toUpperCase();
        blue = Math.round(255 * (z / 59)).toString(16).toUpperCase();

        var hc = formatColour(red);
        var mc = formatColour(green);
        var sc = formatColour(blue);

        colour =  '#' + hc + mc + sc ;

        return colour.toUpperCase();
    }

    function updateTime() {
        //Get the current date
        var d = new Date();

        var s = formatTime(d.getSeconds());
        var m = formatTime(d.getMinutes());
        var h = formatTime(d.getHours());

        var curr_time = h + ':' + m + ':' + s;

        $('body').css("background-color", timeToColour(h,m,s));

        $('.current-time').text(curr_time);
        $('.colour-time').text(colour);

    }

    updateTime();
    setInterval(updateTime, 1000);

});