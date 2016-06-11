const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport('smtps://greenprojectfun@gmail.com:Fred1!1!@smtp.gmail.com');


const sendEmail = (to, body, callback) => {
  const mail = {
    from: '"HackBnB 👥" <no-reply@HackBnB.com>',
    to, // list of receivers
    subject: 'Someone\'s interested in your place',
    text: body,
  };

// send mail with defined transport object
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      callback(error);
    }
    console.log('Message sent: ' + info.response);
    callback(null);
  });
};


module.exports = {
  emailJob: () => {
    const processStack = [];

    // listen for new listings that need to be processed
    process.on('message', (email) => {
      console.log('im enqueueing ', email);
      processStack.push(email);
    });

    const processEmail = (email, callback) => {
      sendEmail(email.to, email.body, callback);
    };


    const emailLoop = () => {
      if (processStack.length === 0) {
        setTimeout(emailLoop, 1000);
      } else {
        const email = processStack.pop();
        process.send({ msg: 'processing email', email });

        processEmail(email, (err) => {
          if (!err) {
            process.send({ msg: 'success email processed' });
          } else {
            processStack.push(email);
          }
          // keep processing listings
          setTimeout(emailLoop, 1000);
        });
      }
    };
    emailLoop();
  },
};
