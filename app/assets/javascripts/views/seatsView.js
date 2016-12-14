var app = app || {};

app.SeatView = Backbone.View.extend({
  el: "#app",
  // attach events
  events: {
    'click #findFlight': 'searchFlight'
  },

  createSeatView: function(e) {

  },

  render: function() {
    var seatTemplate = $("#SeatViewTemplate").html();
    this.$el.html(seatTemplate);

  var result = "";
  var arr = [];
  for (var i = 1; i <= 59; i++) {
        if (result.length === 3) {
          result += "_.";
        }
        if (i % 7 === 0) {
          arr.push(result);
          result = "";
        }
        else if (this.model.toJSON().all_seats[i].booked === true) {
          result += "c";
        }
        else {
          result += "a";
        }
      }


    var sc = $('#seat-map').seatCharts({
        map: arr,
        seats: {
            a: {
                price   : 20.00,
                classes : 'economy' //your custom CSS class
            },
            c: {
              classes : 'booked'
            }

        },
        click: function () {
            if (this.status() == 'available') {
                //do some stuff, i.e. add to the cart
                return 'selected';
            } else if (this.status() == 'selected') {
                //seat has been vacated
                return 'available';
            } else if (this.status() == 'unavailable') {
                //seat has been already booked
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });

    //Make all available 'c' seats unavailable
    sc.find('c.available').status('unavailable');

    /*
    Get seats with ids 2_6, 1_7 (more on ids later on),
    put them in a jQuery set and change some css
    */
    sc.get(['2_6', '1_7']).node().css({
        color: '#ffcfcf'
    });

    console.log('Seat 1_2 costs ' + sc.get('1_2').data().price + ' and is currently ' + sc.status('1_2'));



}
});

// this.model.toJSON().all_seats[0].booked
// this.model.toJSON().all_seats.length
