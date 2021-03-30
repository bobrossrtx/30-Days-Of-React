/**
 * Variables
 */
let firstName = `Aspen`; // Allowed to reassign
console.log(firstName);
firstName = 'Yoni';
console.log(firstName);

const PI = 3.14159265359; // Not allowed to reassign PI to a new value.
console.log(PI);
// PI = 3;
/** OutPut:
 * PI = 3;
 *    ^
 * TypeError: Assignment to constant variable.
 *      Meaning: Since PI was defined as a constant, you can not reassign a value to it.
 */

/**
 * Arrays
 */
/** 
 * In contrast to variables, an array can store multiple values.
 * Each value in an array has an index, and each index has a reference
 * in a memory address.
*/

// Array constructor
const arr0 = Array();
// or
// let arr = new Array();
console.log(arr0); // []

// Square Brackets([])
const arr1 = [];
console.log(arr1); // []

// Array with values
// Arrays with initial values. We use length property to find the length of an array.
const numbers = [0, 3.14, 9.81, 37, 98, 100]; // Array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']; // Array of fruit: strings
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length
console.log('Numbers: ', numbers);
console.log(`Number of numbers: ${numbers.length} \n`);

console.log('Fruits: ', fruits);
console.log(`Number of fruits: ${fruits.length} \n`);

console.log('Vegetables: ', vegetables);
console.log(`Number of Vegetables: ${vegetables.length} \n`);

console.log('Animal Products: ', animalProducts);
console.log(`Number of animal products: ${animalProducts.length} \n`);

console.log('Web technologies:', webTechs)
console.log(`Number of webTechs: ${webTechs.length} \n`);

console.log('Countries:', countries)
console.log(`Number of countries: ${countries.length} \n`);

const dataTypes = [
    'Jonah',                                                // String
    256,                                                    // Integer
    true,                                                   // Boolean
    { country: 'Finland', city: 'Helsinki' },               // Objects
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }    // Objects + array
]; // Array containing different dataTypes
console.log(`DataTypes: ${dataTypes} \n`);

// Array using split
let js = 'JavaScript';
const charsInJavaScript = js.split('') // Will split by each character
console.log(`Characters in JavaScript: ${charsInJavaScript}`); // J,a,v,a,S,c,r,i,p,t

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(","); // Will split by each comma
console.log(`Companies: ${companies}`);

let txt = 'I love learning languages and frameworks, like JS and react, Python and Flask.';
const words = txt.split(' '); // Will split by each space
console.log(`Worlds: `);
console.log(words)

// Accessing items in an array using index
/* Using fruits array from before */
console.log(fruits[0] /* First item in an array is always indexed by 0 */);
console.log(fruits[1] + '\n');

// Calculating the last index
/* Using numbers array from before */
console.log(`Number array length: ${numbers.length}`); // Getting array length
console.log(`Last index: ${numbers[numbers.length - 1]} \n`);
// Accessing the index of the last number by using the length of the array

/*
* Array: To create an array.
* */
// Creating an empty array with 8 values;
const eightEmptyValues = Array(8);
console.log(eightEmptyValues);

// Filling array elements with values
const eightXValues = Array(8).fill("X");//  Filling the array with 8 * "X" in the array
console.log(eightXValues)

// Concatenating two arrays.
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList); // Concatenating multiple arrays together
console.log(thirdList);

const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

/*
* Another way of getting the index of an array, is:
* arr.indexOf(int)
* */
// If it exists it returns the index else it returns -1.
console.log(numbers.indexOf(2)) // -> -1

/*
* List Conditionals
* */
let fruitsAndVegetablesList = fruitsAndVegetables.indexOf('Tomato');
if (fruitsAndVegetablesList !== -1) {
    console.log('This fruit does exist in the array');
} else {
    console.log('This fruit does not exist in the array')
}

// We can also use ternary here
fruitsAndVegetablesList !== -1
    ? console.log("This fruit does exist int the array")
    : console.log("This fruit does not exist int the array")

// let us check if a avocado exist in the array
let indexOfAvocado = fruitsAndVegetables.indexOf('avocado') // -1, if the element not found index is -1
if (indexOfAvocado !== -1) {
    console.log('This fruit does exist in the array')
} else {
    console.log('This fruit does not exist in the array')
}

