const RESET = '\x1b[0m';
const RED = '\x1b[31m';

export function messageErrors(message) {
  console.log('\n' + RED + message + RESET);
}
