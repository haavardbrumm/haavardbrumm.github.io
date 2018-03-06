function setup() {
 
    let divText = document.getElementById("text");
    let divAlt = document.getElementById("alt");
    let divKontroll = document.getElementById("kontroll");

    let spraak = [ ];

    let amerikansk = [ ];
    //h er er det enkelt å legge til flere språk senere.

    spraak.push(amerikansk);
    // legger til spørsmål til amerikansk
    
    amerikansk.push("Hva er potet på amerikansk?: Potet, +Potato, Pomefrit");
    amerikansk.push("Hva er ost på amerikansk?: Cheeze, +Cheese, Chiz");
    
    let index = 0;
    let valgtSpraak = spraak[0];
    // dette er en forenkla løsning
    // senere bør dette endres slik at bruker kan velge språk selv

    function visNeste() {
        visSporsmaal(index);
    }

    function visSporsmaal(index) {
        let sprsml = valgtSpraak[index];
        let [ledetekst, resten] = sprsml.split(":");
        let alternativer = resten.split(",");
        divText.innerHTML = ledetekst;
      
        let liste = '';
        for (let valg of alternativer) {
            liste += '<br><input type="checkbox">' + valg;
        }

        /*
        let liste = '';
        alternativer.forEach(valg => {
            liste += '<br><input type="checkbox>' + valg;
        });
        */

        divAlt.innerHTML = liste;
    }
    visNeste();
    
}