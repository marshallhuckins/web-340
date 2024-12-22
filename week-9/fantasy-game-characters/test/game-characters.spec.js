// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;


  test("should return game characters data", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("game-characters-data.js"); 
    gameCharacters.getCharacters((error, data) => {
      console.log("Error:", error); // Debug log
      console.log("Data:", data);   // Debug log
      expect(error).toBeNull();
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("non-existent.js"); 
    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeTruthy();
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("failing-script.js"); 
    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeTruthy();
      expect(error.message).toContain("This is an intentional error.");
      expect(data).toBeNull();
      done();
    });
  });
});
