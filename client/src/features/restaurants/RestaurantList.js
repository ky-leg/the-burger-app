import { useState } from "react"; 
import styled from "styled-components";
// import {  Box, Label } from "../../styles"; // eslint-disable-next-line
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from "./restaurantsSlice"
import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function RestaurantList() {
    const restaurants = useSelector((state) => state.restaurants.entities)
    const [ filter, setFilter ] = useState("-")
    const allLocations = restaurants.map((r) => r.location)
    const locations = ["-", ...new Set(allLocations)]
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

return (
    <Container maxWidth="sm">
        <Box mt={2}>
            <Typography variant="h4">Top Rated Restaurants</Typography>
            <FormControl>
                <Typography variant="subtitle1">Filter By Neighborhood</Typography>
                    <Select
                    
                    id="filter"
                    value={filter}
                    onChange={handleChange}
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
                    <IconButton aria-label="settings">
                        <DeleteIcon onClick={e => handleDeleteRestaurant(restaurant.id)}/>
                    </IconButton>
                
                }
                subheader={`Location: ${restaurant.location}`}
            />            
            <CardActions>
                <Button 
                    component={Link}
                    to={`${restaurant.id}`}
                    variant="contained">
                        Top Dishes
                </Button>
                <Button 
                    variant="outlined" onClick={e => handleDeleteRestaurant(restaurant.id)}>
                        Remove Restaurant
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
        </Stack>
        <Box mt={2}>
            <Button variant="contained" component = {Link} to="/restaurants/new">
                Create New Restaurant
            </Button>
        </Box>
        
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