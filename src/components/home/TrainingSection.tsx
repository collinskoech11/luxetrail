'use client';
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-scroll';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(180deg, #ffffff 0%, ${theme.palette.grey[100]} 100%)`,
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 360,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
  transition: 'all 0.4s ease',
  [theme.breakpoints.up('md')]: {
    height: 460,
  },
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 38px rgba(0,0,0,0.18)',
  },
}));

const Overlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 100%)',
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  marginBottom: theme.spacing(2),
}));

const TrainingSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column: Text */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={800}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: '1.7rem',
                      sm: '2.1rem',
                      md: '2.6rem',
                      lg: '3rem',
                    },
                    lineHeight: 1.25,
                    letterSpacing: '-0.5px',
                    mb: 2,
                  }}
                >
                  Our Comprehensive Training Programs
                </Typography>

                {/* <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}
                >
                  Unlock your potential in the tourism industry with our
                  expertly designed training programs. We focus on practical,
                  real-world skills to accelerate your career.
                </Typography> */}

                <List sx={{ mt: 2 }}>
                  {[
                    {
                      title: 'Certified Inbound Tourism Training',
                      subtitle: 'Gain respected, industry-recognized certifications.',
                    },
                    {
                      title: 'Real-World Mentorship',
                      subtitle: 'Learn directly from experienced travel professionals.',
                    },
                    {
                      title: 'Career Placement After Completion',
                      subtitle: 'Connect with top travel and tourism companies.',
                    },
                  ].map((item, index) => (
                    <StyledListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleOutlineIcon
                          sx={{ fontSize: 28, color: '#1C7ED6' }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            {item.subtitle}
                          </Typography>
                        }
                      />
                    </StyledListItem>
                  ))}
                </List>

                <Link to="book-slot" smooth duration={600} offset={-80}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 4,
                      borderRadius: 3,
                      px: 5,
                      py: 1.5,
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background:
                        'linear-gradient(135deg, #0A58CA 0%, #1C7ED6 60%, #4DABF7 100%)',
                      boxShadow: '0 8px 20px rgba(28, 126, 214, 0.25)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        background:
                          'linear-gradient(135deg, #0949a5 0%, #176ab9 60%, #3c9ae6 100%)',
                        boxShadow: '0 12px 26px rgba(28, 126, 214, 0.35)',
                      },
                    }}
                  >
                    Join Our Next Training Session
                  </Button>
                </Link>
              </Box>
            </Fade>
          </Grid>

          {/* Right Column: Image */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1100}>
              <ImageWrapper>
                <img
                  src="https://res.cloudinary.com/dqokryv6u/image/upload/v1762413066/luxebanner2_jr0tgg.png"
                  alt="Training Session"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Overlay />
              </ImageWrapper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TrainingSection;
