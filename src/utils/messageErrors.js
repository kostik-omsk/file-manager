const RESET = '\x1b[1;0m';
const RED = '\x1b[1;31m';

export function messageErrors(message) {
  console.log('\n' + RED + message + RESET);
}
