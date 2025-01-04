" use strict";

let num = 20;

function showFirstMessage(){
    console.log(" Hello World");
}

showFirstMessage();


function calc(a, b){
    return (a+b);
}

console.log(calc(5,4));

function ret(){
    let num =50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const usdCurr = 28;
const eurCurr = 33;

function convert(amount, curr){
    console.log( curr*amount);
}

convert(300,usdCurr);
convert(300,eurCurr);

function sayhello (name){
    console.log(`Hello ${name}`);
}

sayhello('Olga');

function returnNumber(num){
    let number = [num-1, num, num+1];
    return number;
}

console.log(returnNumber(5));



function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';
    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}