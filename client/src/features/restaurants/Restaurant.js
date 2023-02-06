import { Card, CardHeader, CardActions, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';// eslint-disable-next-line
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";


export default function Restaurant({restaurant, handleDeleteRestaurant}) {
    return (
        <Card  key={restaurant.id} sx={{ minWidth: 345  }}>
                <CardHeader
                    title={restaurant.name}
                    action ={
                        <IconButton aria-label="settings" onClick={e => handleDeleteRestaurant(restaurant.id)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                    subheader={`Location: ${restaurant.location}`}
                />            
                <CardActions>
                    <Button 
                        component={Link}
                        to={`${restaurant.id}`}
                        variant="standard">
                            Top Dishes
                    </Button>
                </CardActions>
        </Card>
    )
}