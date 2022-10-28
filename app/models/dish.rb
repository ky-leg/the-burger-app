class Dish < ApplicationRecord
    belongs_to :restaurant
    has_many :ratings 

    validates :restaurant_id, presence: true
    validates :name, presence: true
    validates :dish_type, presence: true

end
