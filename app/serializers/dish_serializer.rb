class DishSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :name, :dish_type, :vegan, :description
end
