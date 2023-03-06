import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import  { AppBar, Box }  from "@mui/material"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { useSelector } from "react-redux";

const Header = ({ handleBasket }) => {
    const ordersCount = useSelector(state => state.orderSection.orderData)
  
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
                        <Badge
                            badgeContent={ordersCount.length}
                            color="secondary"
                        >
                            <LocalGroceryStoreIcon />
                        </Badge>
                    </IconButton>
           
                </Toolbar>
            </AppBar>
        </Box>
    )
};


export default Header;