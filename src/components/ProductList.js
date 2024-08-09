"use client"

import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { fetchData } from '@/reduxToolkit/asyncThunk'
import HomePageSkelton from './HomePageSkelton'
import SwipperSlider from './SwipperSlider'
import SliderSkelton from './SliderSkelton'
import { useGetProductsQuery } from '@/reduxToolkit/products'

const ProductList = () => {
    const dispatch = useDispatch()
    // const { entities, error, loading } = useSelector((state) => state.products)
    // const products = entities.products;
    // useEffect(() => { 
    //     dispatch(fetchData('products')) // with async thunk
    // }, [])

    //  USING RTK QUERY ************************************************************************************************
    const { data, error, isLoading } = useGetProductsQuery();
    const [products, setProduct] = useState([])
    const loading = isLoading;
    
    useEffect(() => {
        setProduct(data?.products)  
    }, [data])


    if (error) {
        return <h2>Something Went Wrong While fetching Products list</h2>
    }

    return (
        <Container>
            <Box sx={{ mt: '6rem' }}>
                {loading ? <SliderSkelton /> : <SwipperSlider />}
            </Box>
            {loading ? <HomePageSkelton /> : <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', my: '2rem' }}>
                <Grid container spacing={2}>
                    {products?.map((item) => {
                        return <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product data={item} />
                        </Grid>
                    })}
                </Grid>
            </Box>}
        </Container>
    )
}

export default ProductList
