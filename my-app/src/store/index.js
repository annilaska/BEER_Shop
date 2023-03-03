import { configureStore } from '@reduxjs/toolkit'
import collectionSlice from './slices/collectionSlice' 
import detailSlice from './slices/detailSlice'

export const store = configureStore({
    reducer: {
        collectionSection: collectionSlice,
        detailSection: detailSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})