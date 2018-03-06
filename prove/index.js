//@ts-check

class Ting {

    constructor(navn, masse, volum) {
        this.navn = navn;
        this.masse = masse;
        this.volum = volum;
    }

    // beregner tettheten til denne tingen
    tetthet() {
      return this.masse / this.volum;
    }
}

class SalgbarTing extends Ting {
    
    constructor(navn, masse, volum, kilopris) {
        // må lage den vanlige tingen først
        super(navn, masse, volum);
        this.kilopris = kilopris;
        this.solgt = false;  // vi har ikke solgt den ennå
    }
 
    // hva koster denne tingen
    pris() {
       return this.masse * this.kilopris;
    }

    // selg tingen
    selg() {
       this.solgt = true;
    }
}



function setup() {
        // nå kan vi lage instanser av klassene
    // husk at klassedefinsjonene bare er en oppskrift
    // vi må lage forekomster (variable) av klassen

    let a = new Ting("Gråstein", 2.3, 0.9);
    let b = new SalgbarTing("Sølvklump", 7, 1.1, 1450)

    let register = [ ];

    let btnRegister = document.getElementById("button");
    btnRegister.addEventListener("click", lagre);

    let inpNavn = document.getElementById("navn");
    let inpVolum = document.getElementById("volum");
    let inpPris = document.getElementById("pris");
    let inpMasse = document.getElementById("masse");

    function lagre(e) {
        let navn = inpNavn.value;
        let volum = inpVolum.value;
        let masse = inpMasse.value;
        let pris = inpPris.value;
        if (pris === undefined || pris === 0) {
            let t = new Ting(navn,masse,volum);
            register.push(t);

        }
        else {
            let t = new SalgbarTing(navn,masse,volum,pris);
            register.push(t);

        }
    }

    let sum = 0;
    for(let i=0; i < register.length; i++) {
    let e = register[i];
    if (e.constructor.name === "SalgbarTing" && e.solgt === false) {
        e.selg();
        sum += e.masse * e.kilopris;
        }
    }

}
