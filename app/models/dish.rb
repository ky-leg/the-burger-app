class Dish < ApplicationRecord
    belongs_to :restaurant
    has_many :ratings, dependent: :destroy, :inverse_of => :dish

    accepts_nested_attributes_for :ratings

    validates :restaurant_id, presence: true
    validates :name, presence: true
    validates :dish_type, presence: true

end
