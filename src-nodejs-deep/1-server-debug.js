const util    = require('util');
let debuglog  = util.debuglog;
util.debuglog = set => {
  if (set === 'https') {
    let pid = process.pid;
    return function() {
      let msg = util.format.apply(util, arguments);
      console.error('%s %d: %s', set, pid, msg);
    }
  }  else {
          console.log('http used');
    }
  return debuglog(set);
}

// This has to occur _after_ the code above:
const https = require('https');


//or
>NODE_DEBUG="http" node C:\workspace\nodejs-app\src-nodejs-deep\1-server.js



