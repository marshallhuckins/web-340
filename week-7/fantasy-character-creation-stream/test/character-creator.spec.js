const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write('test data');
    characterCreator.on('data', (chunk) => {
      expect(chunk.toString()).toBe('TEST DATA');
      done();
    });
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Invalid data');
      done();
    });
    characterCreator.write('');
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write('hello');
    characterCreator.on('data', (chunk) => {
      expect(chunk.toString()).toBe('HELLO');
      done();
    });
    characterCreator.end();
  });
});