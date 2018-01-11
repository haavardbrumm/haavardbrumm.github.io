function niceName(s) {
    let biter = s.split(" ");
    let nice = [];
    for (let n of biter) {
        let m = n.charAt(0).toUpperCase() + n.substr(1).toLowerCase();
        nice.push(m);
    }
    return nice.join(" ");
}