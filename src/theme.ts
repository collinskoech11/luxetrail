'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B3D91', // Deep Royal Blue
    },
    secondary: {
      main: '#F9A826', // Warm Gold
    },
    background: {
      default: '#F4F6FA', // Soft Gray-Blue
    },
    text: {
      primary: '#000000', // Neutral Black
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h3: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h4: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h5: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    h6: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
    },
    body1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontWeight: 400,
    },
    body2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners
  },
  spacing: 8, // Default spacing unit, so theme.spacing(10) will be 80px
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Example shadow elevation
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Keep consistent with shape.borderRadius
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px', // Adjusted padding
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0B3D91 0%, #1E63B3 100%)', // Gradient from primary
          boxShadow: '0 4px 12px rgba(11, 61, 145, 0.3)',
          color: '#ffffff',
          '&:hover': {
            boxShadow: '0 6px 18px rgba(11, 61, 145, 0.4)',
            background: 'linear-gradient(135deg, #0A357A 0%, #1A5496 100%)', // Darker gradient on hover
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #F9A826 0%, #FFC107 100%)', // Gradient from secondary
          boxShadow: '0 4px 12px rgba(249, 168, 38, 0.3)',
          color: '#000000',
          '&:hover': {
            boxShadow: '0 6px 18px rgba(249, 168, 38, 0.4)',
            background: 'linear-gradient(135deg, #E0941F 0%, #E6AC00 100%)', // Darker gradient on hover
          },
        },
      },
    },
  },
});

export default theme;