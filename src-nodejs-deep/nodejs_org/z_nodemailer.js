//https://www.geeksforgeeks.org/what-is-mevn-stack/
//Install nodemailer
//>npm install nodemailer -S
//>npm install touch
//Create server.js file directly or use command
//>touch server.js

// const nodemailer = require('nodemailer');
 
 
// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'xyz@gmail.com',
//         pass: '*************'
//     }
// });
 
// let mailDetails = {
//     from: 'xyz@gmail.com',
//     to: 'abc@gmail.com',
//     subject: 'Test mail',
//     text: 'Node.js testing mail for GeeksforGeeks'
// };
 
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'azatsatklichov@gmail.com',
    pass: 'miskin1977'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});