import path from 'path';
import messageErrors from '../../utils/messageErrors.js';
import currentDirectory from '../../utils/currentDirectory.js';

export function up(currentDir, baseDir) {
  const parentDir = path.dirname(currentDir);
  if (currentDir !== baseDir) {
    currentDirectory(parentDir);
    return parentDir;
  } else {
    messageErrors('Already at the root directory');
    return currentDir;
  }
}
