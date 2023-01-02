let name = 'test'; //string literal
console.log(name);

//cannot be keyword
//cannot start with number
//cannot contain space or hyphen

let firstName = 'Jack';
let lastName = 'Moore';

//best practice to declare multiple variables on seprate lines


//constansts 
const intrestRate = 0.3;
//cannot reasign constansts

let age = 30; //number literal
let isAproved = true; //boolean literal
let defined; //undefined
let selectColor = null; //used to clear variables


//objects
let person = {    //{} = object
  personName: 'John',
  personAge: 20
};

console.log(person.personAge); //dot notation

person['personName'] = 'Mary'; //bracket notation, use if you don't know what you're calling on until runtime


//arrays, arrays are objects
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'
console.log(selectedColors[0]);
console.log(selectedColors.length); // returns number of variables in an array


//functions
function greet(name, lastName) { //don't use semicolens when declaring a function, only use when calling
  console.log('hello ' + name + ' ' + lastName);
}

greet('John', 'moore'); //in this function name = perameter, John = arguement 

function square(number) {
  return number * number;
}

console.log(square(2))