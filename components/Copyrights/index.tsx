import { Typography, Link } from "@mui/material";

export default function Copyright() {
    return(
        <Typography 
            sx={{ color: 'white'}} 
            variant="body2" 
            color="text.secondary" 
            align="center"
        >
            {'Copyright © '}
            <Link 
                color="inherit"
                href=""
            >
                Pokedex
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}