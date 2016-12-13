var app = app || {};

// This is our routes file, controllers and actions in one
app.Router = Backbone.Router.extend({
  routes: {
    '': "initializeFlightApp",
    "*error": "error"
  },
  // From here it is controllers and actions
  initializeFlightApp: function() {
    console.log("hello");
    var appView = new app.AppView();

    appView.render();
  },
  error: function() {
    console.log("wrong");
  }
});
