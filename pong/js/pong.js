$(document).ready( function() {

var canvas = document.getElementById('myCanvas');
var balls = [];
var x2, xy;

init();

    function init()
    {
      ctx = myCanvas.getContext('2d');
      setInterval(draw,10);
    }

    function draw() {

        ctx.clearRect(0 ,0, 600, 600);

        for(var i = 0; i < balls.length; i++) {
            balls[i].move();
        }
    }


    function drawCircle (x, y) {
        balls.push(new Ball(x, y, Math.random() * 5, Math.random() * 5, randomColor()));
    }


    $('#myCanvas').click( function(e) {
        var x = e.clientX - canvas.offsetLeft;
        var y = e.clientY - canvas.offsetTop;

        drawCircle(x, y);
    });

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };


    function Ball(x, y, x2, y2, color) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2= y2;

        this.color = color;

        this.move = function() {

            if (this.x > 600 || this.x < 0){
                this.x2 =- this.x2;
            }

            if (this.y > 600 || this.y < 0){
                this.y2 =- this.y2;
            }

            ctx.beginPath();
            ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
            ctx.fill();

            this.x += this.x2;
            this.y += this.y2;
        }

    }






});