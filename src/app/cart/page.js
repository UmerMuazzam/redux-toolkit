"use client";

import CartItem from "@/components/CartItem";
import CartPageSkelton from "@/components/CartPageSkelton";
import TotalAmount from "@/components/TotalAmount";
import { fetchCartProducts } from "@/reduxToolkit/asyncThunk";
import { useGetSingleProductQuery } from "@/reduxToolkit/products";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {

  // ************************ASYNC THUNK ********************************
  // const dispatch = useDispatch();
  // const { cart, cartItemsDetail, loading, error } = useSelector((state) => state.products);
  // useEffect(() => {
  //   dispatch(fetchCartProducts(cart)); 
  // }, [cart]);
  // if (loading) return <CartPageSkelton/>;

  // useEffect(() => {
  // }, [])

  // ******************************RTK QUERY FUNCTIONS****************************
  
  const { cart } = useSelector((state) => state.products);
  let cartItemsDetail = cart || [];

  if (!cart.length) {
    return <h1 style={{ marginTop: "6rem", fontSize: '24px', textAlign: 'center', fontWeight: '500' }}>Your bucket is empty...</h1>
  }

  return (
    <Container maxWidth={"md"} sx={{ my: "6rem", }}>
      <Box
        sx={{
          mb: "2rem",
          fontSize: "24px",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        <h1>Your Cart Bucket</h1>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cartItemsDetail.map((data, i) => (
          <CartItem key={i} myData={data}  />
        ))}
      </Box>
      <TotalAmount/>
    </Container>
  );
};

export default page;
