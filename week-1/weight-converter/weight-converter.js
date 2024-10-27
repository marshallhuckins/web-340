/**
 * Author: Marshall Huckins
 * Date:10/27/24
 * File Name: weight-converter.js
 * Description: Convert pounds to Kilograms
*/

"use strict";

// TODO: Implement the weight conversion logic here

if (process.argv.length < 3) {
  console.error("Usage: node weight-converter.js <weight_in_pounds>");
  process.exit(1);
}

// Get the input, weight in pounds, from command line argument
const pounds = process.argv[2];

// Check if the input is a number
if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

// Convert pounds to kilograms
const kilograms = pounds * 0.454;

// Print the result, rounded to two decimal places
console.log(`${kilograms.toFixed(2)}`);