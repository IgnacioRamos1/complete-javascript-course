/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Nacho");

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null)
*/

/*
// Usamos let para declarar variables que pueden cambiar su valor
let age = 30;
age = 31;

// Usamos const para declarar variables que no cambiarán su valor
const birthYear = 1991;
// birthYear = 1990; // Esto dará un error

// Var es la forma antigua de declarar variables, no se recomienda su uso en la actualidad
var job = 'programmer';
job = 'teacher';
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Ramos';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 +5;
x += 10; // x = x + 10 = 25
x *= 4
x++; // x = x + 1
x--; // x = x -1
console.log(x)

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=

const isFullAge = ageSarah >= 18;
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge)
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/

/*
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')) // NaN = Not a number (Invalid number)
console.log(typeof NaN);

console.log(String(23), 23);


// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1; // '11'
n = n -1;
console.log(n);
*/

/*
// 5 false values 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;
if(money) {
    console.log("Don't spend it all ;)")
} else {
    console.log("You should get a job")
}
*/

/*
const age = '18';
if(age === 18) console.log("You just became an adult :D (strict)");

// La diferencia entre == y === es que el primero hace type coercion y el de 3 no, compara si son exacamente iguales

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number")
} else if (favourite === 7) {
    console.log("7 is also a cool number")
} else if (favourite === 9) {
    console.log("9 is algo a cool number")
} else {
    console.log("Number is not 23 or 7")
}

if (favourite !== 23) console.log("Why not 23?");

*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive")
// }

const isTired = true
console.log(hasDriversLicense || hasGoodVision || isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}
*/

/*
// Es una forma distinta de trabajar varios elif statements

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
*/

/*
const age = 18;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧")

// Condition: age >= 18
// If --> ? --> Like to drink wine
// Else --> : --> Like to drink water

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}

console.log(drink2)
*/

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :P');

const interface = 'Audio';
*/

/*
function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice =  `Juice with ${apples} apples and ${oranges} organges`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const age = calcAge(1991);

console.log(age)
*/

// Arrow function
// What i reciece and => what i want to return

/*
const calcAge3 = birthyear => 2037 - birthyear;
const age = calcAge3(1991);
console.log(age)


const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2019, 2018];

console.log(calcAge(years[0]));
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements (at the end)
friends.push('Jay');
console.log(friends);

// Add elements (at the start)
friends.unshift('John')
console.log(friends)

// Remove last elements
friends.pop();
console.log(friends);

// Remove first element
friends.shift()
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1 for an element that doesn't exist

console.log(friends.includes('Steven')); // Returns a bool if the element exists in the array
console.log(friends.includes('Bob'));
*/

/*
const jonasArray = [
    'Jonas',
    'Ramos',
    20237 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Ramos',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);


const interestedIn = prompt('What do you want to know abot Jonas? Choose beteween firstName, lastName, age, job and friends')
console.log(interestedIn);


if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose beteween firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@elonmusk';
console.log(jonas);
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Ramos',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age;
    },
    age: calcAge(this.birthYear)
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas.age)
*/

/*
// for loop keeps running while condition is TRUE
for(let rep = 1; rep <=30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
*/

/*
const jonas = [
    'Jonas',
    'Ramos',
    20237 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);

}

for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);

}
*/

/*
const jonas = [
    'Jonas',
    'Ramos',
    20237 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// REVERSE LOOP
for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep ++) {
        console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`)
    }
}
*/


// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

/*
let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep ++;
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log('Loop is abot to end...')
}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}

console.log(tips)
console.log(totals)

function calcAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(totals))

