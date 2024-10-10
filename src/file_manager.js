import { homedir } from 'os';
import readline from 'readline/promises';
import { getUserName, exitProgram } from './utils/userUtils.js';
import { ls } from './modules/ls.js';
import currentDirectory from './utils/currentDirectory.js';
import messageErrors from './utils/messageErrors.js';

let __dirname = homedir();
const userName = getUserName('');
currentDirectory(__dirname);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commands = {
  '.exit': () => exitProgram(userName),
  ls: () => ls(__dirname),
  up: () => cd(),
};

rl.on('line', async (input) => {
  const command = input.trim();

  if (command in commands) {
    commands[command]();
  } else {
    messageErrors('Invalid input');
  }
});

rl.on('close', () => {
  exitProgram(userName);
});
