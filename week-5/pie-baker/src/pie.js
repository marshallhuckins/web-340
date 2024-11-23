/**
 * Author: Marshall Huckins
 * Date: 11/23/24
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ['flour', 'sugar', 'butter'];

  const missingIngredients = essentialIngredients.filter(ingredient => !ingredients.includes(ingredient));
  if (missingIngredients.length > 0) {
    console.warn(`Missing ingredients: ${missingIngredients.join(', ')}`);
    process.exit(1);
  }

  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };