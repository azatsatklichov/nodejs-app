 

let ctn = 0;
const intv = setInterval(() => {
  console.log("Zelvy Ninja " + ctn++);

  if (ctn === 5) {
    console.log("done");
    clearInterval(intv);
  }
}, 1 * 1000);



//other
const slm = delay =>
  setTimeout(() => {
    console.log('Ahoj Dunya. ' + delay);
    slm(delay + 1);
  }, delay * 1000);

slm(1);