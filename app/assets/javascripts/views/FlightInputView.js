var app = app || {};

app.FlightInputView = Backbone.View.extend({
  el: "#flightForm",
  // attach events
  events: {
    'click #findFlight': 'searchFlight'
  },
  // We select an element (or create an element)
  // Do this by using el or tagname
  // attach events
  // Have functions (render)
  searchFlight: function(e) {
    var toInput = this.$el.find("#to").val();
    var fromInput = this.$el.find("#from").val();
    var result1 = app.flights.where({departure: fromInput, destination: toInput});
    var result = app.flights.where({});
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
