import path from 'path';
import fs from 'fs/promises';
export async function add(nameFile, currentDir) {
  const newPath = path.resolve(currentDir, nameFile);
  try {
    await fs.writeFile(newPath, '', { flag: 'wx+' });
  } catch {
    throw new Error('Operation failed');
  }
}
