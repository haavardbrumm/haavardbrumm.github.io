function setup() {
    let divFig1 = document.querySelector("#fig1");
    let divBoks = document.querySelector("#boks");

    let moveFrames = [
    {left: "0vw" },
    {left: "80vw" }
    ];

    let moveSettings = {
        duration: 2000,
        iterations: 1,
        fill: "forwards"
    }

    let move = divFig1.animate(moveFrames, moveSettings);

    let stepFrames = [
        { backgroundPositionX: "0px", offset:0},
        { backgroundPositionX: "-894px", offest:1}
        ];
    
    let stepSettings = {
        duration: 800,
        iterations: Infinity,
        easing: "steps(8)"
        }
    let step = divFig1.animate(stepFrames, stepSettings);

    move.onfinish = ferdigMove;

    function ferdigMove(e) {
        step.cancel();
        divFig1.style.backgroundPositionY = "calc( -112px * 8 - 12px";
        stepSettings.iterations = 1;
        let bend = divFig1.animate(stepFrames, stepSettings);
        bend.play();
    }
}