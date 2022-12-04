class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :username, :location

  has_many :ratings
end

