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
    input = document.getElementById("input");

    if (whichButtonTo == 2) {
        outvalue = "0b" + input.value;
    } else if (whichButtonTo == 8) {
        outvalue = "0o" + input.value;
    } else if (whichButtonTo == 10) {
        outvalue = input.value;
    } else if (whichButtonTo == 16) {
        outvalue = "0x" + input.value;
    } else if (whichButtonTo == 36) {
        outvalue = parseInt(input.value, 36);
    }

    error(outvalue);
    outvalue = +outvalue;
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


const error = (outvalue) => {
    if (isNaN(+outvalue)) {
        answer.innerHTML = "error";
        return;
    }
}