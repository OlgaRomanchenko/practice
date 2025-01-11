

const arr = [1, 2, 3, 6, 8];
 arr.pop();
 arr.push(10);

 console.log(arr);
 arr.sort(compareNum);

 function compareNum(a, b) {
    return a-b;
 }

 arr.forEach(function(item, i, arr) {
    console.log(` ${i} : ${item} внутри массива  ${arr}`);

 });



 for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}


 for (let value of arr){
    console.log(value);
 }

 const str = prompt("", "");
 const products = str.split(", ");
 products.sort();
 console.log(products.join(";"));


 const family = ['Peter', 'Ann', 'Alex', 'Linda'];

 function showFamily(arr) {
   let str = '';

   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

   arr.forEach(member => {
       str += `${member} `;
   });

   return str;
}

showFamily(family);

const someString = 'This is some strange string';

function reverse(str) {
   if (typeof(str) !== 'string'){
      return 'Error';
   }
   return str.split('').reverse().join('');
}

reverse(someString);

