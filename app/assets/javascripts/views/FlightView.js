var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: "li",

  render: function() {
    var dep = this.model.get("departure");
    var dest = this.model.get("destination");
    var seats =  this.model.get("available_seats");
    var flight_num = this.model.get("flight_num");
    var airType = this.model.get("airType");
    var flight_id = this.model.get("id");
    var date = new Date(this.model.get("date"));
    this.$el.html(dep + " " + dest + " " + seats + flight_num + " " + airType + " " + date + " " + "<a href=/app#flights/" + flight_id + ">Select seat</a>");
    this.$el.prependTo("#flights");
  }
});

// var createFlightViews = function() {
//   flights.each(function(flight) {
//     var fv = new app.FlightView({
//       model: flight
//     });
//     sv.render();
//   });
//   // take the collection of all secrets
//   // for every secret in the collection
//   // create a new instance of the app
//   // make sure to provide the current model
//   // call render
// };
