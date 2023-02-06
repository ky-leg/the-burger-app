import { useNavigate } from "react-router";
import { fetchRatings } from "../ratings/ratingsSlice";// eslint-disable-next-line
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Stack, Typography, Button } from "@mui/material"
import Ratings from './Ratings'
import UserCard from "../users/UserCard";

function UserRatingsList() {
    const dispatch = useDispatch(); 
    const history = useNavigate(); 
    //redux stores 
    const ratings = useSelector((state) => state.ratings.entities)
    const users = useSelector((state) => state.users.entities)
    const params = useParams()// eslint-disable-next-line
    const userPage = users.find(user => user.id == params.id )

    function filteredRatingsFunction() {
        const filteredRatings = ratings.filter(rating => parseInt(rating.user_id)===parseInt(params.id))
        return filteredRatings
    }

    function handleDeleteRating(rating){
        fetch(`/ratings/${rating.id}`, {
            method: "DELETE",
          })
          .then(() => {
            dispatch(fetchRatings())
            .then(history(`/restaurants/${rating.restaurant.id}`))
          });
    }

    if (!userPage) return <p>Loading...</p>;

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">{userPage.username}</Typography>
            <Stack mt={2} spacing={3}>
                {userPage? (
                <UserCard user={userPage}/>
                ):""}
            {ratings ? (
                <Ratings ratings={filteredRatingsFunction()} handleDeleteRating={handleDeleteRating}/>
            ) : (
                <>
                <h2>No Ratings Found</h2>
                <Button as = {Link} to="/">
                    Back To Homepage
                </Button>
                </>
            )}
                <Button component={Link} to="/ratings/new" variant="outlined">
                    Create New Rating
                </Button>       
            </Stack>
        </Container>
    )
}

export default UserRatingsList;

// NOTES 
// a container for restaurants and its filters
// pulls ratings and restaurants from Redux 
// uses useState hook to initialize various variables which will be passed 
// to serve the filter function. 
// then renders a container with a name and stack containing 
// <RatingsFilterForm>, and then checks if the filteredRatings() is longer
// than 0, if so it passes them into the <Ratings> component, if not 
// it returns a button to return home. 
// finally there is a button at the bottom which takes the user to 
// the new rating page. 

// UNUSED Function  

// HANDLES DELETING RATING, NOT IN USE, takes in id 
// function handleDeleteRating(id){
//     fetch(`/ratings/${id}`, {
//         method: 'DELETE',
//     })
//     // .then(() => {
//     //     const newRatings = ratings.filter(rating => (rating.id !== id))
//     //     setRatings(newRatings)
//     // })
// }