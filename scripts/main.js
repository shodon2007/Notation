let answer = document.getElementById("answer");
let input = document.getElementById("input");
let plans = [2, 8, 10, 16, 32];

let whichButtonTo = 10;
let whichButtonFrom = 2;




const buttonClick = (value, type) => {
    removeClass(type);
    addClass(type, value);

    if (type == "to") {
        whichButtonTo = value;
    } else {
        whichButtonFrom = value;
    }


    output();
}







const removeClass = (type) => {
    for (let number of plans) {
        document.getElementById(type + number).classList.remove("checked");
    }
}

const addClass = (type, value) => {
    const types = document.getElementById(type + value);
    types.classList.add("checked");
}

const output = () => {
    input = document.getElementById("input");
    console.log(input.value);
}