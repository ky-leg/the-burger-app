class DishesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    
    def index
        dishes = Dish.all
        render json: dishes, include: ['ratings']
    end

    def show 
        dish = Dish.find(params[:id])
        render json: dish
        # , include: ['rfis', 'rfis.users']
    end

    def create 
        dish = Dish.create!(dish_params)
        dishes = Dish.all
        render json: dishes, status: :created
    end

    def show_dishes
        user = User.find(params[:id])
        dishes = user.dishes
        render json: dishes
    end

    def destroy 
        puts 'yo'
        dish = Dish.find(params[:id])
        dish.destroy
        head :no_content
    end

    private
    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def dish_params
        params.permit(:restaurant_id, :name, :dish_type, :vegan)
    end

end
