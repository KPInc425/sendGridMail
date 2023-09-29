require('dotenv').config({ path: '.env' });

module.exports = {
  PORT: process.env.PORT || 3015,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SOURCE_EMAIL: process.env.SOURCE_EMAIL,
  DESTINATION_EMAILS: process.env.DESTINATION_EMAILS,
}