import { Typography } from "@mui/material"


export default function UserCard({user}) {
    return (
            <Typography variant="h5">{user.first_name}, {user.location}</Typography>
    )
}