json.id flight.id
json.departure flight.departure
json.destination flight.destination
json.duration flight.duration
json.date flight.date
json.flight_num flight.flight_num
json.available_seats flight.reservations.where(booked: false).count
json.airType flight.airplane.airType if flight.airplane
json.all_seats flight.reservations do |reservation|
  json.seat_num reservation.seat_num
  json.user_id reservation.user_id
  json.seat_user reservation.user.name if reservation.user
  json.booked reservation.booked
end

json.url flight_url(flight, format: :json)
