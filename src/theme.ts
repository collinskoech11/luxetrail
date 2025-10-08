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
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Example shadow elevation
        },
      },
    },
  },
});

export default theme;