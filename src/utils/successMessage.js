const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';

export function successMessage(message) {
  console.log('\n' + GREEN + message + RESET);
}
