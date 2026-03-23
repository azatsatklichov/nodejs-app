const square = (a) => {
  return a * a;
};

// const square = (a) => a * a;
// const square = a => a * a;

[1, 2, 3, 4].map(a => a * a).forEach(x => console.log(x));


[["ole1", "mole1", "kole1"], ["ole2", "mole2", "kole2"], ["ole3", "mole3", "kole3"]].flatMap((x) => x).forEach(x=> console.log(x));