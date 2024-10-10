import { homedir } from 'os';
import readline from 'readline/promises';
import { getUserName, exitProgram } from './utils/userUtils.js';
import { ls } from './modules/navigation/ls.js';
import { cd } from './modules/navigation/cd.js';
import { up } from './modules/navigation/up.js';
import currentDirectory from './utils/currentDirectory.js';
import messageErrors from './utils/messageErrors.js';
import cat from './modules/BasicOperationsFiles/cat.js';

let baseDir = homedir();
let __dirname = baseDir;
const userName = getUserName('');
currentDirectory(__dirname);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commands = {
  '.exit': () => exitProgram(userName),
  ls: () => ls(__dirname),
  up: () => (__dirname = up(__dirname, baseDir)),
  cd: async (targetDir) => {
    __dirname = await cd(targetDir, __dirname);
  },
  cat: (fileName) => cat(fileName, __dirname),
};

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');

  if (command in commands) {
    try {
      if (args) {
        const argument = args.join(' ');
        await commands[command](argument);
      } else {
        await commands[command]();
      }
    } catch (err) {
      messageErrors('Operation failed');
    }
  } else {
    messageErrors('Invalid input');
  }
  currentDirectory(__dirname);
});

rl.on('close', () => {
  exitProgram(userName);
});
