/**
 * Author: Marshall Huckins
 * Date: 11/23/24
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe('bakePie', () => {
  test('should successfully bake a pie when all ingredients are present', () => {
      const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
      expect(result).toBe('Successfully baked a apple pie!');
  });

  test('should log a warning and call process.exit when ingredients are missing', () => {
      const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
      const mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});

      bakePie('apple', ['flour', 'sugar']);

      expect(mockWarn).toHaveBeenCalledWith('Missing ingredients: butter');
      expect(mockExit).toHaveBeenCalledWith(1);

      mockWarn.mockRestore();
      mockExit.mockRestore();
  });
});