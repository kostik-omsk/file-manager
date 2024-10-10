import path from 'path';
import fs from 'fs/promises';

const getFileType = async (filePath) => {
  const stats = await fs.stat(filePath);
  return stats.isDirectory() ? 'directory' : 'file';
};
export async function ls(folderPath) {
  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    const tableData = await Promise.all(
      files.map(async (file) => ({
        Name: file,
        Type: await getFileType(path.join(folderPath, file)),
      })),
    );

    tableData.sort((a, b) => {
      if (a.Type === 'directory' && b.Type === 'file') return -1;
      if (a.Type === 'file' && b.Type === 'directory') return 1;
      return 0;
    });

    console.table(tableData);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}
