import { addToCart } from '@/reduxToolkit/asyncThunk'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({ data }) => {
  const notify = () => toast(`${data.title}: is added to cart`);
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(data.id))
    notify()
  }


  return (
    <>
      <ToastContainer autoClose={2000} />
      <Box sx={{ bgcolor: '#e6efff', borderRadius: '4px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',overflow:'hidden' }}>
        <Image style={{}}
          width={300} height={300}
          src={data.thumbnail}
          alt="product"
        />

        <Box sx={{p:'1.5rem', bgcolor:'white',display:'flex',flexDirection:'column',gap:'.5rem'}}>
          <Typography sx={{color:'maroon',fontWeight:'500', fontSize:'18px'}}>{data.title}</Typography>
          <Typography sx={{ color: 'gray', fontWeight: '500', fontSize: '18px' }}>{data.price} $</Typography>
          <Typography sx={{ color: 'maroon', fontWeight: '400', fontSize: '12px' }}>{data.description.substring(0, 100)}... </Typography>
          <Button onClick={handleAddToCart} sx={{ bgcolor: '#fff7f7',color:'black' }}>Add to Cart</Button>
        </Box>
      </Box>
    </>
  );
}

export default Product
