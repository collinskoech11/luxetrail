'use client';
import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.background.default, // Soft gray for section contrast
  textAlign: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10], // Enhanced shadow on hover
  },
}));

const B2BSection = () => {
  const plans = [
    {
      title: 'Basic',
      description: 'Ideal for small teams looking for foundational training.',
      features: [
        'Access to core modules',
        'Standard support',
        'Online resources',
      ],
    },
    {
      title: 'Professional',
      description: 'Comprehensive training for growing businesses.',
      features: [
        'All Basic features',
        'Advanced modules',
        'Dedicated account manager',
        'Customizable content',
      ],
    },
    {
      title: 'Custom',
      description: 'Tailored solutions for unique corporate needs.',
      features: [
        'All Professional features',
        'On-site training options',
        'Exclusive workshops',
        'Strategic partnership opportunities',
      ],
    },
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: '1.4rem', // phones
              sm: '1.9rem', // tablets
              md: '2.4rem', // small laptops
              lg: '2.8rem', // desktops
              xl: '3.2rem', // large screens
            },
            lineHeight: 1.3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Corporate Training & Partnership Options
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 6,
            fontWeight: 400,
            color: 'text.secondary',
            fontSize: {
              xs: '1rem',   // phones
              sm: '1.1rem', // tablets
              md: '1.2rem', // laptops
              lg: '1.3rem', // desktops
            },
            lineHeight: 1.6,
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: 700, // optional: keeps long text nicely contained
            mx: { xs: 'auto', md: 0 }, // centers on small screens
          }}
        >
          Elevate your team's expertise with our flexible B2B solutions.
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index} component="div" sx={{ display: "flex" }}>
              <StyledCard
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 420, // standard height for all cards
                  p: 3,
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0 }}>
                  <Typography variant="h4" component="h3" gutterBottom>
                    {plan.title}
                  </Typography>

                  <Typography variant="body1" paragraph>
                    {plan.description}
                  </Typography>

                  <List sx={{ textAlign: "left" }}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                {/* 👇 Anchored at the bottom */}
                <Box sx={{ mt: "auto", textAlign: "center", pt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ borderRadius: 3 }}
                  >
                    Request Corporate Rates
                  </Button>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default B2BSection;