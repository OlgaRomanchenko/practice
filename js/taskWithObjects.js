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