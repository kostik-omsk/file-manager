import fs from 'fs/promises';
import { messageErrors } from '../../utils/index.js';

export async function ls(folderPath) {
  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath, { withFileTypes: true });
    const tableData = files.map((file) => ({
      Name: file.name,
      Type: file.isDirectory() ? 'directory' : 'file',
    }));

    tableData.sort((a, b) => {
      if (a.Type === 'directory' && b.Type === 'file') return -1;
      if (a.Type === 'file' && b.Type === 'directory') return 1;
      return 0;
    });

    console.table(tableData);
  } catch (err) {
    messageErrors('Operation failed');
  }
}
