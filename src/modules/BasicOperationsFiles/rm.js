import fs from 'fs/promises';
import path from 'path';
export function rm(targetDir, currentDir) {
  const newPath = path.resolve(currentDir, targetDir);
  try {
    fs.unlink(newPath);
  } catch {
    throw new Error('Operation failed');
  }
}
