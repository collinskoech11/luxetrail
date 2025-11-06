'use client';
import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.background.default,
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 300,
  backgroundColor: theme.palette.grey[300], // Placeholder background
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: 400,
  },
}));

const AboutSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid xs={12} md={6} component="div">
            <ImageWrapper>
              {/* Placeholder for an image */}
              <img
                src="https://res.cloudinary.com/dqokryv6u/image/upload/v1762412757/luxbanner_xlpsmq.png"
                alt="AboutLuxeTrail Consultancy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} md={6} component="div">
            <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: '1.5rem', // phones
                    sm: '2rem',   // tablets
                    md: '2.5rem', // small laptops
                    lg: '3rem',   // desktops
                    xl: '3.4rem', // large screens
                  },
                  lineHeight: 1.3,
                  textAlign: { xs: 'center', md: 'left' }, // center on small, left on large
                }}
              >
                About LuxeTrail Consultancy
              </Typography>
            <Typography variant="body1" paragraph>
              At LuxeTrail Consultancy, our mission is to empower the next generation of tour and travel consultants. We provide certified training programs designed to equip individuals with the skills and knowledge needed to excel in the dynamic tourism industry.
            </Typography>
            <Typography variant="body1" paragraph>
              We believe in connecting talent with opportunity, fostering a community where expertise meets demand. Our comprehensive approach ensures that our consultants are not just trained, but are also ready to make a significant impact in the global travel landscape.
            </Typography>
            <Link href="/about">
              <Button component="a" variant="contained" color="primary" sx={{ mt: 2, borderRadius: 3 }}>
                Learn More
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;
