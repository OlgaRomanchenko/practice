' use  strict' ;

function calculateVolumeAndArea(num){
    let v_square = Math.pow(num,3);
    let s_square = 6 * Math.pow(num,2);
    if (typeof num === "string" ||num < 0 ||Number.isInteger(num) === false){
        return  (`При вычислении произошла ошибка`);
    } else{
        return (`Объем куба: ${v_square}, площадь всей поверхности: ${s_square}`);
    }
}

console.log(calculateVolumeAndArea(5));



function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}