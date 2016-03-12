Template.cardsOnHand.helpers({
  cardsOnHand: function() { return Session.get('currentPlayer').cardsOnHand },
  equals: function(a, b) { return a == b }
});
