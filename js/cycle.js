' use  strict' ;

let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }


// do{
//     console.log(num);
//     num++;
// }
// while(num < 55);  

for(let i=1; i<8; i++){
    console.log(num);
    num++;
}


for(let i=1; i<8; i++){
    if(i === 6){
        break;
    }
    console.log(i);
}


for(let i=1; i<8; i++){
    console.log(num);
    num++;
}


for(let i=0; i<3; i++){
    console.log(i);
    for(let j=0; j<3; j++){
        console.log(j);
    }
}

let result = "";
const lenght = 7;
for (let i=1; i<lenght; i++){
    for(let j=0; j<i; j++){
        result += "*";
    }
    result += "\n";
}
console.log(result);


first:for(let i=0; i<3; i++){
    console.log(`First level ${i}`);
    for(let j=0; j<3; j++){
        console.log(`Second level ${j}`);
        for(let k=0; k<3; k++){
            if(k ===2)  continue first;
            console.log(`Third level ${k}`);
        }
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

arrayOfNumbers =[];
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}




const arr = [3, 5, 8, 16, 20, 23, 50];
let results = [];

let b = arr.length;

for (let i =0; i<b; i++){
    results[i] = arr[i];
}
console.log(results);
    
    
let resultss = "";
const lines = 7;


