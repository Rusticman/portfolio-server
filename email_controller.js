const nodemailer = require('nodemailer');
const config = require('./config');
module.exports = (req, res, next) => {

  const message = req.body.message;
  const email = req.body.email;
  const person = req.body.person;


  const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: config.email, // Your email id
          pass: config.password // Your password
      }
  });

  const mailOptions = {
    from: person, // sender address
    to: config.email, // list of receivers
    subject: person + ' - ' + email, // Subject line
    text: message //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.error(error);
        throw err;
    }
        console.log('Message sent: ' + info.response);
        res.json({success: true});

});

}
