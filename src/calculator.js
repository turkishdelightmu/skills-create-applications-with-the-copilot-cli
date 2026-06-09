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

let result;
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
    if (b === 0) exitWithError('Error: modulo by zero', 2);
    result = a % b;
    break;
  case 'pow':
    result = Math.pow(a, b);
    break;
  case 'sqrt':
    if (a < 0) exitWithError('Error: square root of negative number', 2);
    result = Math.sqrt(a);
    break;
  default:
    exitWithError(`Error: unknown operation "${op}". See --help.`, 1);
}

// Print numeric result to stdout
console.log(result);
process.exit(0);
