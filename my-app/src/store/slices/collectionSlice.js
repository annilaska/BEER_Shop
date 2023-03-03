import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { beersApi } from '../../api/Api';

export const fetchCardsThunk = createAsyncThunk(
    'cards/fetchCardsThunk',
    async function(currentPage) {
        const data = await beersApi.getAllBeers(currentPage)
        return data 
    }
)

let initialState = {
    beersData: [],
};

const collectionSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCardsThunk.fulfilled, (state, action) => {
                state.beersData = action.payload
            })
    }
})

export default collectionSlice.reducer