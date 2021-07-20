/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!balance || typeof balance !== 'number' || balance <= 0 ||
    ((balance * 10) % 10) > 0) {
    return null;
  }
  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);
  this.accounts.push(newAccount);
  this.nextAccountNumber++;
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  return this.accounts.reduce((acc, curr) => {
    return acc + curr.getBalance();
  }, 0);
};
