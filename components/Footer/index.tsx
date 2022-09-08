import { Box, Typography } from "@mui/material";
import Copyright from "../Copyrights";

export default function Footer() {
    return(
        <Box sx={{ 
          color: 'white', 
          bgcolor: '#673AB7', 
          p: 6, 
          marginTop: 4
          }}
          component="footer"
        >
        <Typography 
          sx={{ color: 'white'}} 
          variant="h6" 
          align="center" 
          gutterBottom
        >
          Pokedex
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          sx={{ color: 'white'}}
        >
          All rights reserved
        </Typography>
        <Copyright />
      </Box>
    )
}