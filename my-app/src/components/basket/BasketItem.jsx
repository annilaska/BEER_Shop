import React, { useState } from 'react'
import { IconButton, ListItem } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux";
import { removeItem } from '../../store/slices/orderSlice'
import ClearIcon from '@mui/icons-material/Clear';
import './Basket.scss'

const BasketItem = ({ item }) => {

  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleDecrement = () => {
    quantity === 1 ? dispatch(removeItem(item)) : setQuantity(quantity - 1)
  }

  const handleRemove = () => {
    dispatch(removeItem(item))
  }

  return (
    <ListItem className='basketItem'>
      <div className='basketItem-title'>
        {item.name}
      </div>
      <div className='count'>
        <IconButton onClick={handleDecrement}>
          <RemoveIcon fontSize="small" color="primary" />
        </IconButton>
        {quantity}
        <IconButton onClick={() => setQuantity(quantity + 1)}>
          <AddIcon fontSize="small" color="primary" />
        </IconButton>
      </div>
      <ClearIcon onClick={handleRemove} fontSize="small" color="action" />
    </ListItem>
  )
}

export default BasketItem