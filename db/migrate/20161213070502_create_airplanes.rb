class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.text :airType
      t.integer :capacity
      t.integer :rows

      t.timestamps null: false
    end
  end
end
