class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.integer :restaurant_id
      t.string :name
      t.string :dish_type
      t.boolean :vegan
      t.string :description

      t.timestamps
    end
  end
end
