
let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1,
};

// const copy = obj;  //link(как бы ссылаемся на другой обькт)

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; //using the function we copy the object to a new one
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add)); //соединяем 2 обьекта вместе.
const clone = Object.assign({}, add); // добавляем в пустой обьект.Клонируем add

clone.d = 20;
 console.log(add);   // этот обьект не поменялся.
 console.log(clone);

 const oldArray = ['a', 'b', 'c'];
 const newArray = oldArray.slice();  //метод позволяет скопировать массив.

 newArray[1] = 'hghghghghg';

 console.log(newArray);
 console.log(oldArray);

 const video = ['youtube', 'vimeo', 'netflix'],
       blogs = ['wordpress', 'livejornal', 'blogger'],
       internet = [...video, ...blogs, 'vk', 'facebook'];//(оператор разворота) ... как бы разварачивает массивы

console.log(internet);      

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log( ... num);

const array = ['a', 'b'];

const myNewArray = [ ...array];

const q = {
    one: 1,
    two: 2
};

const myNewObj = { ...q};


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

showAgeAndLangs: function(plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
        str += `${lang.toUpperCase()} `;
    });

    return str;
}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
const {exp} = plan.skills;
return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
let str = '';
const {programmingLangs} = plan.skills;
for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
}

return str;
}

showProgrammingLangs(personalPlanPeter);