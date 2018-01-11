//@ts-check

function setup() {
    let divSanta = document.querySelector("#julenisse")
    let divSky = document.querySelector("#stjernenatt")
    divSanta.addEventListener("click", bombsAway)

    function bombsAway(e) {
        let p = document.createElement('div');
        p.className = "pakke";
        divSky.appendChild(p);
        p.animate(
            [
              {top : "100px"},
              {top : "90vh"},

            ], {fill:"forwards", duration: 3000;});
    }
}