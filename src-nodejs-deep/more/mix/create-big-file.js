const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
  file.write(' 68 74 74 70 3a 2f 2f 77 77 77 2e 73 61 68 65 74 2e 6e 65 74 0d 0a 68 74 74 70 3a 2f 2f 77 77 77 2e 67 6f 6f 67 6c 65 2e 63 6f 6d 0d 0a 68 74 74 70 3a ...  68 74 74 70 3a 2f 2f 77 77 77 2e 73 61 68 65 74 2e 6e 65 74 0d 0a 68 74 74 70 3a 2f 2f 77 77 77 2e 67 6f 6f 67 6c 65 2e 63 6f 6d 0d 0a 68 74 74 70 3a ....\n');
}

file.end();
