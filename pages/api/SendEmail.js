import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  if (req.method === "POST") {
    let data;
    if (typeof req.body === "string") {
      data = JSON.parse(req.body);
    } else {
      data = req.body;
    }

    const { subject, message } = data;
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      auth: {
        user: "XXXXXXXXX",
        pass: "XXXXXXXXX",
      },
    });
    const mailOptions = {
      from: "evolvesmtp@gmail.com",
      to: "contact@evolveglobalsolutions.com",
      subject: subject, 
      text: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return res.status(200).send("Email Sent");
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Could not send email");
    }
  }
}
