const Bank = require('./Bank');

class Chase extends Bank {
  processPayment() {
    console.log(`Your payment of ${this.amount}`)
  }
  processRefund() {
    console.log(`A refund`);
  }
}

module.exports = Chase;