# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Airplane.destroy_all
Flight.destroy_all
Reservation.destroy_all
5.times do |i|
  a1 = Airplane.create airType: "##{i}747", rows: 10
  5.times do |x|
    f1 = Flight.create departure: Faker::Address.state, destination: Faker::Address.state, duration: "1 hour", date: Faker::Time.between(2.days.ago, Date.today + 10.days, :night), flight_num: x
    a1.flights << f1
    60.times do |y|
      r1 = Reservation.create seat_num: "A#{y}", booked: false
      f1.reservations << r1
    end
  end
end
