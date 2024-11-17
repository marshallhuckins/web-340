/**
 * Author: Marshall Huckins
 * Date: 11/17/24
 * File Name: index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  if (command === "serve") {
    tacoStand.serveCustomer(args.join(" "));
  } else if (command === "prepare") {
    tacoStand.prepareTaco(args.joint(" "));
  } else if (command === "rush") {
    tacoStand.handleRush(args.join(" "));
  } else {
    console.log("Unknown command");
  }
// TODO: Handle the commands
});

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});


console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);