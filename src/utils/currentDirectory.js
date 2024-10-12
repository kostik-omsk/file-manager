const RESET = '\u001b[0m';
const YELLOW_BG = '\u001b[48;5;28m';

export function currentDirectory(dirname) {
  console.log(`\nYou are currently in ${YELLOW_BG} ${dirname} ${RESET}`);
}
