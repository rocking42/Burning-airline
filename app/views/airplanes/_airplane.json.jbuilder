json.id airplane.id
json.airType airplane.airType
json.capacity airplane.capacity
json.rows airplane.rows
json.created_at airplane.created_at
json.flights airplane.flights do |flight|
  json.flight_num flight.flight_num
  json.flight_id flight.id
end

json.url airplane_url(airplane, format: :json)
