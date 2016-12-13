var app = app || {};
// A model is the individual record in the database
app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",
  defaults: {
    seat_num: "A1",
    booked: false,
    user_id: null,
    flight_id: null
  },
  initialize: function() {
    console.log("A Reservation was created");
  }
});

var flight = new app.Reservation();
