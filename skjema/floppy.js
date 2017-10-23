function setup() {

   
    let fuggel = document.getElementById("bird");
    let divPoeng = document.getElementById("poeng");
    let farge = spiller.farge || "red";

    fuggel.style.boxShadow = "2px 2px 2px"

    setInterval(flytt, 40);
    let fart = 0;
    let top = 255;
    let soylepos = 650;
    const PXMS = 12;

    let poeng = 0;

    let crashed = false;

    let melding = "Du har vunnet";


    /*
    Regner ut hvor mye søylene flytter seg på 60ms:
    900px på 3000ms 
    4 * 9/3 = 4 * 3 = 12px
    */

    addEventListener("keydown", giFart)

    function flytt() {
        fuggel.style.top = top + "px";
 let spiller = { fornavn: "idiot" };
    
    try {
        let spillerData = localStorage.getItem("spiller");
        spiller = JSON.parse(spillerData);
    } catch (error) {
        console.log("uregistrert spiller");
    }

    let divSpiller = document.getElementById("spiller");
    divSpillnerHTML = spiller.fornavn;

er.in
        fuggel.style.transform = "rotate(" + -fart + "deg)";
        top = top - fart;
        fart = fart - 1;
        if (top > 510) {
            fart = fart + -1.7 * fart;
        }
        if (top < 0) {
            fart = -3;
            top = 0;
        }
        soylepos = soylepos - PXMS;
        if (soylepos < -250) {
            soylepos = 650;
            poeng += 1;
            crashed = false;

        }
        if (!crashed) {
            //oppdaterer posisjon til søyler
            if (soylepos < 255 + 120 && soylepos > 255 - 80) {
                if (top < 200 || top > 350) {
                    fuggel.style.top = "510px";
                    top = 510;
                    poeng -= 2;
                    crashed = true;
                }
            }
        }
        divPoeng.innerHTML = String(poeng);
        if (poeng > 20) {
            divPoeng.innerHTML = melding;
        }
    }

    function giFart() {
        fart = fart + 20;
    }
}