var app = app || {};

app.SeatInputView = Backbone.View.extend({
  el: "#seatInput",

  events: {
    "click #sendData": "sendData"
  },

  sendData: function() {
    var a1 = app.reservations.get(this.$el.find(".flying")[0].id);
    var user_id =  parseInt($("input")[0].value);
    a1.set("user_id", user_id);
    a1.set("booked", true);
    a1.save();
  },

  render: function() {
    var templateMarkup = $("#SeatInputViewTemplate").html();
    var dynamicTemplateMarkup = _.template(templateMarkup);
    var compiledTemplate = dynamicTemplateMarkup(
  this.model.toJSON()
  );
  this.$el.html(compiledTemplate);
  }
});
