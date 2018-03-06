const m = Math;
const π = m.PI;
const sin = m.sin;
const cos = m.cos;
const tan = m.tan;
const sqrt = m.sqrt;

function getInput() {  

}

let stdin = process.openStdin();

stdin.addListener("data", function(d) {
    let raw = d.toString().trim();
    let expression = "";
    let f = "";
    for (let b of raw) {
        if (f === b
            && b.charCodeAt(0) > "a".charCodeAt(0) -1
            && b.charCodeAt(0) < "z".charCodeAt(0) -1
        ) {
            expression += "*";
        }
        expression += b;
        f = b;
    }
    let value;
    try { 
        value = eval(expression);
    } catch (error) {
        console.log(error.message);
    }

    console.log(expression,"=",value);
    
});