var app = app || {};

// This is our routes file, controllers and actions in one
app.Router = Backbone.Router.extend({
  routes: {
    '': "initializeFlightApp",
    "flights/:id" : "showFlight",
    "flights": "showFlight",
    "*error": "error"
  },
  // From here it is controllers and actions
  initializeFlightApp: function() {
    console.log("hello");
    var appView = new app.AppView();

    appView.render();
  },
  showFlight: function(params) {
    app.reservations.url = '/flight_reservations/' + params;
    app.flights.fetch();
    app.reservations.fetch().done(function() {
      var flight = app.flights.get(parseInt(params));
      var seatView = new app.SeatView({model: flight});
      var seatInputView = new app.SeatInputView();
      seatInputView.render();
      seatView.render();
    });
    window.setInterval(function() {
    app.flights.fetch();
    app.reservations.fetch().done(function() {
      var flight = app.flights.get(parseInt(params));
      var seatView = new app.SeatView({model: flight});
      var seatInputView = new app.SeatInputView();
      seatInputView.render();
      seatView.render();
    });
  }, 5000);

  },
  error: function() {
    console.log("wrong");
  }

});
