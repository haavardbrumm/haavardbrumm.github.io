function setup() {
    let inpAntkm = document.getElementById("antkm");
    let inpAntnaut = document.getElementById("antnaut")
    
    let btnK2n = document.getElementById("k2n");
    btnK2n.addEventListener("click", k2n);

    let btnN2k = document.getElementById("n2k");
    btnN2k.addEventListener("click", n2k);

    function k2n(event) {
        let antkm = inpAntkm.valueAsNumber;

        let km2naut = antkm / 1.852;
        inpAntnaut.value = String(km2naut.toFixed(2));
    }
    function n2k(event) {
        let antnaut = inpAntnaut.valueAsNumber;

        let naut2km = antnaut * 1.852;
        inpAntkm.value = String(naut2km.toFixed(2));
    }

}