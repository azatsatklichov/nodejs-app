const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', 'kjkjhh', '.npmrc'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
});




//custom error
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}

class MyAppError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyAppError';
  }
}


//// nested errors 

//interface DBError {} //TBD
///
try {
  transaction.commit();
} catch (exception) {
  logerror(exception);
  if (exception instanceOf DBError) {
    try {
      transaction.rollback();
    } catch (e) {
      doMoreLoggingRollbackFailed(e);
    }
  }
}
// Nested try catches
// Exception cases are more important than the happy path
// You use exceptions as control flow



/////////////  You can rewrite them as follows:
try {
  transaction.commit();
} catch (transactionError) {
  this.handleTransactionError(transationError, transaction);
}
// Transaction error policy is not defined in this function
// so you don't have repeated code and code is more readable
// It is up to the transaction and the error to decide what to do

/**
 * You can detect this smell using parsing trees. Don’t abuse exceptions, don’t create
exception classes no one will ever catch, and don’t be prepared for every case (unless
you have a good real scenario with a covering test). The happy path should always be
more important than exceptional cases.
 */



//// Don’t return codes to yourself. Raise exceptions
/**
 * Discussion
APIs and low-level languages use return codes instead of exceptions. Return codes
bring unnecessary ifs and switch cases, polluting the code and business logic of good
cases. They also add accidental complexity and are prone to outdated documentation.
You can change ifs, return generic exceptions, and distinguish the happy path from
the exception path.
 */

//Here is some code with a return code:
function createSomething(arguments) {
  // Magic Creation
  success = false; // You failed to create
  if (!success) {
    return {
      object: null,
      httpCode: 403,
      errorDescription: 'You don't have permission to create...'
    };
  }
  return {
    object: createdObject,
    httpCode: 201,
    errorDescription: ''
  };
}
var myObject = createSomething('argument');
if (myObject.errorCode !== 201) {
  console.log(myObject.httpCode + ' ' + myObject.errorDescription)
}
// myObject does not hold My Object but an
// accidental auxiliary based on implementation
// from now on you need to remember this


//Here is an explicit check:
function createSomething(arguments) {
  // Magic Creation
  success = false; // You failed to create
  if (!success) {
    throw new Error('You don't have permission to create...');
}
  return createdObject;
}
try {
  var myObject = createSomething('argument');
  // no ifs, just happy path
} catch (exception) {
  // deal with it!
  console.log(exception.message);
}
// myObject holds my expected object
//exception, you should use IDs and codes as external identifiers.

/**
 * Create and raise generic exceptions; only create specific exceptions if you are
ready to handle them and they have specialized behavior. Don’t create anemic exceptions,
 */



//Hiding Low-Level Errors
/**
 * Problem: You show low-level messages to end users.
 * Solution: Catch your errors. Even the ones you don’t expect.
 * 
 * Discussion
Have you seen this message on any website?
‘Fatal error: Uncaught Error: Class ‘logs_queries_web’ not found in /var/www/html/
query-line.php:78 Stack trace: #0 {main} thrown in /var/www/html/query-line.php on
line 718’
 */



//Narrowing Exception Tries
/**
 * Problem: You have a lot of exception tries.
 * Solution: Be as specific as possible when handling errors.
 * 
 * Discussion: Exceptions are handy. But they should be narrow in order to favor the fail fast principle,
avoiding missing errors and false negatives. You should narrow the exception
handlers by targeting code sections that are as small as possible and following the
“Throw early and catch late” principle
 */


// Throw Early and Catch Late
/**
“Throw early and catch late” emphasizes detecting and handling
errors or exceptions as early as possible in the code, and deferring
their actual handling or reporting until a higher level or more
appropriate context. You should handle the errors as late as possible
in a place where you have more contextual information instead
of making localized decisions with incomplete information
 */