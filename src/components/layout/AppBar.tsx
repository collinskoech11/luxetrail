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
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';

// --- Styled Components ---

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  // Modern App Bar Styling
  backgroundColor: 'rgba(255, 255, 255, 0.45)', // Slight white background for contrast
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle shadow for lift
  padding: theme.spacing(1, 0), // Reduced padding for a sleeker look
  backdropFilter: 'blur(10px)', // Enhanced blur for the 'glassmorphism' effect
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavigationLink = styled('span')(({ theme }) => ({
  margin: theme.spacing(0, 2),
  color: theme.palette.text.primary,
  textDecoration: 'none', // Remove underline
  cursor: 'pointer',
  fontWeight: 600, // Made text bolder (500 -> 600)
  fontSize: '1rem', // Ensures link text is clear
  position: 'relative',
  paddingBottom: '4px', // Space for the hover effect
  '&.active': {
    color: theme.palette.primary.main,
    '&::after': {
      width: '100%',
    },
  },
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
  const [activeLink, setActiveLink] = useState('hero');
  const pathname = usePathname();

  const toggleDrawer = (open: boolean) => () => { // Added type for 'open'
    setDrawerOpen(open);
  };

  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'training', label: 'Our Programs' },
    { to: 'course-details', label: 'Course Details' }, // New link
    { to: 'hire', label: 'Hire' },
    { to: 'reviews', label: 'Reviews' },
    { to: 'book', label: 'Book' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
            {/* Brand - Made it bolder with a higher variant */}
            <Box sx={{ textAlign: "center" }}>
              {/* Main Brand Name */}
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 2,
                  background: "linear-gradient(90deg, #10363b, #ff8f00)",
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
                  color: "#000000ff", // Subtle orange to match gradient
                }}
              >
                CONSULTANCY
              </Typography>
            </Box>


            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navLinks.map((link) => {
                const isHomePage = pathname === '/';
                return isHomePage ? (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    offset={-80}
                    onSetActive={(to) => setActiveLink(to)}
                    onSetInactive={(to) => setActiveLink('')}
                  >
                    <NavigationLink className={activeLink === link.to ? 'active' : ''}>{link.label}</NavigationLink>
                  </ScrollLink>
                ) : (
                  <Link key={link.to} href={`/#${link.to}`} passHref>
                    <NavigationLink>{link.label}</NavigationLink>
                  </Link>
                );
              })}
              
              {/* Modern Button Style */}
              <ScrollLink to="book">
                <Button
                  variant="contained"
                  sx={{
                    ml: 3,
                  }}
                >
                  Book a Slot
                </Button>
              </ScrollLink>
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
          {navLinks.map((link, index) => {
            const isHomePage = pathname === '/';
            return isHomePage ? (
              <ScrollLink
                to={link.to}
                key={index}
                spy={true}
                smooth={true}
                duration={500}
                onClick={toggleDrawer(false)}
                style={{ width: '100%', textDecoration: 'none' }}  // makes the whole button clickable
                activeClass="active"
                offset={-80}
                onSetActive={(to) => setActiveLink(to)}
                onSetInactive={(to) => setActiveLink('')}
              >
                <ListItemButton sx={{ '&:hover': { backgroundColor: 'action.hover' } }}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                    className={activeLink === link.to ? 'active' : ''}
                  />
                </ListItemButton>
              </ScrollLink>
            ) : (
              <Link href={`/#${link.to}`} key={index} passHref>
                <ListItemButton sx={{ '&:hover': { backgroundColor: 'action.hover' } }} onClick={toggleDrawer(false)}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  />
                </ListItemButton>
              </Link>
            );
          })}
          
        </List>
        <Box sx={{ textAlign: 'center', mt: 4, p: 2 }}>
          <ScrollLink to="book">
            <Button
              variant="contained"
              fullWidth
              onClick={toggleDrawer(false)}
            >
              Book a Slot
            </Button>
          </ScrollLink>
        </Box>
      </Drawer>
    </>
  );
};

export default AppBar;
