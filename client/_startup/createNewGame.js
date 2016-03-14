Template.createNewGame.helpers({
    randomName: getRandomName()
});

Template.createNewGame.events({
    'click #buttonNewGame': function(e) {
        e.preventDefault();
        numberOfPlayers = parseInt($('[data-numberOfPlayers]').val(), 10);
        playerName = $('[data-playerName]').val();
        newGame(numberOfPlayers, playerName);
    }
});