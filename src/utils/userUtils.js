const RESET = '\x1b[1;0m';
const GREEN = '\x1b[1;32m';

function getUserName(user) {
  const args = process.argv.slice(2);
  const argIndex = args.findLastIndex((arg) => arg.startsWith('--username='));
  let userName = '';
  if (user == '' && argIndex !== -1) {
    userName = args[argIndex].split('=')[1];
  } else {
    userName = 'User';
  }

  console.log(`Welcome to the File Manager, ${GREEN}${userName}${RESET}!`);
  return userName;
}

function exitProgram(user) {
  console.log(`\nThank you for using File Manager, ${GREEN}${user}${RESET}, goodbye!`);
  process.exit();
}

export { getUserName, exitProgram };
