
const result = document.getElementById('result');
let total;

document.addEventListener('load', init());


function init() {
    sum(12, 5);
    if (check()) {
        print()
    } else {
        result.innerText = "il risultato è maggiore di 30";
        return;
    }
}

function sum(number1, number2) {
    let mySum = number1 + number2;
    total = mySum; 
}
// console.log(sum(10, 15));

function check() {
    if (total <= 30) {
        return true
    } else {
        return false
    }
}
// console.log(check());

function print () {
    result.innerText += total; 
    return;
}
