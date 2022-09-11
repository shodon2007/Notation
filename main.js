const myFn = () => {
    let value = document.getElementById('inputValue').value;
    value = Number(value);
    let myArray = [];
    let NewArray = [];
    let result = "";
    for (let i = 0; value > 0; i++) {
        let remaider = value % 8;
        myArray[i] = remaider;
        value = value / 8;
        value = Math.trunc(value);
    }
    myArray.reverse();
    result = myArray.join('');
    console.log(result)
    document.getElementById('result').innerHTML = result;
    if (result == '') {
        document.getElementById('result').innerHTML = 0;
    }
}