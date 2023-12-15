function convertArr2Obj(arr) {
  return arr.reduce((acc, curr) => {  //(curr, acc)
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

const obj = convertArr2Obj([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"],
]);

console.log(obj);
/* Should output:
        
          {
            1: 'One',
            2: 'Two',
            3: 'Three'
            4: 'Four',
            5: 'Five'
          }
        
        */
