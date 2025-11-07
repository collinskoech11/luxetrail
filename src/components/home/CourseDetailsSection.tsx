'use client';
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(180deg, ${theme.palette.grey[100]} 0%, #ffffff 100%)`,
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 360,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
  transition: 'all 0.4s ease',
  [theme.breakpoints.up('md')]: {
    height: 460,
  },
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 38px rgba(0,0,0,0.18)',
  },
}));

const CourseDetailsSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Left Column: Image */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={800}>
              <ImageWrapper>
                <img
                  src="https://res.cloudinary.com/dqokryv6u/image/upload/v1762547503/WhatsApp_Image_2025-11-07_at_23.20.07_erlyxp.jpg" // Placeholder image
                  alt="Course Details"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageWrapper>
            </Fade>
          </Grid>

          {/* Right Column: Text */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1100}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: '1.5rem',
                      sm: '1.9rem',
                      md: '2.4rem',
                    },
                    lineHeight: 1.25,
                    letterSpacing: '-0.5px',
                    mb: 3,
                  }}
                >
                  Important Course Information
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.primary', mb: 2 }}
                >
                  Physical makeup class held virtually on Fridays 7:30pm-8:30pm at an extra cost of 1000 per session.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.primary', mb: 2 }}
                >
                  We are located at Norwich Union House, 6th floor. Call/ DM/visit us for more information.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.primary', mb: 2 }}
                >
                  We accept lipa mdogo mdogo. Full payment is required to begin the class.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.primary', mb: 2 }}
                >
                  Terms and conditions apply.
                </Typography>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default CourseDetailsSection;
