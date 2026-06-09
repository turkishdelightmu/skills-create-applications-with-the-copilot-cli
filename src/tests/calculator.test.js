const { add, sub, mul, div } = require('../calculator-lib');

describe('Calculator library - basic operations', () => {
  test('add 2 + 3 === 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('sub 10 - 4 === 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('mul 45 * 2 === 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('div 20 / 5 === 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('handles numeric strings', () => {
    expect(add('2', '3')).toBe(5);
    expect(sub('10', '4')).toBe(6);
    expect(mul('6', '7')).toBe(42);
    expect(div('20', '5')).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
  });

  test('invalid numbers behavior', () => {
    expect(add('a', 1)).toBeNaN(); // add will coerce to NaN
    expect(() => div('foo', 'bar')).toThrow('Invalid number');
  });
});
