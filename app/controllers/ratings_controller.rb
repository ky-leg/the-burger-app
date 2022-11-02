class RatingsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        ratings = Rating.all
        render json: ratings
    end

    def show 
        rating = Rating.find(params[:id])
        render json: rating
    end

    def create 
        puts "i'm hit!"
        rating = Rating.create!(rating_params)
        ratings = Rating.all
        render json: ratings, status: :created
    end

    def show_ratings
        user = User.find(params[:id])
        ratings = user.ratings
        render json: ratings
    end

    def destroy 
        rating = Rating.find(params[:id])
        rating.destroy
        head :no_content
    end

    private
    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def rating_params
        params.permit(:dish_id, :user_id, :score, :title, :review)
    end

end
