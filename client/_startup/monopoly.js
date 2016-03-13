if (Meteor.isClient) {
Session.set('isGameInProgress', false);
Session.setDefault('cardsOnBoard', []);
players = [];

Player = function(name) {
  this.name = name;
  this.cardsOnHand = [];
  this.cardsInMoney = [];
  this.cardsInProperties = [];
};
Session.setDefault('currentPlayer', new Player());


Player.prototype.getAllPropertyColors = function() {
  return _.uniq(_.pluck(this.cardsInProperties,'color'));
};

KartaPenazi = function(value) {
  this.cardType = 'money';
  this.value = value;
  cardsOnBoard = Session.get('cardsOnBoard');
  cardsOnBoard.push(this);
  Session.set('cardsOnBoard', cardsOnBoard);
  console.log(Session.get('cardsOnBoard'));
};
// rent = [
//   { value: 1 },
//   { value: 3 },
//   { value: 5 }
// ]
KartaPozemku = function(name, color, value, rent) {
  this.cardType = 'property';
  this.name = name;
  this.color = color;
  this.value = value;
  this.currentColor = null; // storage for wildcard or multi-colored card
  this.rent = rent;
  this.numberOfTotalCardsForCollection = this.rent.length;
  this.actions = [];
  cardsOnBoard = Session.get('cardsOnBoard')
  cardsOnBoard.push(this);
  Session.set('cardsOnBoard', cardsOnBoard);
  // wild card
  if (this.color == 'all') {
    var actionZmenitFarbu = function(selectedColor) {
      this.currentColor = selectedColor;
    };
    this.actions.push();
  }
  // multi-colored
  if (_.isArray(this.color)) {
    this.actions.push();
  }
};
KartaAkcna = function(name, description, value, type) {
  this.cardType = 'action';
  this.name = name;
  this.description = description;
  this.value = value;
  this.type = type; // podraz, vymahacDlhov, pasca, mamNarodeniny, naStart, nutenaDohoda, najomVsetci, najomJeden, hovorimNie, dvojityNajom, dom, hotel
  self = this;
  switch (this.type) {
    case 'podraz':
        self.action = function() {
          console.log('urobil podraz');
        }
      break;
    case 'vymahacDlhov':
        self.action = function() {
          console.log('vymahal dlhy');
        }
    default:

  }
  cardsOnBoard = Session.get('cardsOnBoard')
  cardsOnBoard.push(this);
  Session.set('cardsOnBoard', cardsOnBoard);
}
znicHracov = function() {
  console.log("nicim hracov");
  players = [];
  player1 = '';
};
vytvorHracov = function() {
  znicHracov();
  console.log("vytvaram hracov");
  player1 = new Player("player1");
  players.push(player1);
  Session.set('currentPlayer', player1);
};
znicKarty = function() {
  console.log("nicim karty");
  Session.set('cardsOnBoard', []);
};
vytvorKarty = function() {
  znicKarty();
  console.log("vytvaram karty");
  // 20 money cards, including 6 1M cards, 5 2M cards, 3 3M cards, 3 4M cards, 2 5M cards and 1 10M card.
   for (var i=0; i<6; i++) { kartaPenazi = new KartaPenazi(1); }
  // for (var i=0; i<5; i++) { kartaPenazi = new KartaPenazi(2); }
  // for (var i=0; i<3; i++) { kartaPenazi = new KartaPenazi(3); }
  // for (var i=0; i<3; i++) { kartaPenazi = new KartaPenazi(4); }
  for (var i=0; i<2; i++) { kartaPenazi = new KartaPenazi(5); }
  for (var i=0; i<1; i++) { kartaPenazi = new KartaPenazi(10); }
  // 39 property cards, including 28 normal property cards, 9 bi-colored property wild cards and 2 multi-colored property wild cards
  kartaPozemku = new KartaPozemku('Obchodna ulica', 'blue', 4, [3, 8]);
  kartaPozemku = new KartaPozemku('Mlynske nivy', 'green', 3, [2, 4, 7]);
  // 47 action cards (can use as money cards), including 10 color rent cards, 3 any rent cards, 2 Deal Breakers, 3 Forced Deal cards, 3 Sly Deal cards, 3 Just Say No Cards, 3 Debt Collectors, 3 It's My Birthday cards, 2 Double the Rent cards, 3 houses, 2 hotels and 10 Pass Go cards.
  // kartaAkcna = new KartaAkcna('Pasca', 'ukradni jeden pozemok ktory nieje sucastou kompletnej kolekcie jednemu hracovi', 3, 'pasca');
};
zamiesajKarty = function() {
  console.log("miesam karty");
  var shuffle = function(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
  }
  var cardsOnBoard = Session.get('cardsOnBoard')
  shuffle(cardsOnBoard);
  Session.set('cardsOnBoard', cardsOnBoard);
};
rozdajKarty = function() {
  console.log("rozdavam karty");
  for(var p=0; p<players.length; p++) {
    var cardsOnBoard = Session.get('cardsOnBoard');
    players[p].cardsOnHand = cardsOnBoard.splice(0, 5);
    Session.set('cardsOnBoard', cardsOnBoard);
    Session.set('currentPlayer', players[p]);
  }
};


newGame = function() {
  console.log('creating new game');
  vytvorHracov();
  vytvorKarty();
  zamiesajKarty();
  rozdajKarty();
  Session.set('isGameInProgress', true);
};

endGame = function() {
  Session.set('isGameInProgress', false);
};



}
