'use client';
import React from 'react';
import { Box, Typography, Grid, Button, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.common.white, // Assuming a white background for this section
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

const TrainingSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} component="div">
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: '1.4rem', // phones
                  sm: '1.9rem', // tablets
                  md: '2.4rem', // small laptops
                  lg: '2.8rem', // desktops
                  xl: '3.2rem', // large screens
                },
                lineHeight: 1.3,
                textAlign: { xs: 'center', md: 'left' }, // center for mobile, left for desktop
              }}
            >
              Our Comprehensive Training Programs
            </Typography>
            <Typography variant="body1" paragraph>
              Unlock your potential in the tourism industry with our expertly designed training programs. We focus on practical skills and real-world application to ensure your success.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Certified Inbound Tourism Training</Typography>
                  <Typography variant="body1">Gain industry-recognized certifications.</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Real-World Mentorship</Typography>
                  <Typography variant="body1">Learn from experienced professionals.</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Career Placement After Completion</Typography>
                  <Typography variant="body1">Connect with leading travel companies.</Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Link href="/training-session">
              <Button component="a" variant="contained" color="primary" size="large" sx={{ mt: 4, borderRadius: 3 }}>
                Join Our Next Training Session
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} component="div">
            <ImageWrapper>
              {/* Placeholder for an image */}
              <img
                src="https://res.cloudinary.com/dqokryv6u/image/upload/v1762413066/luxebanner2_jr0tgg.png"
                alt="Training Session"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TrainingSection;
