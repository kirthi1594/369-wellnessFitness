var nodemailer = require("nodemailer");
export async function sendMail(from, message, number, place, name) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        to:process.env.NODEMAILER_EMAIL,
        subject: "Enquiry Mail from TechBees",
        text:`From: ${from}\nName: ${name}\nContact No.: ${number}\nPlace: ${place}\nMessage: ${message}`,
    };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         throw new Error(error);
    //     } else {
    //         console.log("Email Sent");
    //         return true;
    //     }
    // });
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response)
            }
        })
    })
}