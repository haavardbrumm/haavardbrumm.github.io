// @ts-check

function setup() {
    let divMain = document.querySelector("#main");
        //** ELLER GETELEMENTBYID, HUSK # HVIS QUERYSELECTOR */
    let inpForbruk = document.getElementById("forbruk");
    let inpTank = document.getElementById("tank");
    let btnBeregn = document.getElementById("beregn");
    let spanRekkevidde = document.getElementById("rekkevidde");
    btnBeregn.addEventListener("click", beregnRekkevidde);

    function beregnRekkevidde(e) {
        let forbruk = Number(inpForbruk.value);
        let tank = inpTank.valueAsNumber;
        let rekkevidde = tank / forbruk;
        spanRekkevidde.innerHTML = String(rekkevidde.toFixed(2));
    }

}