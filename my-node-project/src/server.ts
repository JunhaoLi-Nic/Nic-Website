import express, { Application, Request, Response } from 'express';

// You might need some additional imports here for email handling, like nodemailer
import nodemailer from 'nodemailer';

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email provider
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Define the email sending route
app.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'nicholasleeeman@gmail.com', // Your email where you want to receive messages
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}): ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send the email', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
