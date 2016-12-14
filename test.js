function find() {
  result = "";
  arr = [];
  for (var i = 1; i <= 60; i++) {
      if (result.length === 3) {
        result += "_.";
      }

      if (i % 7 === 0) {
        arr.push(result);
        result = "";
      }
      else if (i % 3 === 0) {
        result += "c";
      }
      else {
        result += "a";
      }
    }
  console.log(arr);
}

find();

// this.model.toJSON().all_seats[0].booked
// this.model.toJSON().all_seats.length
