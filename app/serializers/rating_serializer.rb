class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dish_id, :score, :title, :review

  
end
