const myFn = () => {
    let value = document.getElementById('inputValue').value;
    value = Number(value);
    let myArray = [];
    let NewArray = [];
    let result = "";
    for (let i = 0; value > 0; i++) {
        let remaider = value % 2;
        myArray[i] = remaider;
        value = value / 2;
        value = Math.trunc(value);
    }
    let valueLength = myArray.length;
    for (let i = 0; i < myArray.length; i++) {
        valueLength -= 1;
        NewArray[i] = myArray[valueLength];
        result += NewArray[i];
    }
    document.getElementById('result').innerHTML = result;
    if (result == '') {
        document.getElementById('result').innerHTML = 0;
    }
}