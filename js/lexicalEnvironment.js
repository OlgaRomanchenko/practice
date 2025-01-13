" use strict";

// let number = 5; debugger

// function logNumber(){
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

function createCouter(){
    let counter = 0;
    const myFanction = function(){
        counter = counter +1;
        return counter;
    };
    return myFanction;
}

const increment = createCouter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

console.log([] + 1 + 2 );