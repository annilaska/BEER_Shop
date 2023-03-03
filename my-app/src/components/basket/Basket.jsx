import React from 'react'
import { Drawer } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const Basket = ({ cardOpen, cardClose }) => {
    return (
        <Drawer
            anchor="right"
            open={cardOpen}
            onClose={cardClose}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <LocalGroceryStoreIcon />
                    </ListItemIcon>
                    <ListItemText primary='Basket' />
                </ListItem>
            </List>
        </Drawer>
    )
}
