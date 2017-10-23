function setup() {
    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');

    let vx = 2;
    let xpos = 0;

    /**
     * Tegner figur
     * @param {context} ctx - tegneområdet
     * @param {number} dx - avstand fra v.kant
     */
    function figur(ctx, dx) {
        ctx.beginPath();
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.arc(dx + 100, 375, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function tegn() {
        ctx.clearRect(0, 0, 500, 500);
        figur(ctx, xpos);
        xpos += vx;
        if (xpos > 375) {
            vx = -2;
        }

    }

    setInterval(tegn, 40);

}