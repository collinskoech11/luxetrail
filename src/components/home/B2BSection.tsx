'use client';
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-scroll';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(180deg, #ffffff 0%, ${theme.palette.grey[100]} 100%)`,
  textAlign: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(4),
  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
  transition: 'all 0.35s ease',
  background: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
  },
}));

const FeaturedCard = styled(StyledCard)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  background: `linear-gradient(135deg, #ffffff 0%, #f7faff 100%)`,
  boxShadow: '0 14px 36px rgba(0,0,0,0.12)',
}));

const B2BSection = () => {
  const plans = [
    {
      title: 'Basic',
      description: 'Ideal for individuals seeking a solid foundation in travel consultancy.',
      features: [
        'Access to core modules',
        'Standard support',
        'Online resources',
        'In-person classes',
      ],
      featured: false,
    },
    {
      title: 'Professional',
      description: 'Advanced and comprehensive training for aspiring consultants.',
      features: [
        'All Basic features',
        'Advanced modules',
        'Dedicated account manager',
        'Customizable course content',
      ],
      featured: true,
    },
    {
      title: 'Custom',
      description: 'Tailored programs for corporate partners and organizations.',
      features: [
        'All Professional features',
        'On-site training availability',
        'Exclusive workshops',
        'Strategic partnership options',
      ],
      featured: false,
    },
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        {/* Section Intro */}
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
            mb: 2,
          }}
        >
          Training & Partnership Options
        </Typography>

        <Typography
          sx={{
            mb: 8,
            color: 'text.secondary',
            fontSize: {
              xs: '1rem',
              md: '1.15rem',
            },
            maxWidth: 700,
            mx: 'auto',
            lineHeight: 1.7,
          }}
        >
          Choose the program that best aligns with your goals—whether you're starting out,
          advancing your expertise, or training an entire team.
        </Typography>

        {/* Plans */}
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => {
            const CardComponent = plan.featured ? FeaturedCard : StyledCard;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: 'flex' }}
              >
                <CardComponent sx={{ flexGrow: 1 }}>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    
                    {/* Plan Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: plan.featured ? 'primary.main' : 'text.primary',
                      }}
                    >
                      {plan.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 3,
                        minHeight: 60,
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                      }}
                    >
                      {plan.description}
                    </Typography>

                    {/* Features */}
                    <List sx={{ textAlign: 'left', mb: 3 }}>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckIcon
                              sx={{
                                color: plan.featured
                                  ? 'primary.main'
                                  : 'success.main'
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              fontSize: '0.95rem',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>

                  {/* Enroll Button */}
                  <Box sx={{ textAlign: 'center', pb: 1 }}>
                    <Link to="book-slot" smooth duration={500}>
                      <Button
                        variant={plan.featured ? 'contained' : 'outlined'}
                        size="large"
                        sx={{
                          borderRadius: 30,
                          px: 4,
                          py: 1.3,
                          fontWeight: 600,
                          textTransform: 'none',
                        }}
                      >
                        Enroll
                      </Button>
                    </Link>
                  </Box>
                </CardComponent>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default B2BSection;
