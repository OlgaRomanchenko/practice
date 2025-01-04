" use strict";

if (4 == 9){
    console.log("OK");
}else{
    console.log('Error');
}

const num = 50;
if (num < 49){
    console.log('Error');
}else if (num > 100){
    console.log("Многою");
}else{
    console.log("OK!!");
}


switch(num){
    case 49:
        console.log(" НЕ верно");
        break;
    case 50:
        console.log("В точку!!");
        break;
    default:
        console.log("Не в єтот раз");
        break;
}