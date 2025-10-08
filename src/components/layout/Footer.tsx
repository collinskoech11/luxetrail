'use client';
import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, IconButton, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TikTokIcon from '@mui/icons-material/TikTok'; // Removed this import
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'; // Added next/link import

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(10), // Generous whitespace
}));

const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const VisuallyHidden = styled('span')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

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
              <Link href="/" passHref legacyBehavior>
                <FooterLink>Home</FooterLink>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <FooterLink>About</FooterLink>
              </Link>
              <Link href="/programs" passHref legacyBehavior>
                <FooterLink>Our Programs</FooterLink>
              </Link>
              <Link href="/hire" passHref legacyBehavior>
                <FooterLink>Hire</FooterLink>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <FooterLink>Contact</FooterLink>
              </Link>
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
              {/* Removed TikTokIcon import and usage */}
              <IconButton color="inherit" href="https://tiktok.com" target="_blank">
                <VisuallyHidden>TikTok</VisuallyHidden> {/* Replaced Typography with VisuallyHidden */}
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
