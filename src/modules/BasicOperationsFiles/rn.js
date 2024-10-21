import path from 'path';
import fs from 'fs/promises';
import { successMessage } from '../../utils/index.js';
export async function rn(pathFromTo, currentDir) {
  const [oldName, newName] = pathFromTo.split(' ');
  const oldPatch = path.resolve(currentDir, oldName);
  const newPath = path.resolve(currentDir, newName);

  try {
    await fs.rename(oldPatch, newPath);
    successMessage(`Renamed file: ${oldName} to ${newName}`);
  } catch {
    throw new Error('Operation failed');
  }
}
