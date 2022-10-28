import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import NewDish from "../dishes/DishForm";
import { Button, Error, FormField, Input, Label, Textarea } from "../../styles";

function NewRating({ restaurants, setDishes }) {
  const [restaurantId, setRestaurantId] = useState("-")
  const [dishId, setDishId] = useState("-")
  const [score, setScore] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview ] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hey")
    // setIsLoading(true);
    // fetch("/dishes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     restaurant_id: restaurantId,
    //     name,
    //     dish_type: type,
    //     vegan
    //   }),
    // }).then((r) => {
    //   setIsLoading(false);
    //   if (r.ok) {
    //     r.json().then((r)=> setDishes(r))
    //     .then(history(`/dishes`));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  console.log(restaurantId)


  // const blankInput = () =>{
  //   <option key="-">-</option>
  // }

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

  // const newDishForm = () => {
  //   if (dishId == "Make New Dish"){
  //     return 
  //   }

  //   // else 
  //   // return 
  // }

  const displayNestedForm = () => {
    if (dishId !== "Make New Dish"){
      return true
    }
    else 
    return false 
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
          {displayNestedForm() ? "" : <NewDish restaurants={restaurants} setDishes={setDishes}/>}
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
