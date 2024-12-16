"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require('fs').promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/characters.json");

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    let characters = [];
    try {
        // Read existing characters
        const data = await fs.readFile(filePath, "utf8");
        characters = data ? JSON.parse(data) : [];
    } catch (err) {
        if (err.code !== "ENOENT") throw err; // Ignore file not found error
    }
    // Add the new character
    characters.push(character);

    // Write back to the file
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(characters, null, 2), "utf8");
  } catch (err) {
      console.error("Error writing character:", err);
      throw err;
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data ? JSON.parse(data) : []; 
  } catch (err) {
    if (err.code === "ENOENT") {
      return []; 
    }
    console.error("Error reading characters:", err);
    throw err;
    }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises