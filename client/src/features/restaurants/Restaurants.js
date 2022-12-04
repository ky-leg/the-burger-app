import Restaurant from "./Restaurant"
import { Button, Typography } from '@mui/material'
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";

export default function Restaurants({ restaurants, handleDelete }){
    return (
        <>
        {restaurants ? (
            restaurants.map((restaurant) => (
            <Restaurant 
                key={restaurant.id} 
                restaurant={restaurant} 
                handleDelete={handleDelete}/>
            ))
        ) : (
            <>
            <Typography variant="h2">No Restaurants Found</Typography>
            <Button component = {Link} to="/restaurants">
                Back To Homepage
            </Button>
            </>
        )}
        </>
    )
}

