// game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptName) {
      console.log("Script Name Received:", scriptName); // Debug log
      this.scriptPath = path.join(__dirname, scriptName);
  }



  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.scriptPath]);

        let output = "";
        let error = "";

        child.stdout.on("data", (data) => (output += data));
        child.stderr.on("data", (data) => (error += data));

        child.on("close", (code) => {
            if (code !== 0) {
                callback(new Error(error.trim()), null);
            } else {
                try {
                    const result = JSON.parse(output);
                    callback(null, result);
                } catch (parseError) {
                    callback(parseError, null);
                }
            }
        });
  }
}

module.exports = { GameCharacters };


