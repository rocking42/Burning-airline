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
  createSecret: function(e) {
    // I want to select the text area and get the value of it
    // var userInput = this.$el.find("textarea").val();
    // var secret = new app.Secret({
    //   content: userInput
    // });
    // secret.save().done(function() {
    //   app.secrets.add(secret);
    //
    // });
    // this.$el.find("textarea").val("").focus();
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
