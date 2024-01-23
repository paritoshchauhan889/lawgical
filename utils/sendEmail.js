import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.MAIL_CLIENT_ID, //clientId
    process.env.MAIL_CLIENT_SECRET, //client secrete
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.MAIL_REFRESH_TOKEN, //refresh token
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  console.log(accessToken, "---------------------");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "lawgicalassociates19@gmail.com",
      accessToken,
      clientId: process.env.MAIL_CLIENT_ID,
      clientSecret: process.env.MAIL_CLIENT_SECRET,
      refreshToken: process.env.MAIL_REFRESH_TOKEN,
    },
  });

  return transporter;
};

const sendEmail = async ({ from, to, subject, html, text, attachments }) => {
  const transporter = await createTransporter();
  const mailOptions = {
    from: {
      name: "Lawgical Associates",
      address: from,
    },
    to,
    subject,
    html,
    text,
    attachments: attachments,
  };

  let result = await transporter.sendMail(mailOptions);
  return result;
};

export default sendEmail;
