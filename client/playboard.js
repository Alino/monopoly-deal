Template.playboard.helpers({
  currentPlayerName: function() {
    return Session.get('currentPlayer').name;
  },
  cardsOnBoard: function() {
    return Session.get('cardsOnBoard');
  }
});

Template.playboard.events({
  'click #buttonNewGame': function(e) {
    e.preventDefault();
    newGame();
  }
});