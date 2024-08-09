"use client"

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton'; 
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CartPageSkelton() {
    const { cart } = useSelector((state) => state.products)

    return (
        <Container maxWidth="md" sx={{ mt: '2rem' }}>

            {cart.map((item, i) =>
            (<Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', mt: '2rem' }}>
                <Skeleton variant="rounded" width={'262px'} height={'262px'} />
                <Box>
                    <Skeleton variant="text" width={'500px'} height={'48px'} sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" width={'500px'} height={'48px'} sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" width={'120px'} height={'48px'} sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" width={'120px'} height={'48px'} sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" width={'120px'} height={'48px'} sx={{ fontSize: '1rem' }} />
                </Box>

            </Box>)
            )}
        </Container>
    );
}
