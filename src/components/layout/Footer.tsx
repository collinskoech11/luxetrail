'use client';
import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, IconButton, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/TikTok'; // Assuming a TikTok icon exists or will be added
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(10), // Generous whitespace
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              LUXETRAIL
            </Typography>
            <Typography variant="body2">
              Shaping the Next Generation of Tour and Travel Consultants.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/programs">Our Programs</FooterLink>
              <FooterLink href="/hire">Hire</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              {/* Assuming TikTokIcon is available or a placeholder */}
              <IconButton color="inherit" href="https://tiktok.com" target="_blank">
                {/* Replace with actual TikTok icon if available */}
                <Typography variant="srOnly">TikTok</Typography> 
                {/* For now, using a generic icon or text if TikTokIcon is not in @mui/icons-material */}
                <img src="/tiktok-icon.svg" alt="TikTok" style={{ filter: 'invert(1)', width: 24, height: 24 }} />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Email: luxetrailconsultancy@gmail.com
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                    color: 'white',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
              <Button variant="contained" color="secondary" fullWidth sx={{ mt: 1, borderRadius: 3 }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} LuxeTrail. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
