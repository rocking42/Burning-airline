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
    console.log("app.flightInputView should be loaded");
    var seatTemplate = $("#SeatViewTemplate").html();
    this.$el.html(seatTemplate);
  }
});
