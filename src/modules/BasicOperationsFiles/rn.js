import path from 'path';
import fs from 'fs/promises';
export async function rn(pathFromTo, currentDir) {
  const [oldName, newName] = pathFromTo.split(' ');
  const oldPatch = path.resolve(currentDir, oldName);
  const newPath = path.resolve(currentDir, newName);

  try {
    await fs.rename(oldPatch, newPath);
  } catch {
    throw new Error('Operation failed');
  }
}
