import { useState, useEffect } from "react"; 
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Stack, Typography, Button } from "@mui/material"
import Ratings from './Ratings'
import RatingsFilterForm from './RatingsFilter/RatingsFilterForm'

function DishRatingsList() {
    //redux stores 
    const restaurants = useSelector((state) => state.restaurants.entities)
    const ratings = useSelector((state) => state.ratings.entities)
    const dishes = useSelector((state) => state.dishes.entities)

    const params = useParams() 
    console.log(dishes, params.dish_id)

    function filteredDishFunction() {
        return dishes.find(dish => parseInt(dish.id) === parseInt(params.dish_id))
    }

    const dish = filteredDishFunction()

    function filteredRestaurantFunction(){
        return restaurants.find(restaurant => parseInt(dish.restaurant_id) === parseInt(restaurant.id))
    }

    const restaurant = filteredRestaurantFunction()
    const dishRatings = filteredDishFunction().ratings

    console.log(dishRatings, params.dish_id)

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Ratings for {dish.name} from {restaurant.name}</Typography>
            <Stack mt={2} spacing={3}>
            {ratings ? (
                <Ratings ratings={dishRatings} displayUserButton={true} displayTitleOff={true}/>
            ) : (
                <>
                <h2>No Ratings Found</h2>
                <Button as = {Link} to="/">
                    Back To Homepage
                </Button>
                </>
            )}
            {params.dish_id? 
            (
            <Button component={Link} to={`/ratings/new/${dish.restaurant_id}/${dish.id}/`} variant="outlined">
            Rate This Dish
            </Button> 
            ):(
            <Button component={Link} to="/ratings/new" variant="outlined">
                Create New Rating
            </Button> 
            )}
            </Stack>
        </Container>
    )
}

export default DishRatingsList;

// NOTES 
// a container for restaurants and its filters
// pulls ratings and restaurants from Redux 
// uses useState hook to initialize various variables which will be passed 
// to serve the filter function. 
// then renders a container with a name and stack containing 
// <RatingsFilterForm>, and then checks if the filteredRatings() is longer
// than 0, if so it passes them into the <Ratings> component, if not 
// it returns a button to return home. 
// finally there is a button at the bottom which takes the user to 
// the new rating page. 

// UNUSED Function  

// HANDLES DELETING RATING, NOT IN USE, takes in id 
// function handleDeleteRating(id){
//     fetch(`/ratings/${id}`, {
//         method: 'DELETE',
//     })
//     // .then(() => {
//     //     const newRatings = ratings.filter(rating => (rating.id !== id))
//     //     setRatings(newRatings)
//     // })
// }