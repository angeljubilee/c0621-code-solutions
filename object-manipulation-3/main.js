console.log('Lodash is loaded:', typeof _ !== 'undefined');

/* function game (players, numCards)
  Create player array
  Create card array
  Shuffle card deck
  Deal cards
  Calculate winner, high score
  If tied, loop
*/
var gamers = [
  {
    name: 'Abby',
    hand: []
  },
  {
    name: 'Byron',
    hand: []
  },
  {
    name: 'Jill',
    hand: []
  },
  {
    name: 'Jack',
    hand: []
  }
];
game(gamers, 2);

function game(players, numCards) {

  // Create card deck
  var cardDeck = newDeck();
  var shuffledDeck = _.shuffle(cardDeck);
  var winners = [];
  var highScore = 0;

  while (1) {
    console.log('Start of a new round');

    // Deal cards
    for (var i = 0; i < players.length; i++) {
      for (var j = 0; j < numCards; j++) {
        players[i].hand.push(shuffledDeck.pop());
      }
    }
    // Calculate winner, high score
    for (var k = 0; k < players.length; k++) {
      console.log('Player: ', players[k]);

      var score = players[k].hand.reduce((acc, card) => {
        switch (card.rank) {
          case 'King':
          case 'Queen':
          case 'Jack':
            acc += 10;
            break;
          case 'Ace':
            acc += 11;
            break;
          default:
            acc += card.rank;
        }
        return acc;
      }, 0);
      console.log('Score: ', score);
      if (score > highScore) {
        highScore = score;
        winners = [];
        winners.push(players[k]);
      } else if (score === highScore) {
        winners.push(players[k]);
      }
    }

    if (winners.length === 1) {
      var winner = winners[0];
      console.log('Winner is', winner.name);
      return;
    }

    console.log('Tie between', winners);
    players = winners;
    winners = [];
    highScore = 0;
    players.forEach(player => {
      player.hand = [];
    });
  }
}

function newDeck() {
  var suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  var honorCards = ['King', 'Queen', 'Jack', 'Ace'];
  var cardDeck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 2; j <= 10; j++) {
      cardDeck.push(
        {
          rank: j,
          suit: suits[i]
        }
      );
    }
    for (var k = 0; k < honorCards.length; k++) {
      cardDeck.push(
        {
          rank: honorCards[k],
          suit: suits[i]
        }
      );
    }
  }
  return cardDeck;
}
