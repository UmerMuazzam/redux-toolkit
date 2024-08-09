import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

         //    GETTING ALL PRODUCTS LIST USING REDUX TOOLKIT ASYNC THUNK
export const fetchData = createAsyncThunk(
    'fake/jsonApi',
    async (category, thunkAPI) => {
        const response = await axios(`https://dummyjson.com/${category}`)
        return response.data
    },
)

         //    GETTING PRODUCT DETAILS BY USING IDS FROM CART ARRAY USING REDUX TOOLKIT ASYNC THUNK
export const fetchCartProducts = createAsyncThunk(
    'fake/products',
    async (cartItemIds, thunkAPI) => {
        const response = await Promise.all(
            cartItemIds.map((id) => axios.get(`https://dummyjson.com/products/${id}`))
        );
        // Extract the data part from the Axios response
        const data = response.map(res => res.data);
        return data;
    }
)



const initialState = {
    entities: [],
    loading: false,
    error: null,
    cart:[],
    cartItemsDetail:[]
}

// Then, handle actions in your reducers:
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: { 
        addToCart: (state,action) => {
            // if product id allready exist in cart array then return 
            const newCart = state.cart.filter(c => c === action.payload)
            if(newCart.length) return;
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => { 
            const newCart = state.cart.filter(c => c != action.payload)
            const removeFromCartDetails = state.cartItemsDetail.filter(c => c.id != action.payload);
            state.cartItemsDetail = removeFromCartDetails;
            state.cart = newCart;
        },
        getCartProducts: (state, action) => {
            const newCart = state.cartItemsDetail.filter(c => c.id === action.payload.id)
            if (newCart.length) return;
            state.cartItemsDetail.push(action.payload);
        },
        
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.entities = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCartProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.loading = false; 
                state.cartItemsDetail=action.payload;
            })
            .addCase(fetchCartProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
})

export const { addToCart, removeFromCart, getCartProducts } = productsSlice.actions

export const productsReducer = productsSlice.reducer;



















