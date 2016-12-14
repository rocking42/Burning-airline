var app = app || {};

app.Reservations = Backbone.Collection.extend({
  // url: '/reservations',
  model: app.Reservation,
  initialize: function() {
    console.log("A new reservations collection was created");

    // this.on("add", function(flight) {
    //   var sv = new app.AirplaneView({
    //     model: flight
    //   });
    //   sv.render();
    // });
  }
});
