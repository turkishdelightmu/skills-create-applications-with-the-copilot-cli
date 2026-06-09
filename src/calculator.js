#!/usr/bin/env node

// Node.js CLI Calculator
// Supports: addition, subtraction, multiplication, division, modulo, exponentiation, square root
// Operations:
//   add <a> <b>  -> a + b
//   sub <a> <b>  -> a - b
//   mul <a> <b>  -> a * b
//   div <a> <b>  -> a / b  (division by zero is an error)
//   mod <a> <b>  -> a % b  (modulo by zero is an error)
//   pow <a> <b>  -> a ** b
//   sqrt <a>     -> sqrt(a) (error for negative input)

const args = process.argv.slice(2);

function printHelp() {
  console.log(`Usage: node src/calculator.js <operation> <a> <b>

Operations:
  add <a> <b>    Add a and b
  sub <a> <b>    Subtract b from a
  mul <a> <b>    Multiply a by b
  div <a> <b>    Divide a by b (errors on division by zero)
  mod <a> <b>    Modulo (errors on division by zero)
  pow <a> <b>    Exponentiation a^b
  sqrt <a>       Square root (single argument)

Examples:
  node src/calculator.js add 2 3   # 5
  node src/calculator.js div 10 2  # 5
  node src/calculator.js sqrt 9    # 3
`);
}

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

const [op, aRaw, bRaw] = args;

// For sqrt allow single argument; other ops require two
if (!op || aRaw === undefined || (op.toLowerCase() !== 'sqrt' && bRaw === undefined)) {
  console.error('Error: missing arguments. See --help.');
  printHelp();
  process.exit(1);
}

const a = Number(aRaw);
const b = bRaw === undefined ? undefined : Number(bRaw);

if (!Number.isFinite(a) || (bRaw !== undefined && !Number.isFinite(b))) {
  console.error('Error: arguments must be valid numbers.');
  process.exit(1);
}

function exitWithError(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

// Implementations for additional operations with error handling
function modulo(x, y) {
  const na = Number(x);
  const nb = Number(y);
  if (!Number.isFinite(na) || !Number.isFinite(nb)) throw new Error('Invalid number');
  if (nb === 0) throw new Error('Modulo by zero');
  return na % nb;
}

function power(base, exponent) {
  const b = Number(base);
  const e = Number(exponent);
  if (!Number.isFinite(b) || !Number.isFinite(e)) throw new Error('Invalid number');
  return Math.pow(b, e);
}

function squareRoot(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) throw new Error('Invalid number');
  if (num < 0) throw new Error('Square root of negative number');
  return Math.sqrt(num);
}

let result;
try {
  switch (op.toLowerCase()) {
    case 'add':
      result = a + b;
      break;
    case 'sub':
      result = a - b;
      break;
    case 'mul':
      result = a * b;
      break;
    case 'div':
      if (b === 0) exitWithError('Error: division by zero', 2);
      result = a / b;
      break;
    case 'mod':
      result = modulo(a, b);
      break;
    case 'pow':
      result = power(a, b);
      break;
    case 'sqrt':
      result = squareRoot(a);
      break;
    default:
      exitWithError(`Error: unknown operation "${op}". See --help.`, 1);
  }
} catch (err) {
  // Report error message and exit with non-zero code
  exitWithError(`Error: ${err.message}`, 2);
}

// Print numeric result to stdout
console.log(result);
process.exit(0);
