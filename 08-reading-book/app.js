const elIncrease = document.getElementById('increase');
const elDecrease = document.getElementById('decrease');
const elBackgroundColor = document.getElementById('background-color');
const elLineheight = document.getElementById('line-height');
const eltextAlign = document.getElementById('text-align');
const elContent = document.getElementById('content');
const style = window.getComputedStyle(elContent);




elIncrease.addEventListener('click', function () {
    counterFontsize('+');
})
elDecrease.addEventListener('click', function () {
    counterFontsize('-');
})
elBackgroundColor.addEventListener('change', function () {
    let backgroundColorInput = elBackgroundColor.value;
    console.log(backgroundColorInput);
    elContent.style.backgroundColor = backgroundColorInput;
})
elLineheight.addEventListener('change', function(){
    let lineheightInput = elLineheight.value;
    elContent.style.lineHeight = lineheightInput;
})
eltextAlign.addEventListener('change', function(){
    let textAlignInput = eltextAlign.value;
    elContent.style.textAlign = textAlignInput;
})


function counterFontsize(operator = '') {
    let style = window.getComputedStyle(elContent);
    let number = parseInt(style.fontSize);
    let numberFontsize;
    switch (operator) {
        case '+':
            numberFontsize = number + 1;
            break;
        case '-':
            numberFontsize = number - 1;
            break;
    }
    elContent.style.fontSize = `${numberFontsize}px`;

}

