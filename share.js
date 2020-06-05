const medhelp = require('./MedHelp');
const myHelper = new medhelp.MedHelp('./data.json');
const nodemailer = require('nodemailer');

function shareData() {
	var transport = nodemailer.createTransport({
	  host: "smtp.gmail.com",
    port: 465,
	  auth: {
	    user: document.getElementById("userEmailAddress").value,
	    pass: document.getElementById("userEmailPassword").value
	  }
	});
  var mailOptions = {
    from: document.getElementById("userEmailAddress").value,
    to: document.getElementById("recipientEmail").value,
    subject: 'MedHelp Data!',
    text: JSON.stringify(myHelper.getData())
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

document.getElementById("sendBtn").onclick = () => {shareData()};