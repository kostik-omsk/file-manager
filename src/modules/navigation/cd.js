import path from 'path';
import fs from 'fs/promises';
import currentDirectory from '../../utils/currentDirectory.js';
import messageErrors from '../../utils/messageErrors.js';

let __dirname = '';

export async function cd(targetDir, currentDir) {
  const newPath = path.resolve(currentDir, targetDir);
  try {
    await fs.stat(newPath);
    __dirname = newPath;
    currentDirectory(__dirname);
    return __dirname;
  } catch (err) {
    messageErrors('Invalid path');
    return currentDir;
  }
}
