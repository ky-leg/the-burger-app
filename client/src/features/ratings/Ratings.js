import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Rating from './Rating';

function Ratings({ratings, displayUserButton, displayTitleOff, handleDeleteRating}) {
    return (
            (ratings) ? (
                ratings.map((rating) => (
                    <Rating rating={rating} 
                            displayUserButton={displayUserButton}
                            displayTitleOff={displayTitleOff}
                            handleDeleteRating={handleDeleteRating}
                            />
                ))
            ) : (
                <Box>
                    <h2>No Ratings Found</h2>
                    <Button as = {Link} to="/">
                        Back To Homepage
                    </Button>
                </Box>
            )
    )
}

export default Ratings;

// NOTES 
// <Ratings> expects ratings to be passed in, 
// checks if there are more than 0 ratings
// then maps over ratings, 
// returning a <Rating> compnent and passing it 
// the rating for each. 
// 
// if there 0 ratings in the ratings passed in, 
// a button is rendered to return to home page