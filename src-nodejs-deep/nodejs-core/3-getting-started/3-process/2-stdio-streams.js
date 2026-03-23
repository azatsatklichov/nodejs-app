process.stdin.on('readable', () => {
  console.log('--ole--');
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});
