'use client';
import React from 'react';
import { Box, Typography, Grid, Button, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.secondary.light, // Faint gold tint
  color: theme.palette.primary.contrastText, // Ensure text is readable
}));

const AdvertiseSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom>
              Advertise With Us
            </Typography>
            <Typography variant="body1" paragraph>
              Reach a highly targeted audience of trained and aspiring tourism professionals. Our platform offers unique opportunities for B2B tourism agencies and ticketing systems to promote their services and products.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6" color="inherit">Target trained tourism professionals</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6" color="inherit">Promote B2B systems and products</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6" color="inherit">Boost visibility among active trainees</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Link href="/partner">
              <Button component="a" variant="contained" color="primary" size="large" sx={{ borderRadius: 3 }}>
                Partner With Us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default AdvertiseSection;
