class DishSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :name, :dish_type, :vegan, :description, :average

  def average 
        if self.object.ratings.size > 0  
            ratings = self.object.ratings
            ratings.map { |rating| rating.score }.sum / ratings.size
        else 
            0
        end
  end

  has_many :ratings
end
