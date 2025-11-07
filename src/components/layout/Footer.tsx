'use client';
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  TextField,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0046a3 0%, #0a1b4f 100%)",
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  marginTop: theme.spacing(12),
  position: "relative",
  overflow: "hidden",
}));

const FooterLink = styled('span')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 0.85,
    transform: 'translateX(6px)',
  },
}));

const Footer = () => {
  const quickLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'training', label: 'Our Programs' },
    { to: 'hire', label: 'Hire' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb:2 }}>
              {/* Main Brand Name */}
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 2,
                  background: "linear-gradient(90deg, #ffffffff, #ff8f00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Montserrat', sans-serif", // ✅ Modern strong brand font
                }}
              >
                LUXETRAIL
              </Typography>

              {/* Subtext (Consultancy) */}
              <Typography
                variant="subtitle2"
                sx={{
                  mt: -0.3,
                  letterSpacing: 3,
                  fontSize: "0.65rem",
                  opacity: 0.85,
                  fontFamily: "'Playfair Display', Poppins", // ✅ Elegant contrast font
                  color: "#ffffffff", // Subtle orange to match gradient
                }}
              >
                CONSULTANCY
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{ opacity: 0.85, fontSize: { xs: ".95rem", md: "1rem" } }}
            >
              Shaping the Next Generation of Tour & Travel Consultants.
            </Typography>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: { xs: "1.2rem", md: "1.4rem" } }}
            >
              Quick Links
            </Typography>

            <Box display="flex" flexDirection="column" gap={1.2}>
              {quickLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <FooterLink>{link.label}</FooterLink>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social + Newsletter Column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: { xs: "1.2rem", md: "1.4rem" } }}
            >
              Connect With Us
            </Typography>

            <Box display="flex" gap={1}>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/luxetrail_consultancy/"
                target="_blank"
                sx={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                  '&:hover': {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "0.3s ease"
                }}
              >
                <InstagramIcon fontSize="medium" />
              </IconButton>

              <Box
                // color="inherit"
                // href="https://www.tiktok.com/@luxetrail_consultancy"
                // target="_blank"
                sx={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                  '&:hover': {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    // transform: "scale(1.1)",
                  },
                  transition: "0.3s ease"
                }}
              >
                <img src="/tiktoklogo.png" alt="TikTok" style={{ width: 36, height: 36 }} />
              </Box>

              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                  '&:hover': {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transform: "scale(1.1)",
                  },
                  transition: "0.3s ease"
                }}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
            </Box>

            <Typography sx={{ mt: 2, opacity: 0.85 }}>
              Email: luxetrailconsultancy@gmail.com
            </Typography>

            {/* Newsletter */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Newsletter
              </Typography>

              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  input: { color: "white" },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.08)",
                    '& fieldset': { border: "1px solid rgba(255,255,255,0.4)" },
                    '&:hover fieldset': { borderColor: "white" },
                    '&.Mui-focused fieldset': { borderColor: "white" }
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: "rgba(255,255,255,0.7)",
                  },
                }}
              />

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                  mt: 1.5,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 6,
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.25)',
            opacity: 0.85
          }}
        >
          <Typography variant="body2" sx={{ fontSize: '.9rem' }}>
            &copy; {new Date().getFullYear()} LuxeTrail. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
