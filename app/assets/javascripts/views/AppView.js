var app = app || {};

app.AppView = Backbone.View.extend({
  // this.el and this.$el
  el: "#app",
  render: function() {
    console.log("app.AppView should be on the page");
    var appViewTemplate = $("#AppViewTemplate").html();
    this.$el.html(appViewTemplate);
    // Get the html from #AppViewTemplate
    // set the html of this.$el

    var secretInputView = new app.FlightInputView();
    secretInputView.render();
  }

});
