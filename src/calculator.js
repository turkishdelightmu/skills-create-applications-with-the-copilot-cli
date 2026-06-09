#!/usr/bin/env node

// Node.js CLI Calculator
// Supports: addition, subtraction, multiplication, division
// Operations:
//   add <a> <b>  -> a + b
//   sub <a> <b>  -> a - b
//   mul <a> <b>  -> a * b
//   div <a> <b>  -> a / b  (division by zero is an error)

const args = process.argv.slice(2);

function printHelp() {
  console.log(`Usage: node src/calculator.js <operation> <a> <b>

Operations:
  add <a> <b>    Add a and b
  sub <a> <b>    Subtract b from a
  mul <a> <b>    Multiply a by b
  div <a> <b>    Divide a by b (errors on division by zero)

Examples:
  node src/calculator.js add 2 3   # 5
  node src/calculator.js div 10 2  # 5
`);
}

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

const [op, aRaw, bRaw] = args;

if (!op || aRaw === undefined || bRaw === undefined) {
  console.error('Error: missing arguments. See --help.');
  printHelp();
  process.exit(1);
}

const a = Number(aRaw);
const b = Number(bRaw);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
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
  default:
    exitWithError(`Error: unknown operation "${op}". See --help.`, 1);
}

// Print numeric result to stdout
console.log(result);
process.exit(0);
