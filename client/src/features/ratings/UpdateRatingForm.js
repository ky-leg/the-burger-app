import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import NestedDishForm from "../dishes/NestedDishForm";
import { Error } from "../../styles";
import { useDispatch, useSelector } from "react-redux"
import { fetchDishes } from "../dishes/dishesSlice"; // eslint-disable-next-line
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { Stack, Rating, Container, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button, TextField } from "@mui/material"



const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function UpdateRatingForm({ userId }) {
  
  //redux setup
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities)
  const dishes = useSelector((state) => state.dishes.entities)  
  const ratings = useSelector((state) => state.ratings.entities)
  console.log(ratings)
  //accessing params to discern if we aer upadting an existing rating
  const params = useParams()
  function ratingFinder() {
    return ratings.find(rating => parseInt(rating.id) === parseInt(params.rating_id))
  }
  const rating = ratingFinder()
  console.log(ratingFinder(), params.rating_id)

  //rating state
  const [dishId, setDishId] = useState(rating.dish.id)
  const [restaurantId, setRestaurantId] = useState(rating.restaurant.id)
  const [score, setScore] = useState(rating.score);
  const [title, setTitle] = useState(rating.title);
  const [review, setReview ] = useState(rating.review)

  //misc
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useNavigate();
 

  //handle submit CHANGE TO UPDATE
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/ratings/${params.rating_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dish_id: dishId,
        user_id: userId,
        score,
        title,
        review,
      }),
    })
    .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(dispatch(fetchDishes()))
        .then(history(`/restaurants/${params.restaurant_id}`));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }

  const dishInput = () => {
    if (restaurantId === ""){
      return (
        <MenuItem key={'Pick a restaurant'}>Pick a Restaurant</MenuItem>
      )
    }
    else {
      const restaurant = restaurants.find((r) => (r.id === parseInt(restaurantId)))
      const dish = restaurant.dishes.map((dish) => (<MenuItem value={dish.id} key={dish.id}>{dish.name}</MenuItem>))
      return (dish)
    }
  }

  const handleIdChange = (event) => {
    console.log(event.target.value)
    setDishId(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Stack mt={2} spacing={3}>
        <Typography variant="h4">Write Review</Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-restaurant-label">Restaurant</InputLabel>
              <Select
              labelId="select-restaurant"
              id="restaurant"
              value={restaurantId}
              onChange={(e) => setRestaurantId(e.target.value)}
              label="Restaurant"
              >
              {restaurants.map((restaurant) => (<MenuItem value={restaurant.id} key={restaurant.id}>{restaurant.name}</MenuItem>))}
              </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-dish-label">Dish</InputLabel>
            <Select
            labelId="select-dish"
            id="dish"
            value={dishId}
            onChange={handleIdChange}
            label="Dish"
            >
              {dishInput()}
            </Select>
          </FormControl>
          <Typography variant="h5">Review</Typography>
          <Stack mt={2} spacing={3}>
            <FormControl>
              <TextField id="title" label="Title" value={title} variant="standard" onChange={(e) => setTitle(e.target.value)}/>
            </FormControl>
            <FormControl>
              <Typography >Dish Score</Typography>
              <Rating  label="Score"name="half-rating" defaultValue={2.5} precision={0.1} onChange={(e) => setScore(e.target.value)} value={score}/>
            </FormControl>
            <FormControl>
                <TextField
                    variant="standard" 
                    id="outlined-textarea"
                    value={review}
                    label="Review Body"
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write Your Review"
                    multiline
                  />
            </FormControl>
            
            <Button variant="outlined" type="submit" onClick={handleSubmit}>
              {isLoading ? "Loading..." : "Update Review"}
            </Button>
          </Stack>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
      </Stack>
      </Container>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default UpdateRatingForm;
