function setup() {
    let inpMs = document.getElementById("input");
    let antWatt = document.getElementById("antwatt");
    let vindStyrke = document.getElementById("vind");
    let vindmolle = document.getElementById("vindmollepropell");

    let btnMs = document.getElementById("button");
    btnMs.addEventListener("click", beregn)

    let btnStille = document.getElementById("stille");
    btnStille.addEventListener("click", stille);

    let btnBris = document.getElementById("bris");
    btnBris.addEventListener("click", bris);

    let btnKuling = document.getElementById("kuling");
    btnKuling.addEventListener("click", kuling);

    function beregn(event) {
        let ms = inpMs.valueAsNumber;

        if (ms < 2.51) {
            antWatt.value = 0;
        }
        else if (ms > 2.5 && ms < 3.31) {
            antWatt.value = 2;
        }
        else if (ms > 3.3 && ms < 5.41) {
            antWatt.value = 10;
        }
        else if (ms > 5.4 && ms < 7.91) {
            antWatt.value = 60;
        }
        else if (ms > 7.9 && ms < 10.71) {
            antWatt.value = 150;
        }
        else if (ms > 10.7 && ms < 13.81) {
            antWatt.value = 400;
        }
        else if (ms > 13.8 && ms < 15.01) {
            antWatt.value = 500;
        }
        else if (ms > 15) {
            antWatt.value = 0;
        }

    }

    function stille(event) {
        vindmolle.style.animation = "turn 32s linear infinite";
    }

    function bris(event) {
        vindmolle.style.animation = "turn 6s linear infinite";
    }

    function kuling(event) {
        vindmolle.style.animation = "turn 1s linear infinite";
    }
}

//Stille 0-0.2 0
//Flau vind 0.3–1.5 0
//Svak vind 1.6–3.3 2
//Lett bris 3.4–5.4 10
//Laber bris 5.5–7.9 60
//Frisk bris 8–10.7 150
//Liten kuling 10.8–13.8 400
//Stiv kuling 13.9–17.1 500
//Sterk kuling 17.2–20.7 0
//Liten storm 20.8–24.4 0
//Full storm 24.5–28.4 0
//Sterk storm 28.5–32.6 0
//Orkan 32.7- 0