class RestaurantsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        restaurants = Restaurant.all
        render json: restaurants, include: ['dishes', 'dishes.ratings']
    end

    def show 
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, include: ['dishes']
    end

    def create 
        restaurant = Restaurant.create!(restaurant_params)
        restaurants = Restaurant.all
        render json: restaurants, status: :created
    end

    def show_restaurants
        user = User.find(params[:id])
        restaurants = user.restaurants
        render json: restaurants
    end

    def destroy 
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        head :no_content
    end

    private
    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def restaurant_params
        params.permit(:name, :location)
    end

end
