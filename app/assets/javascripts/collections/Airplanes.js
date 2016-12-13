var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: '/airplanes',
  model: app.Airplane,
  initialize: function() {
    console.log("A new airplane collection was created");

    // this.on("add", function(flight) {
    //   var sv = new app.AirplaneView({
    //     model: flight
    //   });
    //   sv.render();
    // });
  }
});
