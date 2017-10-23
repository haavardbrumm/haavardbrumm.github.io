function setup() {
    /*
    oslo 0
    bergen 1
    trondheim 2
    haugesund 3
    */
    let avstand = [
        [0, 463, 493, 446],
        [463, 0, 627, 138],
        [493, 627, 0, 746],
        [446, 138, 746 ,0]
    ];

    document.getElementById("calc").addEventListener("click", go);

    let fra = document.getElementById("fra");
    let til = document.getElementById("til");
    let output = document.getElementById("output");

    function go() {
        let beregnet = avstand[fra.value][til.value];
        output.innerHTML = beregnet;
        
    }
}