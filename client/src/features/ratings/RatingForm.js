import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import NestedDishForm from "../dishes/NestedDishForm";
import { Button, Error, FormField, Input, Label, Textarea } from "../../styles";
import { useDispatch, useSelector } from "react-redux"
import { fetchDishes } from "../dishes/dishesSlice"; // eslint-disable-next-line
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

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

  console.log(typeof parseInt(restaurantId))

  //handle submit 
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    

    // const dish = {
    //   restaurant_id: restaurantId, 
    //   name: dishName,
    //   dish_type: dishType,
    //   vegan: dishVegan,
    //   ratings_attributes: rating
    // }

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
        <option key={'Pick a restaurant'}>Pick a Restaurant</option>
      )
    }
    else {
      const restaurant = restaurants.find((r) => (r.id === parseInt(restaurantId)))
      const dish = restaurant.dishes.map((dish) => (<option value={dish.id} key={dish.id}>{dish.name}</option>))
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

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Write Review</h2>
        <form onSubmit={handleSubmit}>
            {/* conditionally rendering restaurant Name or a Form for Restaurant */}
            {params.restaurant_id? 
            (
            <>
              <Label htmlFor="restaurant">Restaurant</Label>
              <em>{dishOrRest().restaurant}</em>
              <p> 
                
              </p>
            </>
            ):(
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
          )}
          {/* conditionally rendering restaurant Name or a Form for Restaurant */}
          {params.dish_id?
          (<>
            <Label htmlFor="Dish">Dish</Label>
            <em>{dishOrRest().dish}</em>
            <p> 
                
              </p>
          </>):
          (<FormField>
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
          )}
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
            <Label htmlFor="score">Dish Score (1 to 10)</Label>
            <Input
              type="number"
              id="score"
              max="10"
              min="1"
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
              {isLoading ? "Loading..." : "Submit Review"}
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
