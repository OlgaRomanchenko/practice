" use strict";

// to string;
// 1)

console.log(typeof(String(null)));

// 2) Конкатенация

console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fondSize = 26 + 'px';

// to number
// 1)

console.log(typeof(Number('4')));

// 2)) Унарный плюс 

console.log(typeof(+ '5'));

//3)

console.log(typeof(parseInt('15 px', 10)));

// 4) унарный плюс.

let answ = +prompt(" Hello", "" );

// to boolean
//1)

// 0, '', null, NaN, undefined - всегда равно FALSE

let switcher = null;
if (switcher){
    console.log('Working...');
}
 switcher = 1; // TRUE

 if (switcher){
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"44444"));


