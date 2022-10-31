import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../../styles";
import { fetchDishes } from "./dishesSlice";

function NewDish() {
  //form fields
  const [restaurantId, setRestaurantId] = useState("-")
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [vegan, setVegan ] = useState(false)
  const [errors, setErrors] = useState([]);

  //Routing
  const history = useNavigate();

  //redux setup 
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities)

  //Misc
  const [isLoading, setIsLoading] = useState(false);

  //form submission
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurant_id: restaurantId,
        name,
        dish_type: type,
        vegan
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(dispatch(fetchDishes()))
        .then(history(`/dishes`));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Dish</h2>
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
            <Label htmlFor="name">Dish Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="type">Dish Type</Label>
            <select 
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}>
                <option key={'-'}>-</option>
                <option key={'appetizer'}>Appetizer</option>
                <option key={'entree'}>Entree</option>
                <option key={'dessert'}>Dessert</option>
                <option key={'drink'}>Drink</option>
              </select>
          </FormField>
          <FormField>
            <Label htmlFor="name">Vegan
              <input
                type="checkbox"
                id="vegan"
                value={vegan}
                onChange={(e) => setVegan(e.target.value)}
              />
            </Label>
            
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

export default NewDish;
