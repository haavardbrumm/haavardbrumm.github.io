function setup() {
    let rex = document.getElementById("trex");

    function jump() {
        
    }

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode === "38") {
            jump();
            // up arrow
        }

        else if (e.keyCode === "40") {
            duck();
            // down arrow
        }

    }

}