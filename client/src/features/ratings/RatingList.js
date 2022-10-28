import { useState, useEffect } from "react"; 
import styled from "styled-components";
import { Box, Button, Form, FormField, Label } from "../../styles";
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";

 

function RatingList({restaurants, setRestaurants}) {
    console.log(ratings)
    const [ filter, setFilter ] = useState("-")
    const allLocations = ratings.map((r) => r.location)
    const locations = ["-", ...new Set(allLocations)]

    const filteredRestaurants = () => {
        if (filter === "-")
        {
            return restaurants
        }
        else {
            return restaurants.filter((restaurant => (restaurant.location === filter))
        }
    }

    const filteredDishes = () => {
        if (filter === "-")
        {
            return dishes
        }
        else {
            return dishes.filter((dish) => (dish.location === filter))
        }
    } 

    function handleDeleteRating(id){
        fetch(`/ratings/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const newRatings = ratings.filter(rating => (rating.id !== id))
            setRatings(newRatings)
        })
    }

    console.log(filteredRatings())

    return (
        <Wrapper>
            <h1>Top Rated Ratings</h1>
            <FormField>
                <Label htmlFor="filter">Filter By Neighborhood</Label>
                    <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    >
                        {locations.map((location, i) => (<option key={i}>{location}</option>))}
                    </select>
            </FormField>
            {ratings.length > 0 ? (
                filteredRatings().map((rating) => (
                    <Wrapper>
                        <Rating key={rating.id} >
                            <Box>
                                <h2>{rating.name}</h2>
                                <em>Rating Location: {rating.location}</em>
                                <p>
                                    <Link to={`rating/${rating.id}`}>
                                        <Button>
                                            {rating.name}'s Top Dishes
                                        </Button>
                                    </Link>
                                    <>     </>
                                    <Button onClick={e => handleDeleteRating(rating.id)}>
                                        Remove Rating
                                    </Button>
                                </p>
                            </Box>
                        </Rating>
                    </Wrapper>
                ))
            ) : (
                <>
                <h2>No Ratings Found</h2>
                <Button as = {Link} to="/ratings">
                    Back To Homepage
                </Button>
                </>
            )}
            <Button as={Link} to="/ratings/new">
                Create New Rating
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Rating = styled.article`
  margin-bottom: 24px;
`;

export default RatingList;