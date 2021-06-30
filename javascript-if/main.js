/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return '7 is /"neutral/"';
  } else if (pH < 7) {
    return 'anything from 0 up to 7 is /"acid/"';
  } else if (pH > 7) {
    return 'anything from 14 down to 7 is /"base/"';
  } else {
    return 'anything else is an /"invalid pH level/"';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko' :
      return "We're the warner brothers!";
    case 'wakko' :
      return "We're the warner brothers!";
    case 'dot' :
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
