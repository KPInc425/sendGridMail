const fs = require('fs');

var sendGridKey = '';

fs.readFile('/creds/.env', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  sendGridKey = data;
  console.log("stuff is here", sendGridKey);

  module.exports = {
    PORT: process.env.PORT || 3015,
    SENDGRID_API_KEY: sendGridKey,
    SOURCE_EMAIL: process.env.SOURCE_EMAIL,
    DESTINATION_EMAILS: process.env.DESTINATION_EMAILS,
  }
});

module.exports = {
  PORT: process.env.PORT || 3015,
  SENDGRID_API_KEY: "",
  SOURCE_EMAIL: process.env.SOURCE_EMAIL,
  DESTINATION_EMAILS: process.env.DESTINATION_EMAILS,
}