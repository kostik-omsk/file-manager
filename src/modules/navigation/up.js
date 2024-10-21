import path from 'path';
import { messageErrors } from '../../utils/index.js';

export function up(currentDir, baseDir) {
  const parentDir = path.dirname(currentDir);
  if (currentDir !== baseDir) {
    return parentDir;
  } else {
    messageErrors('Already at the root directory');
    return currentDir;
  }
}
