'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const images = [
  'https://www.worldlandtrust.org/wp-content/uploads/2020/09/A-leopard-page.jpg',
  'https://safariavventura.com/wp-content/uploads/2018/02/leone-africano-2.jpg',
  'https://cdn.britannica.com/52/152452-050-9C11AEDD/Cheetah-acinonyx-jubatus-running-kenya.jpg',
]; // ← Add as many as you like

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 1s ease-in-out', // smooth fade
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(to right, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.1) 100%)',
    zIndex: 0,
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    '&::before': {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.1) 100%)',
    },
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: 1000,
  padding: theme.spacing(3),
  // [theme.breakpoints.up('md')]: {
  //   textAlign: 'left',
  //   marginLeft: theme.spacing(10),
  // },
}));

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000); // change every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroWrapper
      sx={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <Container maxWidth={false}>
        <HeroContent>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '1.8rem',  // phones
                sm: '2.4rem',  // tablets
                md: '3rem',    // small laptops
                lg: '3.6rem',  // desktops
                xl: '4rem',    // large screens
              },
              lineHeight: 1.2,
              // textAlign: 'center', // optional, improves layout for narrow screens
            }}
          >
            Shaping the Next Generation of Tour and Travel Consultants.
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4 }}>
            Empowering aspiring professionals with certified training and
            connecting them to global opportunities.
          </Typography>
          <Box>
            <Link href="/training" passHref>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mr: 2, borderRadius: 3 }}
              >
                Enroll Now
              </Button>
            </Link>
            <Link href="/hire" passHref>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                sx={{
                  borderRadius: 3,
                  borderColor: 'white',
                  color: 'white',
                }}
              >
                Hire a Consultant
              </Button>
            </Link>
          </Box>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
