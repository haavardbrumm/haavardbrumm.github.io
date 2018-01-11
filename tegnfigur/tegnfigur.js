function setup() {

    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');

    function firkant() {
        //ctx.fillStyle = ;
        ctx.strokeRect(50, 50, 50, 50);
    }

    function trekant() {
        ctx.beginPath();
        //ctx.fillStyle = ;
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }

    function sirkel() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.arc(100, 375, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function visk() {
        ctx.clearRect(x, y, 20, 20);
    }

    function tegn() {

    }



}