var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight,
  initialize: function() {
    console.log("A new flight collection was created");

    this.on("add", function(flight) {
      var sv = new app.FlightView({
        model: flight
      });
      sv.render();
    });
  }
});

// var secrets = new app.Secrets();
// // GET /secrets
// secrets.fetch();
// console.log(secrets.toJSON());
