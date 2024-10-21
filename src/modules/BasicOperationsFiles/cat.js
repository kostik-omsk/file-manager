import { createReadStream } from 'fs';
import path from 'path';
import { messageErrors } from '../../utils/index.js';

export function cat(targetDir, currentDir) {
  const newPath = path.resolve(currentDir, targetDir);
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(newPath);
    readStream.on('data', (chunk) => console.log(chunk.toString()));
    readStream.on('error', () => messageErrors('Operation failed'));
    readStream.on('close', resolve);
  });
}
