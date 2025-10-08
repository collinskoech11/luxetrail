'use client';
import React from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Using LinkedIn as a placeholder for TikTok
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
}));

const ContactSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          We'd love to hear from you! Reach out to us through any of the channels below.
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Email Us:
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            luxetrailconsultancy@gmail.com
          </Typography>
          <Button component="a" href="mailto:luxetrailconsultancy@gmail.com" variant="contained" color="primary" startIcon={<EmailIcon />} sx={{ borderRadius: 3 }}>
              Email Us
            </Button>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Follow Us:
          </Typography>
          <IconButton color="primary" href="https://instagram.com/luxetrail" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton color="primary" href="https://tiktok.com/luxetrail" target="_blank" rel="noopener noreferrer">
            {/* Placeholder for TikTok icon */}
            <img src="/tiktok-icon.svg" alt="TikTok" style={{ width: 36, height: 36 }} />
          </IconButton>
          <IconButton color="primary" href="https://linkedin.com/company/luxetrail" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>

        <Typography variant="body2" color="textSecondary">
          DM or email us for rates and partnership inquiries.
        </Typography>
      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;
