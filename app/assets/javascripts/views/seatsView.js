var app = app || {};

app.SeatView = Backbone.View.extend({
  el: "#app",
  // attach events
  events: {
    'click #findFlight': 'searchFlight'
  },

  createSecret: function(e) {

  },

  render: function() {
    var seatTemplate = $("#SeatViewTemplate").html();
    this.$el.html(seatTemplate);
    var result = "";
    var arr = [];

    for (var i = 1; i <= 59; i++) {
        if (result.length === 3) {
          result += "_.";
        }
        if (i % 7 === 0) {
          arr.push(result);
          result = "";
        }
        else if (this.model.toJSON().all_seats[i].booked === true) {
          result += "c";
        }
        else {
          result += "a";
        }
      }
    $("#seat").html(arr.join("<br>"));
  }
});

// this.model.toJSON().all_seats[0].booked
// this.model.toJSON().all_seats.length
