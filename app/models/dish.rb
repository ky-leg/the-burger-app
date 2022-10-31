class Dish < ApplicationRecord
    belongs_to :restaurant
    has_many :ratings 

    accepts_nested_attributes_for :ratings

    def average 
        if ratings.size > 0  
            ratings = self.ratings
            ratings.map { |rating| rating.score }.sum / ratings.size
        else 
            0
        end
    end

    validates :restaurant_id, presence: true
    validates :name, presence: true
    validates :dish_type, presence: true

end
