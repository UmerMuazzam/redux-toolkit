"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import Image from 'next/image';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NavBar() {
    const { cart } = useSelector((state) => state.products)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#785858' }}>
                <Container>
                    <Toolbar>
                        <Link href="/">
                            {/* <Image style={{marginRight:'1rem'}}  width={60} height={60} src="/logo2.svg" alt='Logo '/> */}
                            <ShoppingCartOutlinedIcon   sx={{fontSize:'4rem',marginRight:'2rem'}}/>
                        </Link>
                        <Typography variant="h6" component="button" sx={{ marginRight: '1rem' }}>
                            <Link href="/">
                                Home
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="button" sx={{ position: 'relative' }} >
                            <Box component='span' sx={{ position: 'absolute', top: '-6px', right: "-11px", color: 'white', fontSize: '11px', px: '6px', borderRadius: '50%', bgcolor: 'green' }}>{cart.length}</Box>
                            <Link href="/cart">
                                Cart
                            </Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
