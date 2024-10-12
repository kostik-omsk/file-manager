import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'zlib';
import path from 'path';
import { successMessage, messageErrors, isExists } from '../../utils/index.js';

export async function compression(pathFromTo, currentDir) {
  const [source, destination] = pathFromTo.split(' ');

  const filePath = path.resolve(currentDir, source);
  const destinationPath = path.resolve(currentDir, destination);

  const isExistsFile = isExists(filePath);

  if (!isExistsFile) {
    messageErrors('File does not exist');
    return;
  }

  const readStream = createReadStream(filePath);
  const gzip = zlib.createBrotliCompress();
  const writeStream = createWriteStream(destinationPath);

  try {
    await pipeline(readStream, gzip, writeStream);
    successMessage(`Compressed file: ${destinationPath}`);
  } catch (err) {
    console.log('Error:', err.message);

    throw new Error(err.message);
  }
}
