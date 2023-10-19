const elNumberOne = document.getElementById('number-one');
const elNumberTwo = document.getElementById('number-two');
const elBtnSum = document.getElementById('btn-sum');
const elBtnSubtract = document.getElementById('btn-subtract');
const elBtnMultiply = document.getElementById('btn-multiply');
const elBtnDivide = document.getElementById('btn-divide');
const elResult = document.getElementById('result');

function calculator(operator = '') {
    const numberOne = parseInt(elNumberOne.value);
    const numberTwo = parseInt(elNumberTwo.value);

    if (!numberOne || !numberTwo) {
        alert('Vui lòng nhập đủ 2 số');
    }
    
    let result;
    switch (operator) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
    }
    elResult.innerText = "Result: " + result;
}

elBtnSum.addEventListener('click', function () {
    calculator('+');
});
elBtnSubtract.addEventListener('click', function () {
    calculator('-');
});
elBtnMultiply.addEventListener('click', function () {
    calculator('*');
});
elBtnDivide.addEventListener('click', function () {
    calculator('/');
});
