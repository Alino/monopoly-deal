Template.card.helpers({
  color: function() {
    switch (this.color) {
      case "blue":
        return "#4E86DF";
        break;
      case "green":
        return "#167C00";
        break;
      default:

    }
    return "#167C00"
  }
});

Template.cardRentRow.helpers({
  indexFrom1: function() {
    return this.index + 1;
  }
});