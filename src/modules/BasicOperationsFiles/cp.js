import fs from 'fs';
import stream from 'stream/promises';
import path from 'path';

export async function cp(params, currentDir) {
  const [source, destination] = params.split(' ');

  const sourcePath = path.resolve(currentDir, source);
  const destinationPath = path.resolve(currentDir, destination);

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destinationPath);

  try {
    await stream.pipeline(readStream, writeStream);
  } catch (error) {
    throw new Error(error.message);
  }
}
