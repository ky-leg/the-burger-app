import { useState, useEffect } from "react"; 
import styled from "styled-components";
import { Box, Button, Form, FormField, Label } from "../../styles";
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

 

function RatingList({user}) {
    //redux stores 
    const restaurants = useSelector((state) => state.restaurants.entities)
    const ratings = useSelector((state) => state.ratings.entities)
    const users = useSelector((state) => state.users.entities)

    console.log(users)
    //filter
    const allLocations = restaurants.map((r) => r.location)
    const allRestaurants = restaurants.map((r) => r.name)
    const locations = ["-", ...new Set(allLocations)]
    const restaurantNames = ["-", ...new Set(allRestaurants)]
    const [ restaurantFilter, setRestaurantFilter ] = useState("-")
    const [ neighborhoodFilter, setNeighborhoodFilter ] = useState("-")

    const filteredRatings = () => {
        if (neighborhoodFilter === "-" && restaurantFilter === "-")
        {
            return ratings
        }
        else if  (neighborhoodFilter !== "-" && restaurantFilter === "-"){
            return ratings.filter((rating => (rating.restaurant.location === neighborhoodFilter)))
        }
        else if (neighborhoodFilter === "-" && restaurantFilter !== "-"){
            return ratings.filter((rating => (rating.restaurant.name === restaurantFilter)))
        }
    }

    //filter switch
    const params = useParams()
    const filterSwitch = () => {
        if (!params.id){
            return {
                upper: (
                    <>
                    <FormField>
                        <Label htmlFor="neighborhoodFilter">Filter By Neighborhood</Label>
                            <select
                            id="neighborhoodFilter"
                            value={neighborhoodFilter}
                            onChange={(e) => setNeighborhoodFilter(e.target.value)}
                            >
                                {locations.map((location, i) => (<option key={i}>{location}</option>))}
                            </select>
                    </FormField>
                    <FormField>
                        <Label htmlFor="restaurantFilter">Filter By Restaurant</Label>
                            <select
                            id="restaurantFilter"
                            value={restaurantFilter}
                            onChange={(e) => setRestaurantFilter(e.target.value)}
                            >
                                {restaurantNames.map((name, i) => (<option key={i}>{name}</option>))}
                            </select>
                    </FormField>
                    </>
                ),
                title: "Latest",
                ratings: filteredRatings(),
            }
        }
        else 
        // if (params.id === parseInt(user.id))
        {
            const thisUser = users.find(user => user.id === parseInt(params.id))
            return {
                upper: (<>
                    <User key={thisUser.id} >
                        <Box>
                            <h2>User: {thisUser.username}</h2>
                            <h2>Name: {thisUser.first_name}</h2>
                            <h2>Location: {thisUser.location}</h2>
                        </Box>
                    </User>
                </>),
                title: thisUser.first_name+"'s",
                ratings: filteredRatings().filter(rating => rating.user_id === parseInt(thisUser.id)),
            }
        }
        // else {
        //     return {
        //         filter: "loading",
        //         title: "loading",
        //     }
        // }
    }


    function handleDeleteRating(id){
        fetch(`/ratings/${id}`, {
            method: 'DELETE',
        })
        // .then(() => {
        //     const newRatings = ratings.filter(rating => (rating.id !== id))
        //     setRatings(newRatings)
        // })
    }


    return (
        <Wrapper>
            <h1>{filterSwitch().title} Ratings</h1>
            {filterSwitch().upper}
            {ratings.length > 0 ? (
                filterSwitch().ratings.map((rating) => (
                    <Wrapper>
                        <Rating key={rating.id} >
                            <Box>
                                <h2>{rating.dish.name} from {rating.restaurant.name}, {rating.score}/10</h2>
                                {!params.id? 
                                    (<><>User Profile: </>
                                    <Button as={Link} to={`/user/${rating.user.id}`}>
                                        {rating.user.username}
                                    </Button>
                                    </>):
                                    ""
                                } 
                                <p> 
                                </p>
                                <em>Location:</em> <>{rating.restaurant.location}</>
                                <h1>{rating.title}</h1>
                                <p>
                                    {rating.review}
                                </p>
                            </Box>
                        </Rating>
                    </Wrapper>
                ))
            ) : (
                <>
                <h2>No Ratings Found</h2>
                <Button as = {Link} to="/">
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

const User = styled.article`
  margin: 20px;
   
  
`;

export default RatingList;