const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.data = [];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data = chunk.toString().trim();
    if (!data || typeof data !== 'string') {
      this.emit('error', new Error('Invalid data'));
      return callback(new Error('Invalid data'));
    }
    this.data.push(data.toUpperCase());
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if (this.data.length > 0) {
      this.push(this.data.shift());
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;