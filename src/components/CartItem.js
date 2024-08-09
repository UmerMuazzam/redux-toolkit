import { getCartProducts, removeFromCart } from '@/reduxToolkit/asyncThunk';
import { productsApi, useGetSingleProductQuery } from '@/reduxToolkit/products';
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CartPageSkelton from './CartPageSkelton';


const CartItem = ({ myData }) => {
    // ******************************************USING ASYNC THUNK OF TOOLKIT ******************************************************
    const dispatch = useDispatch()
    // const handleRemoveFromCart = () => {  
    //     dispatch(removeFromCart(data.id))
    // };
    // useEffect(()=>{
    // }, [data])

    // ******************************************USING RTK QUERY OF TOOLKIT ******************************************************

    const { data, error, isLoading  } = useGetSingleProductQuery(myData); 
    
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(data.id))
    };

    useEffect(()=>{
        if (data) dispatch(getCartProducts(data))
    }, [data])

    if (isLoading) return <CartPageSkelton/>
    
    return (
        <Box sx={{ flexGrow: 1, position: 'relative', bgcolor: 'white', borderRadius: '4px', padding: '1.5rem 1rem', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} >
                    <Image style={{width:'100%' }}
                        width={200} height={300}
                        src={data?.thumbnail}
                        alt="cart item"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8} sx={{display:'flex',flexDirection:'column',gap:'.5rem'}}>
                    <Typography sx={{ color: 'maroon', fontWeight: '500', fontSize: '24px'  }}> {data?.title}</Typography>
                    <Typography sx={{ fontSize: '14px',color:'gray' }}>
                        {data?.description}
                    </Typography>
                    <Typography sx={{ borderRadius: '4px', p: '3px', bgcolor: 'green', color: 'white', width: '7rem', fontSize: '13px' }}><b>Rating</b> : {data?.rating} ⭐ </Typography>
                    <Typography sx={{ color: 'gray' }}><b>Brand</b> : {data?.brand || "Unknown"}</Typography>
                    <Typography sx={{ color: 'gray' }}><b>Category</b> : {data?.category || "Unknown"}</Typography>
                    <Typography sx={{ color: 'gray' }}><b>Quantity</b> : 1X1</Typography>
                    <Typography sx={{ color: 'gray' }}><b>Price</b> : <Typography component='span' sx={{ color:'maroon',fontSize:'18px',fontWeight:'bold'}}>{data?.price}$</Typography></Typography>
                    <button onClick={handleRemoveFromCart} style={{ position: 'absolute', top: '5px', right: '10px', fontSize: '18px' ,p:'0', color:'maroon' }}>
                        X
                    </button>
                </Grid>
            </Grid>
        </Box>

    )
}

export default CartItem
