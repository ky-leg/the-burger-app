class Rating < ApplicationRecord
    belongs_to :user
    belongs_to :dish

    # def restaurant
    #     self.dish.restaurant
    # end

    # def dish
    #     self.dish
    # end

end
