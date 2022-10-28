let buttons = document.querySelectorAll(".button");
let answer = document.getElementById("answer");
let plans = [2, 8, 10, 16, 32];

let whichButtonTo = 10;
let whichButtonFrom = 2;


const removeClass = (type) => {
    type = type == "to" ? "b" : "f";

    for (let number of plans) {
        document.getElementById(type + number).classList.remove("checked");
    }
}

const toButton = (value) => {
    let types = document.getElementById("b" + value);

    removeClass("to");
    whichButtonTo = value;
    types.classList.add("checked");
}

const FromButton = (value) => {
    removeClass("from");

    let types = document.getElementById("f" + value);
    whichButtonFrom = value;
    types.classList.add("checked");
}

const change = () => {

}