class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :dish_id
      t.integer :user_id
      t.integer :score
      t.string :title
      t.string :review

      t.timestamps
    end
  end
end
