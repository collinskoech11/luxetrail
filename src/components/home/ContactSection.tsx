'use client';
import React from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.grey[50],
  textAlign: 'center',
}));

const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: theme.palette.common.white,
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 14px 32px rgba(0,0,0,0.08)',
    transform: 'translateY(-4px)',
  },
}));

const ContactSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="md">
        {/* Main Heading */}
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '1.9rem', sm: '2.4rem', md: '3rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            color: 'text.secondary',
            mb: 6,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          We'd love to hear from you! Connect with us through any of the channels below.
        </Typography>

        {/* Cards Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'stretch',
            justifyContent: 'center',
            gap: 4,
            mb: 6,
          }}
        >
          {/* Email Section */}
          <Card sx={{ flex: 1, minWidth: 260 }}>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 600 }}
            >
              Email Us
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              luxetrailconsultancy@gmail.com
            </Typography>

            <Button
              component="a"
              href="mailto:luxetrailconsultancy@gmail.com"
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              sx={{ fontWeight: 600 }}
            >
              Send Email
            </Button>
          </Card>

          {/* Social Section */}
          <Card sx={{ flex: 1, minWidth: 260 }}>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 600 }}
            >
              Follow Us
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Stay updated and connect with us.
            </Typography>

            <Box>
              <IconButton
                color="primary"
                href="https://www.instagram.com/luxetrail_consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mx: 1 }}
              >
                <InstagramIcon sx={{ fontSize: 38 }} />
              </IconButton>

              <IconButton
                color="primary"
                href="https://www.tiktok.com/@luxetrail_consultancy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mx: 1,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  padding: '8px',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                <img src="/tiktoklogo.png" alt="TikTok" style={{ width: 30, height: 30 }} />
              </IconButton>

              <IconButton
                color="primary"
                href="https://linkedin.com/company/luxetrail"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mx: 1 }}
              >
                <LinkedInIcon sx={{ fontSize: 38 }} />
              </IconButton>
            </Box>
          </Card>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          DM or email us for rates and partnership inquiries.
        </Typography>
      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;
