const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    try {

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'tokeshwars@webmobtech.com', // generated ethereal user
              pass: 'Tiku123+-', // generated ethereal password
            },
          });

          let info = await transporter.sendMail({
            from: '"Tokeshwar Sahu 👻" <tokeshwars@webmobtech.com>', // sender address
            to: "deexitp@webmobtech.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });

          console.log("Message sent: %s", info.messageId);

        res.json(info);
    } catch (error) {
        return res.status(500).send(error)
    }
};

module.exports = sendMail;