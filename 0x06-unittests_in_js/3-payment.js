const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalshipping) {
  const result = Utils.calcuteNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
