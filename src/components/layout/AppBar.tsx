'use client';
import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// --- Styled Components ---

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  // Modern App Bar Styling
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // Slight white background for contrast
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle shadow for lift
  padding: theme.spacing(1, 0), // Reduced padding for a sleeker look
  backdropFilter: 'blur(10px)', // Enhanced blur for the 'glassmorphism' effect
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  borderBottom: `1px solid ${theme.palette.divider}`, // Subtle bottom line
}));

const NavigationLink = styled(
  ({ component, ...props }: { component?: React.ElementType } & any) => (
    <Typography component={component || 'a'} {...props} />
  ),
)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  color: theme.palette.text.primary,
  textDecoration: 'none', // Remove underline
  cursor: 'pointer',
  fontWeight: 600, // Made text bolder (500 -> 600)
  fontSize: '1rem', // Ensures link text is clear
  position: 'relative',
  paddingBottom: '4px', // Space for the hover effect
  '&:hover': {
    color: theme.palette.primary.main,
  },
  // Modern Hover Effect: Subtle bottom line on hover
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

// --- Main Component ---

const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => { // Added type for 'open'
    setDrawerOpen(open);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Our Programs' },
    { href: '/hire', label: 'Hire' },
    { href: '/book', label: 'Book' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
            {/* Brand - Made it bolder with a higher variant */}
            <Typography
              variant="h5" // Slightly larger for emphasis
              component="div"
              sx={{
                fontWeight: 800, // Extra bold logo
                letterSpacing: 2, // Increased letter spacing
                color: 'primary.main', // Give it a primary color pop
              }}
            >
              LUXETRAIL
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                    {link.label}
                  </Link>
              ))}
              {/* Modern Button Style */}
              <Link href="/book-slot">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: 8, // Pill shape for modern look
                    ml: 3,
                    px: 3, // Increased horizontal padding
                    fontWeight: 700, // Bolder text on button
                    boxShadow: '0 4px 10px rgba(theme.palette.primary.main, 0.25)', // Subtle shadow
                  }}
                >
                  Book a Slot
                </Button>
              </Link>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="primary" // Use primary color for the icon
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
      {/* Spacer to prevent content from hiding under the fixed AppBar */}
      <Toolbar />

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280, // Slightly wider drawer
            backgroundColor: 'background.default', // Use default background
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
            LUXETRAIL
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={toggleDrawer(false)}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: 18, // Larger font size
                    fontWeight: 700, // Bolder text in drawer
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ textAlign: 'center', mt: 4, p: 2 }}>
          <Link href="/book-slot">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: 8, fontWeight: 700 }}
              onClick={toggleDrawer(false)}
            >
              Book a Slot
            </Button>
          </Link>
        </Box>
      </Drawer>
    </>
  );
};

export default AppBar;
