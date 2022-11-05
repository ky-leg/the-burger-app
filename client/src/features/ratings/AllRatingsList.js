import { useState, useEffect } from "react"; 
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Stack, Typography, Button } from "@mui/material"
import Ratings from './Ratings'
import RatingsFilterForm from './RatingsFilterForm'

function AllRatingsList() {
    //redux stores 
    const restaurants = useSelector((state) => state.restaurants.entities)
    const ratings = useSelector((state) => state.ratings.entities)

    //filter setup 
    const allLocations = restaurants.map((r) => r.location)
    const allRestaurants = restaurants.map((r) => r.name)
    const locations = ["-", ...new Set(allLocations)]
    const restaurantNames = ["-", ...new Set(allRestaurants)]
    const [ restaurantFilter, setRestaurantFilter ] = useState("-")
    const [ neighborhoodFilter, setNeighborhoodFilter ] = useState("-")

    //filter switch (TO BE REFACTORED??)
    const filteredRatings = () => {
        if (neighborhoodFilter === "-" && restaurantFilter === "-")
        {
            return ratings
        }
        else if  (neighborhoodFilter !== "-" && restaurantFilter === "-"){
            return ratings.filter((rating => (rating.restaurant.location === neighborhoodFilter)))
        }
        else if (restaurantFilter !== "-" && neighborhoodFilter === "-"){
            return ratings.filter((rating => (rating.restaurant.name === restaurantFilter)))
        }
        else {
            ratings.filter((rating => (rating.restaurant.name === restaurantFilter)))
            .filter((rating)=> (rating.restaurant.location === neighborhoodFilter))
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Latest Ratings</Typography>
            <Stack mt={2} spacing={3}>
                <RatingsFilterForm 
                    neighborhoodFilter={neighborhoodFilter} 
                    restaurantFilter={restaurantFilter} 
                    locations={locations} 
                    restaurantNames={restaurantNames}
                    setRestaurantFilter={setRestaurantFilter}
                    setNeighborhoodFilter={setNeighborhoodFilter}
                />
            {filteredRatings().length > 0 ? (
                <Ratings ratings={filteredRatings()}/>
            ) : (
                <>
                <h2>No Ratings Found</h2>
                <Button as = {Link} to="/">
                    Back To Homepage
                </Button>
                </>
            )}
                <Button component={Link} to="/ratings/new" variant="outlined">
                    Create New Rating
                </Button>       
            </Stack>
        </Container>
    )
}

export default AllRatingsList;

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