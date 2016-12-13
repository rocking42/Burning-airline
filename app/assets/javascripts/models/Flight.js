var app = app || {};
// A model is the individual record in the database
app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",
  defaults: {
    departure: "Sydney",
    destination: "Darwin",
    duration: "1 hour",
    flight_num: 0
  },
  initialize: function() {
    console.log("A Flight was created");
  }
});

var flight = new app.Flight();

// CRUD OP
// Create
  // Post req => /secrets
    // should only run if there is no id
// s.save();

// THESE ONLY RUN WITH AN ID
// READ
  // GET /secrets/:id
// s.fetch();

// UPDATE
  // PUT || PATCH /secrets/:id => secrets#update
// s.set("content", "UPDATED");
// s.save();

// DELETE
  // DELETE /secrets/:id => secrets#destroy
// s.destroy();
