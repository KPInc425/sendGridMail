const fs = require('fs');

let sendGridKey = fs.readFileSync('/creds/copy.env').toString()

module.exports = {
  PORT: process.env.PORT || 3015,
  SENDGRID_API_KEY: sendGridKey,
  SOURCE_EMAIL: process.env.SOURCE_EMAIL,
  DESTINATION_EMAILS: process.env.DESTINATION_EMAILS,
}