
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

//const jonh = {
 //   health: 100
//};

//jonh.__proto__= soldier; // old version

//Object.setPrototypeOf(jonh, soldier);
const jonh = Object.create(soldier);

jonh.sayHello();
