

function getTimeFromMinutes(n) {
    
    if (typeof(n) !== 'number' || n <= 0) {
        console.log("Ошибка");
    }
    let hours = Math.trunc(n/60);
    let minutes = n % 60;
    console.log(`Это ${hours} часов, ${minutes} минут`);

}

getTimeFromMinutes(341);


function findMaxNumber(a,b,c,d) {
    let f = [a,b,c,d];
    const maxValue = Math.max(...f);
    console.log(maxValue);
}

findMaxNumber(2,4,5);