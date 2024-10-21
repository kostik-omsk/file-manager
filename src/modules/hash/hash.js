import path from 'path';
import crypto from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { successMessage } from '../../utils/index.js';

export default async function hashCalculation(fileName, currentDir, algorithm = 'sha256') {
  const newPath = path.resolve(currentDir, fileName);
  const hash = crypto.createHash(algorithm);
  const readStream = createReadStream(newPath);

  try {
    await pipeline([readStream, hash]);
    successMessage(`Hash for ${fileName}: ${hash.digest('hex')}`);
  } catch {
    throw new Error('Operation failed');
  }
}
