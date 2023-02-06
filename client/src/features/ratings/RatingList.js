// eslint-disable-next-line
import { useState, useEffect } from "react"; // eslint-disable-next-line
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Stack, Card, CardHeader, CardActions, CardContent, Typography, FormControl, MenuItem, InputLabel, Select, Button, Rating } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

 
//review what updates when a rating is submitted... 
// eslint-disable-next-line
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
        else if (neighborhoodFilter !== "-" && restaurantFilter !== "-"){
            return ratings.filter((rating => (rating.restaurant.name === restaurantFilter)))
        }
    }

    const filteredLocations = () => {
        if (restaurantFilter==="-")
        {
            return locations
        }
        else 
        {
            return restaurantFilter
        }
    }

    console.log(filteredLocations)

    //filter switch
    const params = useParams()
    const filterSwitch = () => {
        if (!params.id){
            return {
                upper: (
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="select-neighborhood-label">Filter By Neighborhood</InputLabel>
                            <Select
                            labelId="select-neighborhood"
                            id="neighborhoodFilter"
                            value={neighborhoodFilter}
                            onChange={(e) => setNeighborhoodFilter(e.target.value)}
                            label="Neighborhood"
                            >
                                {locations.map((location, i) => (<MenuItem value={i} key={i}>{location}</MenuItem>))}
                            </Select>
                        </FormControl>
                    
                ),
                lower: (
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>      
                        <InputLabel id="select-restaurant-label">Filter By Restaurant</InputLabel>
                        <Select
                        labelId="select-restaurant"
                        id="restaurantFilter"
                        value={restaurantFilter}
                        onChange={(e) => setRestaurantFilter(e.target.value)}
                        label="Restaurant"
                        >
                            {restaurantNames.map((name, i) => (<MenuItem value={i} key={i}>{name}</MenuItem>))}
                        </Select>
                    </FormControl>),
                title: "Latest",
                ratings: filteredRatings(),
            }
        }
        else 
        // if (params.id === parseInt(user.id))
        {
            const thisUser = users.find(user => user.id === parseInt(params.id))
            return {
                upper: (
                    <Stack>
                        <Typography variant="body">User: {thisUser.username}</Typography>
                        <Typography variant="body">Name: {thisUser.first_name}</Typography>
                        <Typography variant="body">Location: {thisUser.location}</Typography>
                    </Stack>
                ),
                lower: "",
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


    // function handleDeleteRating(id){
    //     fetch(`/ratings/${id}`, {
    //         method: 'DELETE',
    //     })
    //     // .then(() => {
    //     //     const newRatings = ratings.filter(rating => (rating.id !== id))
    //     //     setRatings(newRatings)
    //     // })
    // }


    return (
        <Container maxWidth="sm">
            
            <Typography variant="h4">{filterSwitch().title} Ratings</Typography>
            <Stack mt={2} spacing={3}>
            {filterSwitch().upper}
            {filterSwitch().lower}
            {ratings.length > 0 ? (
                filterSwitch().ratings.map((rating) => (
                        <Card key={rating.id} sx={{ minWidth: 345  }}>
                            <CardHeader
                                title={`${rating.dish.name} from ${rating.restaurant.name}`}
                                subtitle={`Location: ${rating.restaurant.location}`}
                                action={
                                    <IconButton>
                                        <DeleteIcon/>
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <Typography variant="h6">{rating.title}</Typography>
                                <Rating name="half-rating-read"  precision={0.1} value={rating.score} readOnly size="small"/>
                                <Typography>{rating.review}</Typography>
                            </CardContent>
                            <CardActions>
                                {!params.id? 
                                    (
                                    <Button component={Link} to={`/user/${rating.user.id}`} variant="outline">
                                        {rating.user.username}
                                    </Button>
                                    ):""
                                } 
                            </CardActions>
                        </Card>

                ))
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

export default RatingList;