# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

puts 'Starting seeding!'

dish1 = Dish.create!([{name: "Fly's Head"}, {dish_type: "Entree"}, {restaurant_id: 2}, {vegan: false}])
dish2 = Dish.create!([{name: "Tie Dye Pizza"}, {dish_type: "Appetizer"}, {restaurant_id: 3}, {vegan: false}])
dish3 = Dish.create!([{name: "2 for 1 Pizzas"}, {dish_type: "Entree"}, {restaurant_id: 1}, {vegan: false}])
dish4 = Dish.create!([{name: "Meatball Sandwich"}, {dish_type: "Entree"}, {restaurant_id: 1}, {vegan: false}])
dish5 = Dish.create!([{name: "Pepperoni Pizza"}, {dish_type: "Appetizer"}, {restaurant_id: 4}, {vegan: false}])
dish6 = Dish.create!([{name: "Cold Cut Sub"}, {dish_type: "Entree"}, {restaurant_id: 4}, {vegan: false}])
dish7 = Dish.create!([{name: "Spaghetti and Meatballs"}, {dish_type: "Entree"}, {restaurant_id: 3}, {vegan: false}])
dish8 = Dish.create!([{name: "Pork Dumplings"}, {dish_type: "Appeitzer"}, {restaurant_id: 2}, {vegan: false}])
dish9 = Dish.create!([{name: "Neopolitan Pizza"}, {dish_type: "Entree"}, {restaurant_id: 3}, {vegan: false}])
dish10 = Dish.create!([{name: "Gem Salad"}, {dish_type: "Appetizer"}, {restaurant_id: 1}, {vegan: true}])
dish11 = Dish.create!([{name: "Gin and Tonic"}, {dish_type: "Drink"}, {restaurant_id: 2}, {vegan: true}])
dish12 = Dish.create!([{name: "Cheese Pizza"}, {dish_type: "Appetizer"}, {restaurant_id: 4}, {vegan: false}])

rating1 = Rating.create!([{dish_id: 1}, {user_id: 1}, {title: "Good but Spicy!"}, {review: "Really unique dish but it is a bit spicy, make sure you like that"}, {score: 4.4}])
rating2 = Rating.create!([{dish_id: 1}, {user_id: 2}, {title: "Loved it!"}, {review: "SOOOOOOOOOOOOOoo good :), would order again"}, {score: 4.9}])
rating3 = Rating.create!([{dish_id: 1}, {user_id: 3}, {title: "I didn't love it"}, {review: "Definitely different!"}, {score: 3.4}])

rating4 = Rating.create!([{dish_id: 2}, {user_id: 1}, {title: "Overpriced"}, {review: "Novelty, and too expensive"}, {score: 2.4}])
rating5 = Rating.create!([{dish_id: 2}, {user_id: 2}, {title: "Loved it!"}, {review: "LOVE PIZZA good :), would order again"}, {score: 4.4}])
rating6 = Rating.create!([{dish_id: 2}, {user_id: 3}, {title: "I didn't hate it!"}, {review: "Definitely pizza!"}, {score: 3.7}])

rating7 = Rating.create!([{dish_id: 3}, {user_id: 1}, {title: "INCREDIBLE VALUE"}, {review: "Lasts Tessa and me 5 meals!"}, {score: 5.0}])
rating8 = Rating.create!([{dish_id: 3}, {user_id: 2}, {title: "PIZZA!!"}, {review: "Hard to argue with affordable high quality incredient pizza!"}, {score: 4.7}])
rating9 = Rating.create!([{dish_id: 3}, {user_id: 3}, {title: "YUM"}, {review: "Brother took me here it was great!"}, {score: 4.4}])

rating10 = Rating.create!([{dish_id: 4}, {user_id: 1}, {title: "Unique"}, {review: "Strange idea, flattened meatball but super good!"}, {score: 4.4}])
rating11 = Rating.create!([{dish_id: 4}, {user_id: 2}, {title: "Weird!"}, {review: "but liked it :)"}, {score: 4.4}])
rating12 = Rating.create!([{dish_id: 4}, {user_id: 3}, {title: "Different"}, {review: "Definitely different!"}, {score: 3.4}])

rating13 = Rating.create!([{dish_id: 5}, {user_id: 1}, {title: "It's pizza"}, {review: "Nothing crazy"}, {score: 2.4}])
rating14 = Rating.create!([{dish_id: 5}, {user_id: 2}, {title: "Loved Pizza!"}, {review: "LOVE PIZZA :)"}, {score: 4.4}])
rating15 = Rating.create!([{dish_id: 5}, {user_id: 3}, {title: "I didn't like it!"}, {review: "not the best pizza!"}, {score: 2.2}])

rating16 = Rating.create!([{dish_id: 6}, {user_id: 1}, {title: "Not my fav sandwich"}, {review: "Too expensive"}, {score: 1.5}])
rating17 = Rating.create!([{dish_id: 6}, {user_id: 2}, {title: "It was ok!"}, {review: "just ok!!!"}, {score: 3.4}])
rating18 = Rating.create!([{dish_id: 6}, {user_id: 3}, {title: "SO GOOD!"}, {review: "YUM!"}, {score: 4.8}])

puts 'done seeding!'