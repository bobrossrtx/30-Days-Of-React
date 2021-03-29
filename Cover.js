/**
 * Variables
 */
let firstName = 'Asben'; // Allowed to reassign
firstName = 'Yoni';

const PI = 3.14159265359; // Not allowed to reassign PI to a new value.
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
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length
console.log('Numbers: ', numbers);
console.log(`Number of numbers: ${numbers.length} \n`);

console.log('Fruits: ', fruits);
console.log(`Number of fruits: ${fruits.length} \n`);

console.log('Vegetables: ', vegetables);
console.log(`Number of Vegetables: ${vegetables.length} \n`)
