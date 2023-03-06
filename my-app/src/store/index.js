import { configureStore } from '@reduxjs/toolkit'
import collectionSlice from './slices/collectionSlice' 
import detailSlice from './slices/detailSlice'
import orderSlice from './slices/orderSlice'

export const store = configureStore({
    reducer: {
        collectionSection: collectionSlice,
        detailSection: detailSlice,
        orderSection: orderSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})