var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: "li",

  render: function() {
    var dep = this.model.get("departure");
    var dest = this.model.get("destination");
    this.$el.text(dep + dest);
    this.$el.prependTo("#flights");
  }
});

var createFlightViews = function() {
  flights.each(function(flight) {
    var fv = new app.FlightView({
      model: flight
    });
    sv.render();
  });
  // take the collection of all secrets
  // for every secret in the collection
  // create a new instance of the app
  // make sure to provide the current model
  // call render
};
