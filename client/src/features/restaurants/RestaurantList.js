import { useState } from "react"; 
import styled from "styled-components";
import { Box, Button, Form, FormField, Label } from "../../styles";
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from "./restaurantsSlice"

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

    console.log(restaurants)
    function handleDeleteRestaurant(id){
        console.log(id)
        fetch(`/restaurants/${id}`, {
            method: 'DELETE',
        })
        .then(dispatch(fetchRestaurants()))
        .then(history(`/restaurants`));
    }

return (
    <Wrapper>
        <h1>Top Rated Restaurants</h1>
        <FormField>
            <Label htmlFor="filter">Filter By Neighborhood</Label>
                <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                >
                    {locations.map((location, i) => (
                    <option key={i}>{location}</option>
                    ))}
                </select>
        </FormField>
        {restaurants.length > 0 ? (
            filteredRestaurants().map((restaurant) => (
                <Wrapper>
                <Restaurant key={restaurant.id} >
                <Box>
                    <h2>{restaurant.name}</h2>
                    <em>Restaurant Location: {restaurant.location}</em>
                    <p>
                    <Link to={`${restaurant.id}`}>
                        <Button>
                            Top Dishes
                        </Button>
                    </Link>
                    <>     </>
                    <Button onClick={e => handleDeleteRestaurant(restaurant.id)}>
                        Remove Restaurant
                    </Button>
                    </p>
                </Box>
                </Restaurant>
                </Wrapper>
            ))
        ) : (
            <>
            <h2>No Restaurants Found</h2>
            <Button as = {Link} to="/restaurants">
                Back To Homepage
            </Button>
            </>
        )}
        <Button as={Link} to="/restaurants/new">
            Create New Restaurant
        </Button>
    </Wrapper>
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