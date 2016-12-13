var app = app || {};
// A model is the individual record in the database
app.Airplane = Backbone.Model.extend({
  urlRoot: "/flights",
  defaults: {
    airType: "747",
    capacity: 90,
    rows: 20,
  },
  initialize: function() {
    console.log("An airplane was created");
  }
});

var airplane = new app.Airplane();
