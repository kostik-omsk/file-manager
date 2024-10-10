import fs from 'fs/promises';
import path from 'path';
export async function rm(targetDir, currentDir) {
  const newPath = path.resolve(currentDir, targetDir);
  try {
    await fs.unlink(newPath);
  } catch {
    throw new Error('Operation failed');
  }
}
