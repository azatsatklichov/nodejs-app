
process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});

setTimeout(() => process.exit(), 3000);

process.on('exit', () => {
  console.log('\nProcess timeout. ');
});

console.log('Hello!');
