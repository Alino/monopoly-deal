Template.registerHelper('equals', function(a, b) { return a == b });
Template.registerHelper('indexEquals', function(a, b) { return a == b-1 });
Template.registerHelper('isGameInProgress', function() { return Session.get('isGameInProgress') });
Template.registerHelper('isWaitingForOtherPlayers', function() { return Session.get('isWaitingForOtherPlayers') });
Template.registerHelper('cardsOnHand', function() { return Session.get('currentPlayer').cardsOnHand });