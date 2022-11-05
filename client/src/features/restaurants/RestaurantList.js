import { useState } from "react"; 
import styled from "styled-components";
// import {  Box, Label } from "../../styles"; // eslint-disable-next-line
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from "./restaurantsSlice"
import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function RestaurantList() {
    const restaurants = useSelector((state) => state.restaurants.entities)
    const [ filter, setFilter ] = useState("-")
    const locations = restaurants.map((r) => r.location)
    const history = useNavigate()
    const dispatch = useDispatch()

    const filteredRestaurants = () => {
        if (filter === "-")
        {
            return restaurants
        }
        else {
            return restaurants.filter((restaurant) => (restaurant.location === filter))
        }
    }

    
    function handleDeleteRestaurant(id){
        fetch(`/restaurants/${id}`, {
            method: 'DELETE',
        })
        .then(dispatch(fetchRestaurants()))
        .then(history(`/restaurants`));
    }

    const handleChange = (event) => {
        setFilter(event.target.value);
      };

      console.log(restaurants)

return (
    <Container maxWidth="sm">
        <Box mt={2}>
            <Typography variant="h4">Top Restaurants</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-restaurant-label">Filter By Location</InputLabel>
                    <Select
                    labelId="select-neighborhood"
                    id="filter"
                    value={filter}
                    onChange={handleChange}
                    label="Neighborhood"
                    >
                        {locations.map((location, i) => (
                        <MenuItem key={i} value={location}>{location}</MenuItem>
                        ))}
                    </Select>
            </FormControl>
        </Box>
        

        <Stack mt={2} spacing={3}>
        {restaurants.length > 0 ? (
            filteredRestaurants().map((restaurant) => (

            <Card  key={restaurant.id} sx={{ minWidth: 345  }}>
            <CardHeader
                title={restaurant.name}
                action ={
                    <IconButton aria-label="settings" onClick={e => handleDeleteRestaurant(restaurant.id)}>
                        <DeleteIcon />
                    </IconButton>
                
                }
                subheader={`Location: ${restaurant.location}`}
            />            
            <CardActions>
                <Button 
                    component={Link}
                    to={`${restaurant.id}`}
                    variant="standard">
                        Top Dishes
                </Button>

            </CardActions>
                {/* <CardContent >
            </CardContent> */}
                
            </Card>

            ))
            
        ) : (
            <>
            <h2>No Restaurants Found</h2>
            <Button component = {Link} to="/restaurants">
                Back To Homepage
            </Button>
            </>
        )}
        
            <Button variant="outlined" component = {Link} to="/restaurants/new">
                Create New Restaurant
            </Button>
            </Stack>
    </Container>
)
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Restaurant = styled.article`
  margin-bottom: 24px;
`;

export default RestaurantList;