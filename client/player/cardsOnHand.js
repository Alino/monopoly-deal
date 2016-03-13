Template.cardsOnHand.helpers({
  cardsOnHand: function() { return Session.get('currentPlayer').cardsOnHand },
});
