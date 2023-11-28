console.log("ken")

premittives

1. Numbers

let num = 1000

console.log(num)

console.log(2 + 2)

let ken = 10;
ken ++;
console.log(ken)

let firstValue = 56;
let secondValue = 65;
console.log(firstValue + secondValue)

console.log(firstValue - secondValue)
console.log(firstValue * secondValue)
console.log(firstValue / secondValue)
console.log(firstValue % secondValue)
console.log(firstValue**secondValue)

Boolean

falsy

-> false
-> null
-> undefined
-> 0
-> -0
-> NaN
-> '', "", ``, (empty quotes)

True

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 56;
console.log(56 + undefined)

Comparison Operators
Operators
Relational Operators

console.log(10 > 10); //false
console.log(10 < 10); //false
console.log(10 <= 10); //true
console.log(10 >= 10); //true

Equality Operators

=== strict Equality (type + value)  comparism
!== strict non-equality Operators (type + value)
== lose equality Operator (value)
!= not equality Operator (value)

console.log(10 ===10);
console.log(10 === '10')
console.log(10 !== '10')

let firtFavNumb = 56;
let secondFavNum = 65;
console.log( firtFavNumb > secondFavNum);
console.log( firtFavNumb < secondFavNum);
console.log( firtFavNumb >= secondFavNum);
console.log( firtFavNumb <= secondFavNum);
console.log( firtFavNumb == secondFavNum);
console.log( firtFavNumb === secondFavNum);
console.log( firtFavNumb !== secondFavNum);
console.log( firtFavNumb != secondFavNum);

String
concatenation
let firstName = "ken"
console.log("my name is " + firstName)

let firstName = "ken"
console.log("my name is ".concat(firstName))

Append
let myName = "kenneth";
myName += " is a Programmer";
console.log(myName);

Cases
Changing the Cases
 let myName = "kenneth";
 console.log(myName.toUpperCase());
 console.log(myName.toLowerCase());

5. Slice

 let myName = "kenneth";
 console.log(myName.slice(3.5));

6. slit and Join

let myName = "kenneth";
console.log(myName.split('').join('-'));

let myName = "         kenneth   ";
console.log(myName.trim());

backticks ( when calling multiple lines)

let myFirstName = 'Kenneth'
let mySurnName = 'Ngonadi'

console.log(`${myFirstName} ${mySurnName} "is a JavaScript Programmer" ` )

type conversion
convert string to Number

let money = "50";
money = parseInt(money);
money = +money
money = number(money);

console.log(money);
console.log(typeof money);

let a = 29;
let b = 27;

if (a > b) {
  console.log("The Value of a is Greater than the value of b");
} else if (a < b) {
  console.log("the value of a is lesser than the value of b");
} else {
  console.log("the Value of a is equal to the value of b");
}

let time = 1201;
let greatings;

if (time > 1200) {
  greatings = "Good Afternoon";
  console.log(greatings);
} else if (time < 1200 & time) {
  greatings = "Good evening";
  console.log(greatings)
} else {
  greatings = "Good Night";
  console.log(greatings)
}

let password = 8;
if (password === 8) {
  console.log("welcome");
} else if (password <= 8) {
  console.log("password is too short");
} else if (password >= 8) {
  console.log("too long password");
} else {
  console.log("please provide password");
}

switch case

let x = 4;
let bulb;

switch (x) {
  case 0:
    bulb = "off";
    console.log(bulb);
    break;
  case 1:
    bulb = "on";
    console.log(bulb);
    break;
  case 4:
    bulb = "indigo";
    console.log(bulb);
    break;
  default:
    bulb = "no value found";
    console.log(bulb);
}

let x = 1;
let bulb;

switch(x){
    case 0:
        bulb = "Off";
        console.log(bulb);
        break;
    case 1:
        bulb = "On"
        console.log(bulb);
        break;
    default:
        bulb = "No value"
        console.log(bulb)

}

let day = "Frifday"

switch(day){
    case "monday":
        console.log("Today is monday");
        break;
    case "Tuesday":
        console.log("today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday")
        break;
    case "Saturday":
        console.log("Saturday")
        break;
    case "Sunday":
        console.log("Sunday")
        break;
    default:
        console.log("Not valid day of the week")

}

let fruit = "apple"
switch(fruit){
    case "banana":
        console.log("banana is good")
        break
    case "orange":
        console.log("I am not a fan of Orange");
        break;
    case "apple":
        console.log("How you like them apples?");
        break;
    default:
    console.log("I have never heard of that fruit")
}

for loop
for (initilExpression; condition; incrementExpression){}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

for (let i = 4; i <=4; i++) {
    console.log(i);
}

for(let i =0; i<=100; i++){
    console.log("kenneth", i)
}

initialize or define your variable
while (condition){
code block to be executed
}

while loop
let i = 10;
while (i < 111) {
  console.log("kenneth", i);
  i++;
}

do while loop
let i = 1
do{
    console.log("ken", i);
    i++;
}while (i <= 5);

logical operators

1. ==> logical AND (&&)
==> TRUE if both the operands/boolean values are true, else
 evaluates to false

const a = true;
const b = false;
const c = 4;

console.log(a&&b)

2. ==> logical OR (||)

==> TRUE if either of the operands/boolean values is true.
 evaluates to false if both are false.

console.log(a || b);
console.log(b || b);
console.log(c > 2 || c < 2);

3. ==> Logical NOT (!)
--> True if the operands is false and vice-versa

console.log(!a)

let password = "kenneth"
if(password.length >=7 && password.includes ("teh")){
    console.log("Correct Password")
}else{
    console.log("Invalid Password")
}

Arrays
const routine = ["eat", "code", "sleep", "Repeat"];
console.log(routine[0]);
console.log(routine[1]);
console.log(routine[2]);
console.log(routine[3]);

Nested OR Two dimensional Array

const arr1 = [2, "rain", ["Table", "chair"], "come"];
console.log(arr1[2][0]);

const favSingers = ["Sinach", "Frank", "Eben"];
console.log(favSingers[0]);
const favNumbers = [2, 4, 6, 8];
console.log(favNumbers);

const mixedArr = ["string", ["one", "two", "tree"], 123, true];
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[1][2]);

const fruits = ["apples", "oranges", "mangoes", "banana"];
const fruits_2 = ["apples", "oranges", "mangoes", "banana", "pineapple"];

let  addition = fruits.concat(fruits_2);
console.log(addition)

const pl =["JavaScript " , "Golang" , "Python " , "PHP"];
const numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));
console.log(pl.join("/"))
console.log(pl.reverse());
console.log(pl.slice(1,2))
console.log(numbers.sort())

const person = {
  firstName: "Kenneth",
  surName: "Ngonadi",
  age: 27,
  email: "keniebanks@gmail.com"
};

console.log(person.firstName);
console.log(person['surName']);

const person =  {
    10: "ten",
    name: "Ken"
}

person.lastName = "Ngonadi"
delete person.name
console.log(person)

const car = {
    type: "Bmw",
    mode: 2016,
    color: "black",
}
car.type="Toyota"
car.wheels=4
console.log(car)

FUNCTIONS

function is a block of code that performs a specific TextTrackList.
Fuction makes the code reuseable. You can declare it once and use it multiple Time.
Function increases readability.
DRY - Don't Report Yourself
fuction name(parameterIfAny) {...}

function greet() {
  console.log("hello from a function");
}

//call, run, execute
greet();

function color (){
    console.log("Our second function")
}
color();

const color =  () => {
    console.log("Our second function")
}
color();

Function Declaration
function greet(){
    console.log("Hello from a function");
}
greet();

function with parameter or local variable

function hello1(name, age) {
  console.log(`hello ${name} i'm ${age} years old`);
}
hello1("ken", 27);
hello1("Joy");

function add(x, y) {
  return x + y;
}
let solution1 = add(20, 69);
let solution2 = add(20, 98);
let solution3 = add(89, 49);

console.log(solution1);
console.log(solution2);
console.log(solution3);

function myFunction (x, y) {
    return(x * y)

}
let result= myFunction(23, 2);
console.log(result)

function Declaration and Function Expression

testing("ken");
function testing(name) {
  console.log(`Hello ${name}`);
}

const testing1 = function (name) {
  console.log(`hi my name is ${name}`);
};
testing1 ("ken");

callback function

when we provide function as an (argument) to other function that function
is known as callback function.

function web(name, prf) {
  console.log(`hi my name is ${name}`);
  prf();
}

function prf(){
    console.log(`i'm a Js Developer`)
}

web("kenneth", prf)

1. create a fuction name (showCallFunc)
2. pass "fn" as parameter
3. inside that function, create variable which holds value of 10
4. pass that value to the callback function
5. Now create callback function & print that value which to pass as
parameter to the callback function.
function showCallFunc(fn) {
  let x = 10;
  fn(x);
}

showCallFunc(function (x) {
  console.log(x);
});

Scope in JavaScript refers to the current context of code, which determines
the accessibility of variables  to JavaScript.
There are two types of scopes in JavaScript.
1. Global scope variables are those decleared outiside of a block.
2. Local Scope variables are those decleared inside of a block.

let textMessage = "hi"//Global Variable
console.log(textMessage);

function show() {
  let textMessages = "Hello";
  console.log(textMessages);
}

// console.log(textMessages);
show();


methods: this simply means passing a function inside an object
const person = {
  name: "kenneth",
  age: 27,
  greet: function () {
    return ` Hello my name is ${person.name} i'm ${person.age} years old `;
  },
};
console.log(person.greet());
