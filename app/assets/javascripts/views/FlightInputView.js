var app = app || {};

app.FlightInputView = Backbone.View.extend({
  el: "#flightForm",
  // attach events
  events: {
    'keydown': 'searchFlight'
  },
  // We select an element (or create an element)
  // Do this by using el or tagname
  // attach events
  // Have functions (render)
  searchFlight: function(e) {
    console.log("hello");
    var toInput = this.$el.find("#to").val();
    var fromInput = this.$el.find("#from").val();
    var result1 = app.flights.filter(function(flight) {
      if(flight.toJSON().departure) {
        return flight.toJSON().departure.startsWith(fromInput);
      }
    });
    // var result = app.flights.where({});
    console.log(result1);
    $("#flights").html("");
    _.each(result1, function(result) {
      var sv = new app.FlightView({
        model: result
      });
      sv.render();
     });
  },

  checkForEnter: function(e) {
    var ENTER_KEY = 13;
    if(e.which === ENTER_KEY && !e.shiftKey) {
      e.preventDefault();
      this.createSecret();
    }
  },

  render: function() {
    console.log("app.flightInputView should be loaded");
    var fivTemplate = $("#FlightInputViewTemplate").html();
    this.$el.html(fivTemplate);
  }
});
