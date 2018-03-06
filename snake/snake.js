function setup() {
    let snake = document.getElementById("snake");
    let eple = document.getElementById("eple");
    let main = document.getElementById("main");
    let poengDiv = document.getElementById("poeng");
    let gameover = document.getElementById("gameover");

    document.onkeydown = checkKey;

    let styleS = snake.style;
    let poeng = 1;
    let retning = 0;
    let vx = 22;
    let vy = 22;

    let retningChange = 0;

    let last = [];
    let haleDiv = [];

    let alive = 1;

    let length = 3;

    snakeP = {
        x: Math.floor(Math.random() * 32) * 22,
        y: Math.floor(Math.random() * 23) * 22
    }

    snake.style.top = snakeP.y + "px";
    snake.style.left = snakeP.x + "px";

    epleP = {
        x: 0,
        y: 0
    }


    let gameLoop;
    let gameStart = false;


    function checkKey(e) {
        if (!gameStart) {
            gameLoop = setInterval(run, 75);
        }
        gameStart = true;

        if (e.keyCode === 38 && retning !== 2 && retningChange === 0) {
            // up arrow
            retning = 1;
            retningChange = 1;
        }
        else if (e.keyCode === 40 && retning !== 1 && retningChange === 0) {
            // down arrow
            retning = 2;
            retningChange = 1;
        }
        else if (e.keyCode === 37 && retning !== 4 && retningChange === 0) {
            // left arrow
            retning = 3;
            retningChange = 1;
        }
        else if (e.keyCode === 39 && retning !== 3 && retningChange === 0) {
            // right arrow
            retning = 4;
            retningChange = 1;
        }

        if (e.keyCode === 32) {
            // up arrow
            siteReload();
        }

    }

    function death() {
        for (let i = 1; i < last.length; i++) {
            if (snakeP.x === last[i][0] && snakeP.y === last[i][1]) {
                alive = 0;
                console.log(last, i);
            }
        }
    }

    function run() {
        death();
        retningChange = 0;
        if (alive === 0) {
            gameover.style.opacity = 1;
            gameover.innerHTML = "<h1>Game Over</h1><h4>Prøv på nytt</h4>Du fikk: " + poeng + " poeng!";
            clearInterval(gameLoop);
            return;
        }
        if (retning === 1) {
            // up
            snakeP.y -= vy;
            styleS.top = snakeP.y + "px";
        }
        else if (retning === 2) {
            // down
            snakeP.y += vy;
            styleS.top = snakeP.y + "px";
        }
        else if (retning === 3) {
            // left
            snakeP.x -= vx;
            styleS.left = snakeP.x + "px";
        }
        else if (retning === 4) {
            // right
            snakeP.x += vx;
            styleS.left = snakeP.x + "px";
        }

        if (snakeP.x < 0) {
            snakeP.x = 682;
        }

        else if (snakeP.x > 682) {
            snakeP.x = 0;
        }

        else if (snakeP.y < 0) {
            snakeP.y = 484;
        }

        else if (snakeP.y > 484) {
            snakeP.y = 0;
        }

        last.unshift([snakeP.x, snakeP.y]);

        if (last.length > length) {
            last.pop();
        }
        if (haleDiv.length < length) {
            let newHale = document.createElement("div");
            newHale.className = "hale";
            haleDiv.push(newHale);
            main.appendChild(newHale);
        }

        for (let i = 0; i < haleDiv.length; i++) {
            haleDiv[i].style.left = last[i][0] + "px";
            haleDiv[i].style.top = last[i][1] + "px";
        }

        eat();
    }

    function eat() {
        if (snakeP.x === epleP.x && snakeP.y === epleP.y) {
            respawn();
            length += 2;
            poeng += 1;
        }
    }
    respawn();

    function respawn() {
        epleP.x = Math.floor(Math.random() * 32) * 22;
        epleP.y = Math.floor(Math.random() * 23) * 22;

        for (let i = 0; i < last.length; i++) {
            if (epleP.x !== last[i][0] && epleP.y !== last[i][1]) {
                poengDiv.innerHTML = "Poeng: " + poeng;
            }
            else {
                //lett måte å spawne eple der slangen ikke er på, men når slangen blir veldig lang vil
                //det oppstå problemer med å respawne eple
                return respawn();
            }
        }
        eple.style.left = epleP.x + "px";
        eple.style.top = epleP.y + "px";
        console.log(epleP.x / 22, epleP.y / 22)

    }

}

function siteReload() {
    location.reload();
}

//bruker array og løkker for å gå gjennom array. bruker også object på snakeP(os), epleP(os)
//bruker eventlistener (sette retning på slangen)
//funksjoner styrt av hendelser (eat funk, respawn funk, death funk,..) - if setninger

    //har en liten bug når jeg skal skifte retning på snake flere (2) ganger fort (snake går inni seg selv,
    //og det er gameover). skal prøve å fikse det ved å sette en variabel retningChange = true
    //hvis retningChange = true, kan man ikke skifte retning flere ganger den loopen
//FIXED

//har lyst til å legge til flere baner man kan velge mellom (class Wall), leaderboard som lagres, 
//må gjøre slik at eple ikke kan spawne under slangen



