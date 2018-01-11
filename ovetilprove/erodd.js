function setup() {
    let a = 2;
    let b = 2;


    function erOdd(a, b) {
        let korrekt = false;

        if (a % 2 == 0 && b % 2 == 0) {
            korrekt = true;
        }
    }
    document.getElementById("main").innerHTML = erOdd();
}

