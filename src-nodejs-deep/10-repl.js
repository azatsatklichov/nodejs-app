const repl = require("repl");


let r = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT,
  
});


//to control REPL-global context, so lodash is available there
r.context.lodash = require('lodash');

