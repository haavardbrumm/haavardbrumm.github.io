// @ts-check

function setup() {
    let hoteller = {};
    let prisliste = {
        roma: {
            Hilton: [2000, 2500],
            Pizza: [2200, 2400],
            Pasta: [1900, 2600],
            Thon: [1000, 1500],
            GucciGang: [420, 35317],
        }
    }
    // enkeltrom = prisliste["roma"]["GucciGang"][0]
    // dobbeltrom = prisliste["roma"]["GucciGang"][1]

    let pris = 0;

    hoteller.newyork = "Radisson, Scandic, Maritim, Thon, Yaya Skrr".split(",");
    hoteller.roma = "Hilton, Pizza, Pasta, Thon, GucciGang".split(",");

    let divByInfo = document.getElementById("byinfo");
    let velgBy = document.getElementById("byer");

    velgBy.addEventListener("change", valgtBy);

    function valgtBy(e) {
        // @ts-ignore
        let by = velgBy.value;
        if (hoteller[by]) {
            let byHotell = hoteller[by];
            let velgHotell = document.createElement('select');
            let s = "";
            for (let hotell of byHotell) {
                s += `<option>${hotell}</option>`
            }
        velgHotell.innerHTML = s;
        divByInfo.innerHTML = "";
        divByInfo.appendChild(velgHotell);
        }
    }
}
