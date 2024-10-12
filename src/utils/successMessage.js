const RESET = '\x1b[1;0m';
const GREEN = '\x1b[1;32m';

export function successMessage(message) {
  console.log('\n' + GREEN + message + RESET);
}
