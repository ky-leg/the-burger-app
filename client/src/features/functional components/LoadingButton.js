import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button, Rating } from "@mui/material"

export default function LoadingButton({}){
    return
        (
            <>
                <h2>No Dishes Found</h2>
                <Button 
                    component={Link}
                    to="/ratings"
                    variant="contained"
                >
                    Back To Homepage
                </Button>
            </>
            )
}