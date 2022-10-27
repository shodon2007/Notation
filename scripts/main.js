let buttons = document.querySelectorAll(".button");

let type2 = document.getElementById('b2');
let type8 = document.getElementById('b8');
let type10 = document.getElementById('b10');
let type16 = document.getElementById('b16');
let type32 = document.getElementById('b32');

let whichButtonTo = 2;
let whichButtonFrom = 10;



const removeClass = () => {
    type2.classList.remove("checked");
    type8.classList.remove("checked");
    type10.classList.remove("checked");
    type16.classList.remove("checked");
    type32.classList.remove("checked");
}

const button = (value, type) => {
    let types = document.getElementById("b" + value);
    removeClass();
    whichButtonTo = value;
    type == "to" ? whichButtonTo == value : whichButtonFrom == value;
    types.classList.add("checked");
    console.log(whichButtonTo, whichButtonFrom);
}