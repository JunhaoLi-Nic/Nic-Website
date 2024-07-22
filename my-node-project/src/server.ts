import express, { Application, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


// At the very top of your main server file


const app: Application = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes and origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Define the email sending route
app.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, message, website } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nicholasleeeman@gmail.com',
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} they are website is  ${website} (${email}): ${message}`
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
