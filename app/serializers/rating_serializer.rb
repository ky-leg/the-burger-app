class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dish_id, :score, :title, :review, :restaurant, :dish, :user

  def restaurant
    self.object.dish.restaurant
  end

  def dish
    self.object.dish
  end

  def user
    self.object.user
  end
  
end
