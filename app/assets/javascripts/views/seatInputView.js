var app = app || {};

app.SeatInputView = Backbone.View.extend({
  el: "#seatInput",

  events: {
    "click #sendData": "sendData"
  },

  sendData: function() {
    var a1 = app.reservations.get(this.$el.find("span")[0].id);
    var user_id =  parseInt($("input")[0].value);
    a1.set("user_id", user_id);
    a1.set("booked", true);
    a1.save();
  },

  render: function() {
    var seatTemplate = $("#SeatInputViewTemplate").html();
    this.$el.html(seatTemplate);
  }
});
