function setup() {
    let liste = [];
    let inpNavn = document.getElementById("navn");
    let divVisListe = document.getElementById("visListe");

    inpNavn.addEventListener("keydown", lagreNyElev);

    function lagreNyElev(event) {
        if (event.keyCode == 13 && inpNavn.value != "") {
            let navn = inpNavn.value;
            liste.push(navn);
            liste.sort();
            let uList = "<ul>";
            for (let n of liste) {
                uList += "<li>" + n + "</li>";
            }
            uList += "</ul>";
            divVisListe.innerHTML = uList;
            console.log(liste);
            inpNavn.value = "";
        
        }
    }
}
