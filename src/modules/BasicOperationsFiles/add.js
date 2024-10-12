import path from 'path';
import fs from 'fs/promises';
import { successMessage } from '../../utils/index.js';
export async function add(nameFile, currentDir) {
  const newPath = path.resolve(currentDir, nameFile);
  try {
    await fs.writeFile(newPath, '', { flag: 'wx+' });
    successMessage(`Added file: ${nameFile}`);
  } catch {
    throw new Error('Operation failed');
  }
}
