class User < ApplicationRecord
    has_secure_password
    has_many :ratings
    has_many :dishes, through: :ratings
    has_many :restaurants, through: :dishes

    # validations
    validates :username, uniqueness: true, presence: true
    validates :first_name, presence: true
    # validates :age, presence: true 
    validates :location, presence: true

    def User.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                      BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
    end

end
