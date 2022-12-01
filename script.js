let span = document.getElementsByTagName('span');
let nullBtn = document.getElementById('0');
let one = document.getElementById('1');



let acBtn = document.getElementById('ac');
let plusMinus = document.getElementById('plus_minus');
let procent = document.getElementById('procent');
let div = document.getElementById('div');
let mult = document.getElementById('mult');
let deff = document.getElementById('deff');
let sum = document.getElementById('sum');
let ravnoBtn = document.getElementById('ravno');
let com = document.getElementById('com');


let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let result = document.getElementsByClassName('output_result')[0];
let buttons = document.getElementsByClassName('buttons')[0];
let orangeBut = document.getElementsByClassName('orange');
let func = '0';
let switchFunc = false;
let numberB;
function onClickAS() {
    result.innerHTML = '0';
    func = '0';
    for (el of orangeBut) {
        el.style.background = 'orange';
        el.style.color = 'white';
    }
}
acBtn.addEventListener('click', onClickAS);

let numbArr = [one, two, three, four, five, six, seven, eight, nine];
for (numb of numbArr) {
    numb.addEventListener('click', onClickNumber);
}
function onClickNumber(e) {
    if (result.innerHTML === '0') {
        result.innerHTML = '';
    }
    if (switchFunc !== false) {
        result.innerHTML = '';
        switchFunc = false;
        for (el of orangeBut) {
            el.style.background = 'orange';
            el.style.color = 'white';
        }
    } 
    result.innerHTML += e.target.innerHTML;
}
nullBtn.addEventListener('click', onClickNull);
function onClickNull(e) {
    if (switchFunc !== false) {
        result.innerHTML = '';
        switchFunc = false;
        for (el of orangeBut) {
            el.style.background = 'orange';
            el.style.color = 'white';
        }
    } 
    if (result.innerHTML === '0') {
        result.innerHTML = '0';
    }
    else {
        result.innerHTML += e.target.innerHTML;
    }
}
com.addEventListener('click', onClickCom);
function onClickCom() {
    if (switchFunc !== false) {
        result.innerHTML = '0';
        switchFunc = false;
        for (el of orangeBut) {
            el.style.background = 'orange';
            el.style.color = 'white';
        }
    } 
    if (result.innerHTML.includes('.') === true) {
        result.innerHTML;
    } else {
        result.innerHTML += '.'
    }
}
plusMinus.addEventListener('click', onClickPlusMinus);
function onClickPlusMinus() {
    if (result.innerHTML.includes('-') === true) {
        result.innerHTML = result.innerHTML.slice(1, result.innerHTML.length);
    } else {
        result.innerHTML = `-${result.innerHTML}`;      
    }
}
procent.addEventListener('click', onClickProcent);
function onClickProcent(){
    result.innerHTML = (+result.innerHTML) / 100;     
}
div.addEventListener('click', onClickDiv);
function onClickDiv(e) {
    numberA = +result.innerHTML.slice(0, result.innerHTML.length);
    e.target.style.background = 'white';
    e.target.style.color = 'orange';
    func = 'div';
    switchFunc = true;
}
mult.addEventListener('click', onClickMult);
function onClickMult(e) {
    numberA = +result.innerHTML.slice(0, result.innerHTML.length);
    e.target.style.background = 'white';
    e.target.style.color = 'orange';
    func = 'mult';
    switchFunc = true;
}
deff.addEventListener('click', onClickDeff);
function onClickDeff(e) {
    numberA = +result.innerHTML.slice(0, result.innerHTML.length);
    e.target.style.background = 'white';
    e.target.style.color = 'orange';
    func = 'deff';
    switchFunc = true;
}
sum.addEventListener('click', onClickSum);
function onClickSum(e) {
    numberA = +result.innerHTML.slice(0, result.innerHTML.length);
    e.target.style.background = 'white';
    e.target.style.color = 'orange';
    func = 'sum';
    switchFunc = true;
}
ravnoBtn.addEventListener('click', onClickResult);
function onClickResult(e) {
    numberB = +result.innerHTML.slice(0, result.innerHTML.length);
    e.target.style.background = 'white';
    e.target.style.color = 'orange';
    if (func !== '0') {
        for (el of orangeBut) {
            if (el !== e.target) {
                el.style.background = 'orange';
                el.style.color = 'white';
            }
        }
    }
    if (func === 'div') {    
        result.innerHTML = `${numberA / numberB}`;    
        return false;
    }
    if (func === 'mult') {    
        result.innerHTML = `${numberA * numberB}`;
        return false;
    }
    if (func === 'deff') {    
        result.innerHTML = `${numberA - numberB}`;
        return false
    }
    if (func === 'sum') {    
        result.innerHTML = `${numberA + numberB}`;    
    }
}
 











