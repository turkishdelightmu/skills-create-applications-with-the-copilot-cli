const { add, sub, mul, div, mod, pow, sqrt } = require('../calculator-lib');

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

  test('mod 10 % 3 === 1', () => {
    expect(mod(10, 3)).toBe(1);
  });

  test('pow 2 ** 8 === 256', () => {
    expect(pow(2, 8)).toBe(256);
  });

  test('sqrt 9 === 3', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('handles numeric strings', () => {
    expect(add('2', '3')).toBe(5);
    expect(sub('10', '4')).toBe(6);
    expect(mul('6', '7')).toBe(42);
    expect(div('20', '5')).toBe(4);
    expect(mod('10', '3')).toBe(1);
    expect(pow('2', '3')).toBe(8);
    expect(sqrt('16')).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
  });

  test('modulo by zero throws', () => {
    expect(() => mod(10, 0)).toThrow('Modulo by zero');
  });

  test('sqrt negative throws', () => {
    expect(() => sqrt(-1)).toThrow('Square root of negative number');
  });

  test('invalid numbers behavior', () => {
    expect(add('a', 1)).toBeNaN(); // add will coerce to NaN
    expect(() => div('foo', 'bar')).toThrow('Invalid number');
  });
});

// Additional tests matching the image examples
test('mod 5 % 2 === 1 (image example)', () => {
  expect(mod(5, 2)).toBe(1);
});

test('pow 2 ^ 3 === 8 (image example)', () => {
  expect(pow(2, 3)).toBe(8);
});

test('sqrt 16 === 4 (image example)', () => {
  expect(sqrt(16)).toBe(4);
});
