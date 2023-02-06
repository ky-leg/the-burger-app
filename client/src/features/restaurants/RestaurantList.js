import { useState } from "react"; 
// import {  Box, Label } from "../../styles"; 
// eslint-disable-next-line
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
// import { fetchRestaurants } from "./restaurantsSlice"
import { Container, Stack, Typography, Button } from "@mui/material"

import RestaurantFilterForm from './RestaurantFilterForm';
import Restaurants from './Restaurants'

function RestaurantList() {
    const restaurants = useSelector((state) => state.restaurants.entities)
    const [ filter, setFilter ] = useState("-")
    // const locations = restaurants.map((r) => r.location)
    // const history = useNavigate()
    // const dispatch = useDispatch()
    console.log(restaurants)
    const filteredRestaurants = () => {
        if (filter === "-")
        {
            return restaurants
        }
        else {
            return restaurants.filter((restaurant) => (restaurant.location === filter))
        }
    }

    // function handleDeleteRestaurant(id){
    //     fetch(`/restaurants/${id}`, {
    //         method: 'DELETE',
    //     })
    //     .then(dispatch(fetchRestaurants()))
    //     .then(history(`/restaurants`));
    // }

    const handleChange = (event) => {
        setFilter(event.target.value);
      };


      if (!filteredRestaurants()) return <p>Loading...</p>;
return (
    <Container maxWidth="sm">
        <Stack mt={2} spacing={3}>
            <Typography variant="h4">Top Restaurants</Typography>
            <RestaurantFilterForm 
                filter={filter} 
                handleChange={handleChange}
                />
        <Stack mt={2} spacing={3}>
            <Restaurants restaurants={filteredRestaurants()}/>
        </Stack>
            <Button variant="outlined" component = {Link} to="/restaurants/new">
                Create New Restaurant
            </Button>
        </Stack>
    </Container>
)
}


export default RestaurantList;