import nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

const sendEmail = async (emailOptions: EmailOptions): Promise<SentMessageInfo> => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let info = await transporter.sendMail({
    from: '"Example Sender" <sender@example.com>',
    to: emailOptions.to,
    subject: emailOptions.subject,
    text: emailOptions.body,
    html: `<b>${emailOptions.body}</b>`
  });

  console.log("Message sent: %s", info.messageId);
  return info;
}
