let answer = document.getElementById("answer");
let input = document.getElementById("input");
let plans = [2, 8, 10, 16, 36];
let outvalue;

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



const output = () => {
    outvalue = parseInt(input.value, whichButtonTo);
    outvalue = outvalue.toString(whichButtonFrom);
    
    answer.innerHTML = outvalue;
}



const removeClass = (type) => {
    plans.forEach((item) => {
        document.getElementById(type + item).classList.remove("checked");
    })
}

const addClass = (type, value) => {
    const types = document.getElementById(type + value);
    types.classList.add("checked");
}