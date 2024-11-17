/**
 * Author: Marshall Huckins
 * Date: 11/17/24
 * File Name: taco-stand.spec.js
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {assert.strictEqual(customer, "John");
      console.log("passed testServeCustomer");
    });
    tacoStand.serveCustomer("John");
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
  }
}

function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {assert.strictEqual(taco, "beef");
      console.log("passed testPrepareTaco");
    });
    tacoStand.prepareTaco("beef");
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
  }
}

function testHandleRush() {
  try {
    tacoStand.on("rush", (rush) => {assert.strictEqual(rush, "lunch");
      console.log("Passed testHandleRush");
    });
    tacoStand.handleRush("lunch");
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();