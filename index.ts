import * as readline from 'readline';
import { toPigLatin } from './src/pigLatin';

// Readline interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una palabra para convertir a Pig Latin: ', (input) => {
  const result = toPigLatin(input);
  console.log(`En Pig Latin, la palabra "${input}" es: "${result}"`);
  rl.close();
});
