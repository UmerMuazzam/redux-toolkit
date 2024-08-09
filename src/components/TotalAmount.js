import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TotalAmount = () => {
    let totalPrice;
    const { cartItemsDetail } = useSelector((state) => state.products) 
    if (cartItemsDetail){
         totalPrice = cartItemsDetail.reduce((ac, cn) => {
            return ac + cn.price
        }, 0).toFixed(2)
        console.log('totalPrice: ', totalPrice)
         
    }
 
    

    return (
        <Box sx={{ mt: "6rem", p: '2rem', bgcolor: 'white', borderRadius: '4px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
            <Box sx={{ fontWeight: '500', fontSize: '24px' , mb: '1rem',color:'maroon',borderBottom:'1px solid maroon' }}>
                Review
            </Box>
            <Box sx={{ fontWeight: '500', fontSize: '18px', display: 'flex', justifyContent: 'space-between', mb:'1rem' }}>
                <Typography sx={{ color: 'gray' }}>Total Items </Typography>
                <Typography sx={{ color: 'maroon', fontWeight: 'bold' }}>{cartItemsDetail.length}</Typography>
            </Box>
            <Box sx={{ fontWeight: '500', fontSize: '18px', display: 'flex', justifyContent: 'space-between' ,mb:'1rem' }}>
                <Typography sx={{ color: 'gray' }}>Shipping Fee </Typography>
                <Typography sx={{ color: 'maroon', fontWeight: 'bold' }}>2$</Typography>
            </Box>
            <Box sx={{ fontWeight: '500', fontSize: '18px', display: 'flex', justifyContent: 'space-between', mb:'1rem' }}>
                <Typography sx={{ color: 'gray' }}>GST Charges </Typography>
                <Typography sx={{ color: 'maroon', fontWeight: 'bold' }}>3.5$</Typography>
            </Box>
            <Box sx={{ fontWeight: '500', fontSize: '18px', display: 'flex', justifyContent: 'space-between', mb:'1rem' }}>
                <Typography sx={{ color: 'gray' }}>Grand Total </Typography>
                <Typography sx={{ color: 'maroon', fontWeight: 'bold' }}>{totalPrice}$</Typography>
            </Box>
            <Box sx={{textAlign:'center'}}>
                <button className='checkout' style={{ padding: '.5rem 2rem', color: 'white', background: '#785858',border:'1px solid maroon'  }}>PROCEED TO CHECKOUT</button>
            </Box>
        </Box>
    )
}

export default TotalAmount
