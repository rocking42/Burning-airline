class User < ActiveRecord::Base
  has_secure_password
  has_many :reservations
  has_many :flights, through: :reservations
end
