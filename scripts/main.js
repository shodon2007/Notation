let buttons = document.querySelectorAll(".button");
let answer = document.getElementById("answer");
let plans = [2, 8, 10, 16, 32];

let whichButtonTo = 10;
let whichButtonFrom = 2;




const buttonClick = (value, type) => {
    removeClass(type);
    const types = document.getElementById(type + value);

    if (type == "t") {
        whichButtonTo = value;
    } else {
        whichButtonFrom = value;
    }

    types.classList.add("checked");
}






const removeClass = (type) => {
    for (let number of plans) {
        document.getElementById(type + number).classList.remove("checked");
    }
}