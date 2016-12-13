class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :departure
      t.string :destination
      t.string :duration
      t.datetime :date
      t.integer :flight_num
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
