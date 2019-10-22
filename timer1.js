const args = process.argv.slice(2);

if (args.length === 0) {
  return;
} else {
  for (const arg of args) {
    if (arg > 0 && arg !== NaN) {
      setTimeout(() => {
        console.log("Beep");
      }, arg * 1000)
    }
  }
}