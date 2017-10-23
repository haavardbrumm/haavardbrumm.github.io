function setup() {
    let desimal = document.getElementById("desimal");
    let binaer = document.getElementById("binaer");
    
    let btnD2b = document.getElementById("d2b");
    btnD2b.addEventListener("keyup", d2b);

    let btnB2d = document.getElementById("b2d");
    btnB2d.addEventListener("keyup", b2d);

    function d2b(event) {
        let desimalCalc = desimal.valueAsNumber;

        let desimal2binaer = desimal.toString(2);
        binaer.value = String(desimal2binaer);
    }
    function b2d(event) {
        let binaerCalc = binaer.valueAsNumber;

        let binaer2desimal = parseInt(binary, 2);
        desimal.value = String(binaer2desimal);
    }

}