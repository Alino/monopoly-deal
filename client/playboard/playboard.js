Template.playboard.helpers({
  currentPlayerName: function() {
    return Session.get('currentPlayer').name;
  },
  cardsOnBoard: function() {
    return Session.get('cardsOnBoard');
  }
});

Template.playboard.events({
  'click [data-endGame]': function(e) {
    e.preventDefault();
    endGame();
  }

});