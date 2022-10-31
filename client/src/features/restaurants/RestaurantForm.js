import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../../styles";
import {  fetchRestaurants } from "./restaurantsSlice"

function NewRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(dispatch(fetchRestaurants()))
        .then(history(`/restaurants`));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Restaurant Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="location">Restaurant Location</Label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Restaurant"}
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

export default NewRestaurant;
