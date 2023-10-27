console.log(123);
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const elResult = document.getElementById('result');
const elLength = document.getElementById('length');
const elInputLength = document.getElementById('input-length')
const elCheckboxNumber = document.getElementById('checkbox-numbers');
console.log(elCheckboxNumber);

const elCheckboxLetters = document.getElementById('checkbox-letters');
const elCheckboxSymbols = document.getElementById('checkbox-symbols');
const elGenerate = document.getElementById('btn-generate');

elInputLength.addEventListener('change', function () {
    let length = elInputLength.value;
    // console.log(length);
    elLength.innerText = length;
})
elGenerate.addEventListener('click', function () {
    let length = elInputLength.value;
    console.log(length);
    let password = "";
    if (elCheckboxNumber.checked) {
        for (let i = 0; i < length; i++) {
            randomIdx = Math.floor(Math.random() * NUMBERS.length)
            password += NUMBERS[randomIdx];
        }
    }
    if (elCheckboxLetters.checked) {
        for (let i = 0; i < length; i++) {
            randomIdx = Math.floor(Math.random() * LETTERS.length)
            password += LETTERS[randomIdx];
        }
    }
    if (elCheckboxSymbols.checked) {
        for (let i = 0; i < length; i++) {
            randomIdx = Math.floor(Math.random() * SYMBOLS.length)
            password += SYMBOLS[randomIdx];
        }
    }
    elResult.innerText = password;
})
