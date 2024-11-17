/**
 * Author: Marshall Huckins
 * Date: 11/17/24
 * File Name: taco-stand.js
 * Description:
 */

"use strict";

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;