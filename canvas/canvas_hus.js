function setup() {
    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.fillRect(100, 200, 300, 200);

    ctx.clearRect(120, 275, 50, 50);
    ctx.fillStyle = 'rgba(255, 250, 0, 0.5)';
    ctx.fillRect(120, 275, 50, 50);

    ctx.clearRect(220, 275, 50, 50);
    ctx.fillStyle = 'rgba(255, 250, 0, 0.5)';
    ctx.fillRect(220, 275, 50, 50);

    ctx.fillStyle = 'rgb(139, 69, 19)';
    ctx.fillRect(310, 300, 60, 100);
    
    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.fillRect(320, 350, 10, 10);

    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.translate(250, 250); // translate to rectangle center 
    // x = x + 0.5 * width
    // y = y + 0.5 * height
    ctx.rotate((Math.PI / 180) * 90); // rotate
    ctx.translate(-250, -250); // translate back
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(200, 420);
    ctx.lineTo(200, 80);
    ctx.fill();    

    
}