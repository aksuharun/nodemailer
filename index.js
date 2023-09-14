var nodemailer = require('nodemailer')
/*
if you are using ES Modules:
import nodemailer from 'nodemailer'
*/

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL',
      pass: 'YOUR_PASSWORD'
    }
  })

  var mailOptions = {
    from: 'YOUR_EMAIL',
    to: 'harun16aksu@gmail.com',
    subject: 'Hello World!',
    text: 'Hello, I am Harun and I used Node.js to send you this mail.'
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  