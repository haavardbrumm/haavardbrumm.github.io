function setup() {

    let activeDate = { y:2018, m:2, d:8 };


    let prvYear = document.getElementById("prev_year");
    let prvMonth = document.getElementById("prev_month");
    let nxtYear = document.getElementById("next_year");
    let nxtMonth = document.getElementById("next_month");


    
    let ukedager = document.getElementById("ukedager");
    let datoer = document.getElementById("datoer");
    let tinyed = document.getElementById("tinyed");

    prvYear.addEventListener("click", prevYear);  
    prvMonth.addEventListener("click", prevMonth);  
    nxtYear.addEventListener("click", nextYear);
    nxtMonth.addEventListener("click", nextMonth);  
 
    løkke som lager navn på ukedager
    løkke som legger inn 7*6=42 DIVer for datoer
    for (let navn of ukeNavn) {

    } 
 
    function visKalender(y,m,d) {
        let mndNavn = "Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(","):
        let divYear = document.getElementById("year");
        let divMnd = document.getElementById("month");
        divYear.innerHTML = String(y);
        divMnd.innerHTML = mndNavn[m];
    }
 
    // kobla til eventlisteners
    function nextYear(e) {}
    function prevYear(e) {}
    function nextMonth(e) {}
    function prevMonth(e) {}

    
 

}

