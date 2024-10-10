const RESET = '\x1b[0m';
const YELLOW_BG = '\x1b[43m';

export function currentDirectory(dirname) {
  console.log(`\nYou are currently in ${YELLOW_BG}${dirname}${RESET}`);
}
