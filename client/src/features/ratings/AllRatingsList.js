import { useState } from "react"; // eslint-disable-next-line
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack, Typography, Button } from "@mui/material"
import { fetchRatings } from "../ratings/ratingsSlice";
import Ratings from './Ratings'
import RatingsFilterForm from './RatingsFilter/RatingsFilterForm'

function AllRatingsList({user}) {
    const dispatch = useDispatch(); 
    const history = useNavigate(); 


    //redux stores 
    const restaurants = useSelector((state) => state.restaurants.entities)
    const ratings = useSelector((state) => state.ratings.entities)

    //filter state setup 
    const allLocations = restaurants.map((r) => r.location)
    const allRestaurants = restaurants.map((r) => r.name)
    const locations = ["-", ...new Set(allLocations)] // can eventually be refactored
    const restaurantNames = ["-", ...new Set(allRestaurants)] // can eventually be refactored
    const [ restaurantFilter, setRestaurantFilter ] = useState("-")
    const [ locationFilter, setLocationFilter ] = useState("-")

    // console.log(locations)
    //calls our function to filter out ratings
    // setFilteredRatings(FilteredRatingsFunction)

    function filteredRatingsFunction() {
        if (locationFilter === "-" && restaurantFilter === "-")
            {
                return ratings
            }
            else if  (locationFilter !== "-" && restaurantFilter === "-"){
                return ratings.filter((rating => (rating.restaurant.location === locationFilter)))
            }
            else if (restaurantFilter !== "-" && locationFilter === "-"){
                return ratings.filter((rating => (rating.restaurant.name === restaurantFilter)))
            }
            else {
                return (ratings.filter((rating => (rating.restaurant.name === restaurantFilter)))
                .filter((rating => (rating.restaurant.location === locationFilter))))
            }
    }

    console.log('reloaded page')

    function handleDeleteRating(ratingId, dishId){
        fetch(`/ratings/${ratingId}`, {
            method: "DELETE",
          })
          .then(() => {
            dispatch(fetchRatings())
            .then(history(`/`))
            
          });
    }
    if (!ratings){ return <p>Loading...</p>}
    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Latest Ratings</Typography>
            <Stack mt={2} spacing={3}>
                <RatingsFilterForm 
                    neighborhoodFilter={locationFilter} 
                    restaurantFilter={restaurantFilter} 
                    locations={locations} 
                    restaurantNames={restaurantNames}
                    restaurants={restaurants}
                    setRestaurantFilter={setRestaurantFilter}
                    setNeighborhoodFilter={setLocationFilter}
                />
            {ratings ? (
                <Ratings ratings={filteredRatingsFunction()} displayUserButton={true} handleDeleteRating={handleDeleteRating}/>
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