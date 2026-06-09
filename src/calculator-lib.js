// Calculator library
// Supports: addition, subtraction, multiplication, division

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

module.exports = { add, sub, mul, div };
