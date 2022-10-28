import { useState, useEffect } from "react"; 
import styled from "styled-components";
import { Box, Button, Form, FormField, Label } from "../../styles";
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";

 

function DishList({dishes, setDishes, restaurants }) {
    const [rating, setRating] = useState("???")
    const params = useParams()
    console.log(params.id)
    console.log(restaurants.find(r => (r.id == params.id)))

    // const displayDishes = () => {
    //     if (params.id) {
    //         console.log(restaurants.find(r => r.id === restaurantId))
    //     }
    //     else {
    //         return dishes
    //     }
    // }

    // displayDishes()

    function handleDeleteDish(id){
        fetch(`/dishes/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const newDishes = dishes.filter(dish => (dish.id !== id))
            setDishes(newDishes)
        })
    }

    return (
        <Wrapper>
            <h1>Top Rated Dishes</h1>
            {dishes.length > 0 ? (
                dishes.map((dish) => (
                    <Wrapper>
                        <Dish key={dish.id} >
                            <Box>
                                <h2>{dish.name}</h2>
                                <em># Ratings - Avg. Rating: </em>
                                <p>
                                    <Link to={`dish/${dish.id}`}>
                                        <Button>
                                            Read Reviews    
                                        </Button>
                                    </Link>
                                    <>     </>
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