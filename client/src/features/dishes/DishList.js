// import { useState } from "react"; 
import styled from "styled-components";
import { Box, Button } from "../../styles"; // eslint-disable-next-line
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { fetchDishes } from "./dishesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function DishList( { onSetDish } ) {
    //redux setup 
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurants.entities)
    const dishes = useSelector((state) => state.dishes.entities)

    console.log(onSetDish)
    //sorting dishes
    const params = useParams()
    const dishSort = () => {
        if (params.id && dishes>0) {
            return dishes.filter(d => d.restaurant_id === parseInt(params.id))
        }
        else {
            return dishes
        }
    }
    const displayDishes = dishSort()
   
    //
    const restaurantName = (id="") => {
        if (restaurants.find(r=>r.id === parseInt(params.id)) && id===""){
            return (restaurants.find(r => (r.id === parseInt(params.id))).name)
        }
        else if (restaurants.find(r=>r.id===id)){
            return (restaurants.find(r => (r.id === id)).name)
        }
    }
    
    //handling dish delete
    function handleDeleteDish(id){
        fetch(`/dishes/${id}`, {
            method: 'DELETE',
        })
        .then(dispatch(fetchDishes()))
    }

    useEffect(() => {
        dispatch(fetchDishes())
      }, [dispatch]);

    return (
        <Wrapper>
            <h1>{restaurantName()} Top Rated Dishes</h1>
            {displayDishes.length > 0 ? (
                displayDishes.map((dish) => (
                    <Wrapper>
                        <Dish key={dish.name} >
                            <Box>
                                <h2>{dish.name}</h2>
                                {params.id? "":(<h4>Restaurant: {restaurantName(dish.restaurant_id)}</h4>)}
                                <em>Total Ratings: {dish.ratings.length} {dish.ratings.length>0 ? ` - Avg. Rating: ${dish.average}`: ""} </em>
                                <p>
                                    {dish.ratings.length>0 ? 
                                    (<Link to={`/dish/${dish.id}/reviews`}>
                                        <Button>
                                            Read Reviews    
                                        </Button>
                                    </Link>)
                                    : ""}
                                    <>     </>
                                    <Link to={`/ratings/new/${dish.restaurant_id}/${dish.id}/`}>
                                        <Button>
                                            Review This Dish
                                        </Button>
                                    </Link>
                                    <Button onClick={e => handleDeleteDish(dish.id)}>
                                        Remove Dish
                                    </Button>
                                </p>
                            </Box>
                        </Dish>
                    </Wrapper>
                ))
            ) : (
                <>
                <h2>No Dishes Found</h2>
                <Button as = {Link} to="/dishes">
                    Back To Homepage
                </Button>
                </>
            )}
            <Button as={Link} to="/dishes/new">
                Create New Dish
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Dish = styled.article`
  margin-bottom: 24px;
`;

export default DishList;