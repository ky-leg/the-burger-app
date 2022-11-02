import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import NestedDishForm from "../dishes/NestedDishForm";
import { Error, FormField, Input, Label, Textarea } from "../../styles";
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

function NewRating({ userId }) {
  //redux setup
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities)
  const dishes = useSelector((state) => state.dishes.entities)  

  //rating state
  const [dishId, setDishId] = useState("-")
  const [restaurantId, setRestaurantId] = useState("-")
  const [score, setScore] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview ] = useState("")

  //misc
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useNavigate();
  const params = useParams()
  
  //dish state & nested form
  const [dishName, setDishName] = useState("");
  const [dishType, setDishType] = useState("");
  const [dishVegan, setDishVegan] = useState(false)
  const displayNestedForm = () => {
    if (dishId !== "Make New Dish"){
      return true
    }
    else 
      return false 
  }

  //handle submit 
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);


    //if there's the nested form, submit as to associate a nested form
    if (!displayNestedForm()){
      fetch("/dishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: restaurantId, 
          name: dishName,
          dish_type: dishType,
          vegan: dishVegan,
          ratings_attributes: [{
            user_id: userId,
            score: score,
            title,
            review,
          }]
        }),
      })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then(dispatch(fetchDishes()))
          .then(history(`/dishes`));
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
    }
    //if there's no nested form 
    else {
      const resolveDishId = () => {
        if (params.restaurant_id && params.dish_id){
          return params.dish_id
        }
        else {
          return dishId
        }
      }
      fetch("/ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dish_id: resolveDishId(),
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
          .then(history(`/dishes`));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    
  }

  const dishInput = () => {
    if (restaurantId === "-"){
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

  const dishOrRest = () => {
    if (restaurants.length>0 && dishes.length>0){
    const restaurant = restaurants.find((r) => (r.id === parseInt(params.restaurant_id)))
    const dish = dishes.find((d) => (d.id === parseInt(params.dish_id)))
      return {
        restaurant: restaurant.name, 
        dish: dish.name, 
      }
    }   
    else {
      return {
        restaurant: "loading...", 
        dish: "loading...", 
      }
    }
  }  

  const handleIdChange = (event) => {
    console.log(event.target.value)
    setDishId(event.target.value);
  };
console.log(dishId, displayNestedForm())
  return (
    <Container maxWidth="sm">
      <Stack mt={2} spacing={3}>
    
        <Typography variant="h4">Write Review</Typography>
        <Stack mt={2} spacing={3}>
            {/* conditionally rendering restaurant Name or a Form for Restaurant */}
            
            
            {params.restaurant_id? 
            (
              <Typography variant="subtitle1">Restaurant {dishOrRest().restaurant}</Typography>
            ):(
              
            <FormControl>
              <Typography variant="subtitle1">Restaurant</Typography>
                <Select
                id="restaurant"
                value={restaurantId}
                onChange={(e) => setRestaurantId(e.target.value)}
                >
                <MenuItem value='-' key={'-'}>-</MenuItem>
                
                {restaurants.map((restaurant) => (<MenuItem value={restaurant.id} key={restaurant.id}>{restaurant.name}</MenuItem>))}
                </Select>
            </FormControl>
            
          )}
          {/* conditionally rendering restaurant Name or a Form for Restaurant */}
          {params.dish_id?
          (
            <Typography variant="subtitle1">Dish {dishOrRest().dish}</Typography>
          ):
          (

              <FormControl>
              <Typography variant="subtitle1">Dish</Typography>
              <Select
              id="dish"
              value={dishId}
              onChange={handleIdChange}
              >
                <MenuItem value='-' key={'-'}>-</MenuItem>
                <MenuItem value='Make New Dish' key={'New Dish'}>Make New Dish</MenuItem>
                {dishInput()}
              </Select>
          </FormControl>
          )}
          </Stack>
            
          {displayNestedForm() ? "" : <NestedDishForm dishName={dishName} setDishName={setDishName} dishType={dishType} setDishType={setDishType} dishVegan={dishVegan} setDishVegan={setDishVegan}/>}
          <Typography variant="h5">Review</Typography>
          <Stack mt={2} spacing={3}>
            <FormControl>
              <Typography component="legend">Score</Typography>
              <Rating name="score" defaultValue={2} max={10} onChange={(e) => setScore(e.target.value)} value={score}/>
            </FormControl>
            <FormControl>
              <Typography variant="subtitle1">Title</Typography>
              <TextField id="title" label="Title" value={title} variant="outlined" onChange={(e) => setTitle(e.target.value)}/>
            </FormControl>
            <FormControl>
              <Typography variant="subtitle1">Review</Typography>
                <TextField
                    id="outlined-textarea"
                    label="Review Body"
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Placeholder"
                    multiline
                  />
            </FormControl>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              {isLoading ? "Loading..." : "Submit Review"}
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

export default NewRating;
