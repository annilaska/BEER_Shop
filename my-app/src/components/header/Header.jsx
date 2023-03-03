import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import  { AppBar, Box }  from "@mui/material"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


const Header = ({ handleBasket }) => {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         BEER Shop
                    </Typography>
               
                    <IconButton 
                        color="inherit"
                        onClick={handleBasket}
                    >
                        <LocalGroceryStoreIcon />
                    </IconButton>
           
                </Toolbar>
            </AppBar>
        </Box>
    )
};


export default Header;