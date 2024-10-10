import path from 'path';
import fs from 'fs/promises';
import { messageErrors } from '../../utils/index.js';

let __dirname = '';

export async function cd(targetDir, currentDir) {
  const newPath = path.resolve(currentDir, targetDir);
  try {
    await fs.stat(newPath);
    __dirname = newPath;
    return __dirname;
  } catch (err) {
    messageErrors('Operation failed');
    return currentDir;
  }
}
