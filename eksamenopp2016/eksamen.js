function setup() {
    let divStpetersburg = document.getElementById("stpetersburg");
    let divStorpeter= document.getElementById("storpeter");
    divStpetersburg.addEventListener("click", visStor);

    function visStor(e) {
        divStorpeter.style.display = "block";
    }
}