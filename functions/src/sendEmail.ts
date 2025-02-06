import { https, params } from 'firebase-functions/v2';
import * as nodemailer from 'nodemailer';
import cors from 'cors';
import emailValidator from 'email-validator';

const gmailEmail = params.defineSecret('GMAIL_EMAIL');
const gmailPassword = params.defineSecret('GMAIL_PASSWORD');

const corsHandler = cors({ origin: true });

export const sendEmail = https.onRequest(
  {
    secrets: [gmailEmail, gmailPassword],
    timeoutSeconds: 10,
    memory: '128MiB',
  },
  async (req, res) => {
    corsHandler(req, res, async () => {
      if (!gmailEmail.value() || !gmailPassword.value()) {
        res.status(500).send({ success: false, error: 'Internal server error' });
        return;
      }

      if (req.method !== 'POST') {
        res.status(405).send({ success: false, error: 'Method not allowed' });
        return;
      }

      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        res.status(400).send({ success: false, error: 'Missing required fields' });
        return;
      }

      if (name.length > 100 || email.length > 100 || message.length > 5000) {
        res.status(400).send({ success: false, error: 'Input exceeds allowed length' });
        return;
      }

      if (!emailValidator.validate(email)) {
        res.status(400).send({ success: false, error: 'Invalid email address' });
        return;
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailEmail.value(),
          pass: gmailPassword.value(),
        },
      });

      const mailOptions = {
        from: `${name} <${gmailEmail.value()}>`,
        to: gmailEmail.value(),
        replyTo: email,
        subject: `New message from ${name}`,
        text: `Message: ${message}\n\nContact email: ${email}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully from ${email}`);
        res.status(200).send({ success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ success: false, error: 'Failed to send email' });
      }
    });
  }
);
