import React from 'react'
import { Divider, Drawer } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { List, ListItem, ListItemIcon } from "@mui/material";
import { useSelector } from 'react-redux';
import BasketItem from './BasketItem';
import './Basket.scss'

export const Basket = ({ cardOpen, cardClose }) => {
    const order = useSelector(state => state.orderSection.orderData)
    
    return (
        <Drawer
            anchor="right"
            open={cardOpen}
            onClose={cardClose}
        >
            <List className='basket'>
                <ListItem>
                    <ListItemIcon>
                        <LocalGroceryStoreIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider />
                {
                    !order.length
                    ? <ListItem>No orders yet</ListItem>
                    : order.map(item => <BasketItem key={item.name} item={item} />)
                }
            </List>
        </Drawer>
    )
}
