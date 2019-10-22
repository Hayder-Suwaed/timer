const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('BEEP\n');
  } else if (key > 0 && key < 10) {
    process.stdout.write(`Setting ALARM for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('BEEP\n');
    }, key * 1000)
  }
});

console.log("PRESS ANY OF THE BIG RED BUTTONS FROM 1-9 TO SET EMERGENCY ALARM");