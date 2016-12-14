var app = app || {};
// in charge of initalizing the app

$(document).ready(function() {
  app.flights = new app.Flights();
  app.flights.fetch().done(function() {
    app.router = new app.Router();
    Backbone.history.start(); // Pay attention to hash fragments
  });

  app.reservations = new app.Reservations();
  app.reservations.fetch().done(function() {

  }
  );

  app.airplanes = new app.Airplanes();
  app.airplanes.fetch();
});
