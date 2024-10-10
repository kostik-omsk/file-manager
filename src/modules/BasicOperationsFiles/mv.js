import path from 'path';
import { cp, rm } from './index.js';

export async function mv(params, currentDir) {
  const [source, destination] = params.split(' ');
  const destinationPath = path.resolve(currentDir, destination, path.basename(source));

  try {
    await cp(`${source} ${destinationPath}`, currentDir);
    await rm(source, currentDir);
  } catch (error) {
    throw new Error(error.message);
  }
}
