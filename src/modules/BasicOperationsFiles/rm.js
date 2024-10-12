import fs from 'fs/promises';
import path from 'path';
import { successMessage } from '../../utils/index.js';
export async function rm(targetDir, currentDir) {
  const newPath = path.resolve(currentDir, targetDir);
  try {
    await fs.unlink(newPath);
    successMessage(`Removed file: ${targetDir}`);
  } catch {
    throw new Error('Operation failed');
  }
}
