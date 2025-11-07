'use client';
import React from 'react';
import { Box, Typography, Grid, Button, Container, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import TiltCard from './HeroSection/TiltCard';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} 100%)`,
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 350,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.grey[200],
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 32px rgba(0,0,0,0.16)',
  },
  [theme.breakpoints.up('md')]: {
    height: 420,
  },
}));

const AboutSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TiltCard maxTilt={15}>
              <Fade in timeout={800}>
                <ImageWrapper>
                  <img
                    src="https://res.cloudinary.com/dqokryv6u/image/upload/v1762511732/WhatsApp_Image_2025-11-07_at_13.34.49_wozdo7.jpg"
                    alt="About LuxeTrail Consultancy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageWrapper>
              </Fade>
            </TiltCard>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: '1.8rem',
                      sm: '2.2rem',
                      md: '2.8rem',
                      lg: '3.2rem',
                    },
                    lineHeight: 1.25,
                    letterSpacing: '-0.5px',
                  }}
                >
                  About LuxeTrail Consultancy
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}
                >
                  At LuxeTrail Consultancy, our mission is to empower the next generation of tour
                  and travel consultants. We provide certified training programs designed to equip
                  individuals with the skills and knowledge needed to excel in the dynamic tourism
                  industry.
                </Typography>

                <ScrollLink to="training" smooth duration={600} offset={-80}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      borderRadius: 3,
                      px: 5,
                      py: 1.5,
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background: 'linear-gradient(135deg, #10363b 0%, #18585f 50%, #1f7078 100%)',
                      boxShadow: '0 8px 20px rgba(16, 54, 59, 0.25)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        background: 'linear-gradient(135deg, #0d2c30 0%, #14494f 50%, #1b6269 100%)',
                        boxShadow: '0 12px 30px rgba(16, 54, 59, 0.35)',
                      },
                    }}
                  >
                    Learn More
                  </Button>

                </ScrollLink>
              </Box>
            </Fade>
          </Grid>

        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;
