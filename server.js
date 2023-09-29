const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { PORT, SENDGRID_API_KEY, SOURCE_EMAIL, DESTINATION_EMAILS } = require('./config');
const app = express();

app.use(cors());
console.log('SENDGRID_API_KEY: ', SENDGRID_API_KEY);

sgMail.setApiKey(SENDGRID_API_KEY);

app.use(express.json());

console.log('DESTINATION_EMAILS: ', DESTINATION_EMAILS)
const destinationEmails = DESTINATION_EMAILS.split(';');

app.post('/send-email', async (req, res) => {
  const { subject, text,  html } = req.body;
  const msg = {
    to: destinationEmails,
    from: SOURCE_EMAIL,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Email sending failed: ', error);
    res.status(500).send({message: 'Email sending failed'});
  }
});

app.get('/status', (req, res) => {
  const staus = {
    "Status": "Running"
  };
  res.send(staus);
});

app.listen(PORT, () => {
  // console.log(config)
  console.log('Server is listening on port:', PORT);
});