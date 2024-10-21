import os from 'os';
import { messageErrors, successMessage } from '../../utils/index.js';

export default function osInfo(param) {
  switch (param) {
    case '--EOL':
      const EOL = os.EOL.includes('\r') ? '[CRLF]' : '[LF]';
      successMessage(`EOL: ${EOL}`);
      break;

    case '--cpus':
      console.table(
        os.cpus().map((cpu) => ({
          model: cpu.model,
          clockRate: cpu.speed / 1000 + 'GHz',
        })),
      );
      break;

    case '--homedir':
      successMessage(`homedir: ${os.homedir()}`);

      break;

    case '--username':
      successMessage(`username: ${os.userInfo().username}`);
      break;

    case '--architecture':
      successMessage(`architecture: ${os.arch()}`);
      break;

    default:
      messageErrors('is no such command');
      break;
  }
}
