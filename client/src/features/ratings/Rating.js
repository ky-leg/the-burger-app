import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { Card, CardHeader, CardActions, CardContent, Typography, Button, Rating as RatingStyle } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Rating({rating, userId}) {
    return (
        <Card key={rating.id} sx={{ minWidth: 345  }}>
            <CardHeader
                title={`${rating.dish.name} from ${rating.restaurant.name}`}
                subtitle={`Location: ${rating.restaurant.location}`}
                action={
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="h6">{rating.title}</Typography>
                <RatingStyle name="half-rating-read"  
                            precision={0.1} 
                            value={rating.score} 
                            readOnly size="small"/>
                <Typography>{rating.review}</Typography>
            </CardContent>
            <CardActions>
                {!userId? 
                    (
                    <Button component={Link} 
                            to= {`/user/${rating.user.id}`} 
                            variant="outline">
                        {rating.user.username}
                    </Button>
                    ):""
                } 
            </CardActions>
        </Card>
    )
}

export default Rating;

// NOTES 
// expects a rating to be passed in, userId optional prop
// Renders a <Card> with a 
// <CardHeader> (which includes dish, 
// restaurant name/location & has a <DeleteIcon> Button) 
// also has <CardContent> within <Card> 
// including rating title, rating score and reivew body
// finally renders a <Button> which links to the user 
// on the condition that a userId is passed,  
// ie when the view is not already on a user's rating page