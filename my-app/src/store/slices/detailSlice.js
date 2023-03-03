import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { beersApi } from '../../api/Api';

export const fetchdetailCardThunk = createAsyncThunk(
    'detail/fetchdetailCardThunk',
    async function(id) {
        const data = await beersApi.getBeerCard(id)
        return data
    }
)
const initialState = {
    detailBeersData: [],
};


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchdetailCardThunk.fulfilled, (state, action) => {
                state.detailBeersData = action.payload
            })
    }
})


export default detailSlice.reducer