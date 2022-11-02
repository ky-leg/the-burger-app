class Restaurant < ApplicationRecord
    has_many :dishes, dependent: :destroy

    validates :name, presence: true
    validates :location, presence: true
    # validates :established, presence: true
end
