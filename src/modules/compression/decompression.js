import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'zlib';
import path from 'path';
import { isExists, successMessage, messageErrors } from '../../utils/index.js';

export function decompression(pathFromTo, currentDir) {
  const [source, destination] = pathFromTo.split(' ');
  const filePath = path.resolve(currentDir, source);
  const destinationPath = path.resolve(currentDir, destination);
  const isExistsFile = isExists(filePath);

  if (!isExistsFile) {
    messageErrors('File does not exist');
    return;
  }
  const readStream = createReadStream(filePath);
  const unzip = zlib.createBrotliDecompress();
  const writeStream = createWriteStream(destinationPath);

  try {
    pipeline(readStream, unzip, writeStream);
    successMessage(`Decompressed file: ${destinationPath}`);
  } catch (err) {
    throw new Error(err.message);
  }
}
