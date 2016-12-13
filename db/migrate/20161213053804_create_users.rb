class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.boolean :admin
      t.integer :cc_num
      t.integer :expir_num
      t.integer :sec_code
      t.text :address

      t.timestamps null: false
    end
  end
end
