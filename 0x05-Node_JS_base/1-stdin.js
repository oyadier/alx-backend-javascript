const inp = process.stdin;
console.log('Welcome to Holberton School, what is your name?');
inp.setEncoding('utf-8');
if (inp.isTTY) {
  inp.on('data', (data) => {
    console.log(`Your name is: ${data}`);
    process.exit();
  });
} else {
  inp.on('data', (data) => {
    console.log(`Your name is: ${data}`);
    console.log('This important software is now closing');
    process.exit();
  });
}
