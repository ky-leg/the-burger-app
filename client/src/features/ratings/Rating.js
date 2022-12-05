import { BrowserRouter as Router,Link, Route, useParams, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardActions, CardContent, Typography, Button, Rating as RatingStyle } from "@mui/material"
import { useState, useEffect  } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';

function Rating({rating, displayUserButton, displayTitleOff, handleDeleteRating}) {
    
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user))
          }
        })
      }, [])
    

    function onUpdateClick(){
        if (parseInt(rating.user.id) === parseInt(user.id)){
            console.log('this user should be able to edit')
            //ROUTE TO REVIEW PAGE "/ratings/update/:id"
            navigate(`/ratings/update/${rating.id}`)
        }
        else {
            setError(<Alert severity="error">You may only update one of your own reviews!</Alert>)  
        }
    }

    function onDeleteClick(){
        if (parseInt(rating.user.id) === parseInt(user.id)){
            handleDeleteRating(rating.id, rating.dish.id)
            
        }
        else {
            setError(<Alert severity="error">You may only delete one of your own reviews!</Alert>)  
        }
    }


    return (
        rating? (
            <Card key={rating.id} sx={{ minWidth: 345  }}>
            {!displayTitleOff?
            (
                <CardHeader
                title={`${rating.dish.name} from ${rating.restaurant.name}`}
                subtitle={`Location: ${rating.restaurant.location}`}
                
            />
            ):""}
            <CardContent>
                <Typography variant="h6">{rating.title}</Typography>
                <RatingStyle name="half-rating-read"  
                            precision={0.1} 
                            value={rating.score} 
                            readOnly size="small"/>
                <Typography>{rating.review}</Typography>
            </CardContent>
            <CardActions>
                {displayUserButton? 
                    (
                    <Button component={Link} 
                            to= {`/user/${rating.user.id}`} 
                            variant="outline">
                        {rating.user.username}
                    </Button>
                    ):""
                } 
                <IconButton onClick={onDeleteClick}>
                        <DeleteIcon/>
                </IconButton>
                <IconButton onClick={onUpdateClick}>
                        <EditIcon />
                </IconButton>
            </CardActions>
        {error}
        </Card>
        
        ):(<Typography variant="h5">Loading...</Typography>)
        
    )
}

export default Rating;

// NOTES 
// expects a rating to be passed in, displayUserButton optional prop
// Renders a <Card> with a 
// <CardHeader> (which includes dish, 
// restaurant name/location & has a <DeleteIcon> Button) 
// also has <CardContent> within <Card> 
// including rating title, rating score and reivew body
// finally renders a <Button> which links to the user 
// on the condition that a userId is passed,  
// ie when the view is not already on a user's rating page