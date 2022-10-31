import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import NestedDishForm from "../dishes/NestedDishForm";
import { Button, Error, FormField, Input, Label, Textarea } from "../../styles";
import { useDispatch, useSelector } from "react-redux"
import { fetchDishes } from "../dishes/dishesSlice";


function NewRating({ userId }) {
  //redux setup
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities)

  //rating state
  const [restaurantId, setRestaurantId] = useState("-")
  const [dishId, setDishId] = useState("-")
  const [score, setScore] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview ] = useState("")

  //misc
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useNavigate();

  if(false){
    history()
  }
  
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
    console.log("hey")
    setIsLoading(true);

    const rating = {
      score,
      title,
      review,
    }

    const dish = {
      restaurant_id: restaurantId, 
      name: dishName,
      dish_type: dishType,
      vegan: dishVegan,
      rating_attributes: rating
    }

    if (!displayNestedForm()){
      console.log(dish)
      fetch("/dishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dish),
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
      console.log("we're fetching to dishes and nesting a rating", dish)
    }
    else {
      fetch("/ratings", {
        method: "POST",
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
          .then(history(`/dishes`));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
      console.log("we're fetching to ratings and associating to a dish", {
        dish_id: dishId,
        score,
        title,
        review,
      })
    }
    
  }

  const dishInput = () => {
    if (restaurantId == "-"){
      return (
        <option key={'Pick a restaurant'}>Pick a Restaurant</option>
      )
    }
    else {
      const restaurant = restaurants.find((r) => (r.id == restaurantId))
      const dish = restaurant.dishes.map((dish) => (<option value={dish.id} key={dish.id}>{dish.name}</option>))
      return (dish)
    }
  }

  

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Write Review</h2>
        <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="restaurant">Restaurant</Label>
              <select
              id="restaurant"
              value={restaurantId}
              onChange={(e) => setRestaurantId(e.target.value)}
              >
              <option key={'-'}>-</option>
              
              {restaurants.map((restaurant) => (<option value={restaurant.id} key={restaurant.id}>{restaurant.name}</option>))}
              </select>
          </FormField>
          <FormField>
              <Label htmlFor="Dish">Dish</Label>
              <select
              id="dish"
              value={dishId}
              onChange={(e) => setDishId(e.target.value)}
              >
                <option key={'-'}>-</option>
                <option key={'New Dish'}>Make New Dish</option>
                {dishInput()}
              </select>
          </FormField>
          {displayNestedForm() ? "" : <NestedDishForm dishName={dishName} setDishName={setDishName} dishType={dishType} setDishType={setDishType} dishVegan={dishVegan} setDishVegan={setDishVegan}/>}
          <FormField>
            <Label htmlFor="title">Review Title</Label>
            <Input 
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
          </FormField>
          <FormField>
            <Label htmlFor="score">Dish Score</Label>
            <Input
              type="text"
              id="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="review">Review</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Dish"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
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
