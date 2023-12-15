//https://www.geeksforgeeks.org/how-to-run-cron-jobs-in-node-js/
//>npm install express node-cron

// Importing required libraries
const cron = require("node-cron");

/**
 * Descriptors with their ranges:

Seconds (optional): 0 – 59
Minute: 0 – 59
Hour: 0 – 23
Day of the Month: 1 – 31
Month: 1 – 12
Day of the week: 0 – 7 (0 and 7 both represent Sunday)
*/
//Examples:

//(*/10 * * * *) – Runs on every 10 minutes
//(* * 21 * *) – Runs 21th of every month
//(0 8 * * 1) – Runs 8 AM on every Monday

// Creating a cron job which runs on every 10 second
cron.schedule("*/10 * * * * *", function () {
  console.log("running a task every 10 second");
});

//or
// Setting a cron job
// cron.schedule("*/10 * * * * *", function () {
//   // Data to write on file
//   let data = `${new Date().toUTCString()} 
//                 : Server is working\n`;

//   // Appending data to logs.txt file
//   fs.appendFile("logs.txt", data, function (err) {
//     if (err) throw err;

//     console.log("Status Logged!");
//   });
// });
