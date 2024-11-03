/**
 * Author: Marshall Huckins
 * Date: 11/3/24
 * File Name: index.js
 * Description:
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require('./recipes');

// TODO: Implement your CLI program here
console.log(createRecipe(['Eggs', 'Butter', 'Flour']));
console.log(setTimer(15));
console.log(quit());