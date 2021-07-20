/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!amount || typeof amount !== 'number' || amount <= 0 ||
    ((amount * 10) % 10) > 0) {
    return false;
  }
  this.transactions.push(new Transaction('deposit', amount));
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (!amount || typeof amount !== 'number' || amount <= 0 ||
    ((amount * 10) % 10) > 0) {
    return false;
  }

  this.transactions.push(new Transaction('withdrawal', amount));
  return true;
};

Account.prototype.getBalance = function () {

  return this.transactions.reduce((acc, curr) => {
    if (curr.type === 'deposit') {
      return acc + curr.amount;
    } else {
      return acc - curr.amount;
    }
  }, 0);
};
