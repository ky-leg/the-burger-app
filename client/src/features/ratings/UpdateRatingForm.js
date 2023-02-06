import { useState } from "react";
import { useNavigate } from "react-router";
import { Error } from "../../styles";
import { useDispatch, useSelector } from "react-redux"
import { fetchDishes } from "../dishes/dishesSlice"; // eslint-disable-next-line
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { Stack, Rating, Container, Typography, FormControl, Button, TextField } from "@mui/material"




function UpdateRatingForm({ userId }) {
  
  //redux setup
  const dispatch = useDispatch();
  // const restaurants = useSelector((state) => state.restaurants.entities)
  const ratings = useSelector((state) => state.ratings.entities)

  //accessing params to discern if we aer upadting an existing rating
  const params = useParams()
  function ratingFinder() {
    return ratings.find(rating => parseInt(rating.id) === parseInt(params.rating_id))
  }
  const rating = ratingFinder()
  console.log(ratingFinder(), params.rating_id)

  //rating state
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
        dish_id: rating.dish_id,
        user_id: rating.user_id,
        score,
        title,
        review,
      }),
    })
    .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(dispatch(fetchDishes()))
        .then(history(`/ratings/${rating.restaurant.id}/${rating.dish_id}}`));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }



  if (!rating){ return <p> Loading... </p>}
  return (
    <Container maxWidth="sm">
      <Stack mt={2} spacing={3}>
        <Typography variant="h4">Update Your Review</Typography>
          <Typography variant="subtitle1">Restaurant: {rating.restaurant.name}</Typography>
          <Typography variant="subtitle1">Dish: {rating.dish.name}</Typography>
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
                    defaultValue={rating.review}
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

export default UpdateRatingForm;
