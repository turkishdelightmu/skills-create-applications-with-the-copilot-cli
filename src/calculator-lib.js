// Calculator library
// Supports: addition, subtraction, multiplication, division, modulo, exponentiation, square root

function add(a, b) {
  return Number(a) + Number(b);
}

function sub(a, b) {
  return Number(a) - Number(b);
}

function mul(a, b) {
  return Number(a) * Number(b);
}

function div(a, b) {
  const numerator = Number(a);
  const denominator = Number(b);
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    throw new Error('Invalid number');
  }
  if (denominator === 0) {
    throw new Error('Division by zero');
  }
  return numerator / denominator;
}

function mod(a, b) {
  const numerator = Number(a);
  const denominator = Number(b);
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    throw new Error('Invalid number');
  }
  if (denominator === 0) {
    throw new Error('Modulo by zero');
  }
  return numerator % denominator;
}

function pow(a, b) {
  const base = Number(a);
  const exponent = Number(b);
  if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
    throw new Error('Invalid number');
  }
  return Math.pow(base, exponent);
}

function sqrt(a) {
  const n = Number(a);
  if (!Number.isFinite(n)) {
    throw new Error('Invalid number');
  }
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, mod, pow, sqrt };
