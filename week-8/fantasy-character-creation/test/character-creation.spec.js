"use strict";

const { readFile, writeFile } = require('fs');

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
    mkdir: jest.fn(),
  },
}));

describe("Character Creation Module", () => {
  let createCharacter, getCharacters;

  beforeEach(() => {
    jest.resetModules();
    ({ createCharacter, getCharacters } = require("../src/character-creation"));
  });

  it("should write a new character to the file", async () => {
    const newCharacter = { name: "Aragorn", race: "Human", class: "Ranger" };

    fs.readFile.mockResolvedValueOnce("[]"); // Simulate empty file
    fs.mkdir.mockResolvedValueOnce(); // Simulate directory creation
    fs.writeFile.mockResolvedValueOnce();

    await createCharacter(newCharacter);

    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.stringMatching(/characters.json$/),
      JSON.stringify([newCharacter], null, 2),
      "utf8"
    );
  });

  it("should read characters from the file", async () => {
    const characters = [{ name: "Aragorn", race: "Human", class: "Ranger" }];

    fs.readFile.mockResolvedValueOnce(JSON.stringify(characters));

    const result = await getCharacters();

    expect(result).toEqual(characters);
  });

  it("should handle errors when writing to the file", async () => {
    const newCharacter = { name: "Aragorn", race: "Human", class: "Ranger" };

    fs.readFile.mockResolvedValueOnce("[]");
    fs.mkdir.mockResolvedValueOnce();
    fs.writeFile.mockRejectedValueOnce(new Error("Write error"));

    await expect(createCharacter(newCharacter)).rejects.toThrow("Write error");
  });
});