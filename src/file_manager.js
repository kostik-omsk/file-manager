import { homedir } from 'os';
import readline from 'readline/promises';
import { getUserName, exitProgram } from './utils/userUtils.js';
import { ls } from './modules/navigation/ls.js';
import { cd } from './modules/navigation/cd.js';
import { up } from './modules/navigation/up.js';
import currentDirectory from './utils/currentDirectory.js';
import messageErrors from './utils/messageErrors.js';

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
};

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');

  if (command in commands) {
    if (args) {
      const argument = args.join(' ');
      commands[command](argument);
    } else {
      commands[command]();
    }
  } else {
    messageErrors('Invalid input');
  }
});

rl.on('close', () => {
  exitProgram(userName);
});
