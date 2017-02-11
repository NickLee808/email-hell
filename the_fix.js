const log = require('./email_log.json').emails;

const dupes = log.reduce((duplicates, currentEmail) => {
  if (duplicates.hasOwnProperty(currentEmail.email) === false) {
    duplicates[currentEmail.email] = 0;
  }
  duplicates[currentEmail.email]++;
  return duplicates;
}, {});

console.log(dupes);