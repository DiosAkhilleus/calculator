let nums = document.getElementById('num');
let store = document.getElementById('numline').innerHTML;
let reg = document.getElementById('register').innerHTML;

document.getElementById('register').innerHTML = '0';

function init () {
    document.getElementById('numline').innerHTML = '0';
    document.getElementById('register').innerHTML = '0';
}

function add () {
    let num1 = document.getElementById('register').innerHTML;
    let num2 = document.getElementById('numline').innerHTML;
    let result = +num1 + +num2;
    let resString = result.toString();

    if(resString.length < 9){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    } if(resString.length >= 9) {
        document.getElementById('numline').innerHTML = 'OVERFLOW';
        document.getElementById('register').innerHTML =  '';
    }

    if(result < 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    }

    if(result == 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = '0';
        console.log(result);
    }
}

function subtract () {
    let num1 = document.getElementById('register').innerHTML;
    let num2 = document.getElementById('numline').innerHTML;
    let result = +num1 - +num2;
    let resString = result.toString();
    console.log(result);
    

    if(result > 0){
        if(resString.length < 9){
            document.getElementById('register').innerHTML = '';
            document.getElementById('numline').innerHTML = result;
            console.log(result);
        } if(resString.length >= 9) {
            document.getElementById('numline').innerHTML = 'OVERFLOW';
            document.getElementById('register').innerHTML =  '';
        }
    }

    if(result < 0){

        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    }

    if(result == 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = '0';
        console.log(result);
    }
}

function multiply () {
    let num1 = document.getElementById('register').innerHTML;
    let num2 = document.getElementById('numline').innerHTML;
    let result = +num1 * +num2;
    let resString = result.toString();
    if(resString.length < 9){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    } if(resString.length >= 9) {
        document.getElementById('numline').innerHTML = 'OVERFLOW';
        document.getElementById('register').innerHTML =  '';
    }

    if(result < 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    }

    if(result == 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = '0';
        console.log(result);
    }
}

function divide () {
    let num1 = document.getElementById('register').innerHTML;
    let num2 = document.getElementById('numline').innerHTML;
    let result = +num1 / +num2;
    let resString = result.toString();
    if(resString.length < 9){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    } if(resString.length >= 9) {
        document.getElementById('numline').innerHTML = 'OVERFLOW';
        document.getElementById('register').innerHTML =  '';
    }

    if(result < 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = result;
        console.log(result);
    }

    if(result == 0){
        document.getElementById('register').innerHTML = '';
        document.getElementById('numline').innerHTML = '0';
        console.log(result);
    }
}

function clr() {
    console.log("clear");
    let x = document.getElementById('numline');
    let y = document.getElementById('register');
    x.innerHTML = '0';
    y.innerHTML = '';
}


function setNum() {
    let x = this.innerHTML;
    let y = document.getElementById('numline').innerHTML;
    
    if(y.length < 9 && y!=='OVERFLOW'){
        if(y === '0'){
            document.getElementById('numline').innerHTML = x;
        }
        if (y !== '0'){
            document.getElementById('numline').innerHTML += x;
        }
    }
}

function setReg() {
    store = document.getElementById('numline');
    reg = document.getElementById('register');
    document.getElementById('register').innerHTML = store.innerHTML;
    document.getElementById('numline').innerHTML = '0';
    console.log(store.innerHTML, reg.innerHTML);
}

function min() {
    if(document.getElementById('numline').innerHTML === '0'){
        document.getElementById('numline').innerHTML = '-';
    }
}