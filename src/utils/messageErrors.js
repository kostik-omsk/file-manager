const RESET = '\x1b[0m';
const RED = '\x1b[31m';

export default function messageErrors(message) {
  console.log('\n' + RED + message + RESET);
}
