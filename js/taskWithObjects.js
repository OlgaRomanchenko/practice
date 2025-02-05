const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let totalVolume = 0;
    data.shops.forEach( shop => {
        const shopArea =shop.width * shop.length;
        const shopVolume = shopArea * shop.height;
        totalVolume += shopVolume;
    });
    const totalCost = totalVolume * data.moneyPer1m3;
    if (data.budget - totalCost >= 0){
        return 'Бюджета достаточно';
    }else{
        return 'Бюджета не достаточно';
    }
    
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let newStudents = [];
    arr.forEach(student => {
        newStudents = arr.sort();
    });
    //console.log(newStudents);
    let groups = [];
    for ( let i = 0; i< newStudents.length; i +=3){
        groups.push(newStudents.slice(i, i+3)); 
    }
    console.log(groups);
}

//sortStudentsByGroups(students);


function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));