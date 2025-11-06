'use client';
import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Avatar, Chip, Container, FormControl, InputLabel, Select, MenuItem, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
}));

const ConsultantCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '@media (hover: hover)': {
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[6],
    },
  }
}));

const consultants = [
  {
    id: 1,
    name: 'Irene Gitau',
    skills: ['Tour Planning', 'Customer Service', 'Marketing'],
    certification: 'Advanced',
    availability: 'Available',
    avatar: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762415772/WhatsApp_Image_2025-11-06_at_10.55.42_ar5ypk.jpg', // Placeholder
    experience: 'Senior',
    location: 'Nairobi',
  },
  {
    id: 2,
    name: 'Emma Karanja',
    skills: ['Logistics', 'Operations', 'Adventure Travel'],
    certification: 'Expert',
    availability: 'Available',
    avatar: '/avatars/john-smith.jpg', // Placeholder
    experience: 'Mid-Level',
    location: 'Mombasa',
  }
  // {
  //   id: 3,
  //   name: 'Emily White',
  //   skills: ['Eco-Tourism', 'Sustainability', 'Community Engagement'],
  //   certification: 'Intermediate',
  //   availability: 'Busy',
  //   avatar: '/avatars/emily-white.jpg', // Placeholder
  //   experience: 'Junior',
  //   location: 'Kisumu',
  // },
];

const HireConsultantSection = () => {
  const [experience, setExperience] = useState('');
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');

  const filteredConsultants = consultants.filter((consultant) => {
    return (
      (experience === '' || consultant.experience === experience) &&
      (skill === '' || consultant.skills.includes(skill)) &&
      (location === '' || consultant.location === location)
    );
  });

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
          Hire a Trained Consultant
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
            maxWidth: 700,
            mx: { xs: 'auto', md: 0 },
          }}
        >
          Access our pool of certified and experienced tour and travel consultants.
        </Typography>


        <Grid container spacing={4} justifyContent="center">
          {filteredConsultants.length > 0 ? (
            filteredConsultants.map((consultant) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={consultant.id}
                component="div"
                sx={{ display: "flex" }} // ensures equal height cards stretch
              >
                <ConsultantCard
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    minHeight: 330, // 👈 sets a consistent card height
                    p: 3,
                  }}
                >
                  <Box>
                    <Avatar
                      alt={consultant.name}
                      src={consultant.avatar}
                      sx={{ width: 90, height: 90, margin: "0 auto 16px" }}
                    />
                    <Typography variant="h5" component="h3" gutterBottom>
                      {consultant.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                      {consultant.certification} Certified
                    </Typography>
                    <Box>
                      {consultant.skills.map((s, idx) => (
                        <Chip key={idx} label={s} size="small" sx={{ m: 0.5 }} />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Chip
                      label={consultant.availability}
                      color={
                        consultant.availability === "Available" ? "success" : "warning"
                      }
                      sx={{ mr: 1 }}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                    >
                      View Profile
                    </Button>
                  </Box>
                </ConsultantCard>
              </Grid>
            ))
          ) : (
            <Grid item xs={12} component="div">
              <Typography variant="h6" color="textSecondary" textAlign="center">
                No consultants match your criteria. Please adjust your filters.
              </Typography>
            </Grid>
          )}
        </Grid>


      </Container>
    </SectionWrapper>
  );
};

export default HireConsultantSection;