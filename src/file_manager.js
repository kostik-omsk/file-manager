import { homedir } from 'os';
import readline from 'readline/promises';
import { getUserName, exitProgram, currentDirectory, messageErrors } from './utils/index.js';
import { ls, up, cd } from './modules/navigation/index.js';
import { cat, add, rn, cp, rm, mv } from './modules/BasicOperationsFiles/index.js';
import osInfo from './modules/OSInfo/osInfo.js';
import hachCalculation from './modules/hash/hach.js';
import { compression, decompression } from './modules/compression/index.js';

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
  add: (fileName) => add(fileName, __dirname),
  rn: (pathFromTo) => rn(pathFromTo, __dirname),
  cp: (copyFromTo) => cp(copyFromTo, __dirname),
  rm: (fileName) => rm(fileName, __dirname),
  mv: (moveFromTo) => mv(moveFromTo, __dirname),
  os: (param) => osInfo(param),
  hach: (fileToPath) => hachCalculation(fileToPath, __dirname),
  compress: (pathFromTo) => compression(pathFromTo, __dirname),
  decompress: (pathFromTo) => decompression(pathFromTo, __dirname),
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

rl.on('SIGINT', () => {
  exitProgram(userName);
});
