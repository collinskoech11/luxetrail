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
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const consultants = [
  {
    id: 1,
    name: 'Jane Doe',
    skills: ['Tour Planning', 'Customer Service', 'Marketing'],
    certification: 'Advanced',
    availability: 'Available',
    avatar: '/avatars/jane-doe.jpg', // Placeholder
    experience: 'Senior',
    location: 'Nairobi',
  },
  {
    id: 2,
    name: 'John Smith',
    skills: ['Logistics', 'Operations', 'Adventure Travel'],
    certification: 'Expert',
    availability: 'Available',
    avatar: '/avatars/john-smith.jpg', // Placeholder
    experience: 'Mid-Level',
    location: 'Mombasa',
  },
  {
    id: 3,
    name: 'Emily White',
    skills: ['Eco-Tourism', 'Sustainability', 'Community Engagement'],
    certification: 'Intermediate',
    availability: 'Busy',
    avatar: '/avatars/emily-white.jpg', // Placeholder
    experience: 'Junior',
    location: 'Kisumu',
  },
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


        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Experience Level</InputLabel>
            <Select
              value={experience}
              label="Experience Level"
              onChange={(e) => setExperience(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Junior">Junior</MenuItem>
              <MenuItem value="Mid-Level">Mid-Level</MenuItem>
              <MenuItem value="Senior">Senior</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Skill</InputLabel>
            <Select
              value={skill}
              label="Skill"
              onChange={(e) => setSkill(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Tour Planning">Tour Planning</MenuItem>
              <MenuItem value="Customer Service">Customer Service</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Logistics">Logistics</MenuItem>
              <MenuItem value="Operations">Operations</MenuItem>
              <MenuItem value="Adventure Travel">Adventure Travel</MenuItem>
              <MenuItem value="Eco-Tourism">Eco-Tourism</MenuItem>
              <MenuItem value="Sustainability">Sustainability</MenuItem>
              <MenuItem value="Community Engagement">Community Engagement</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Location</InputLabel>
            <Select
              value={location}
              label="Location"
              onChange={(e) => setLocation(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Nairobi">Nairobi</MenuItem>
              <MenuItem value="Mombasa">Mombasa</MenuItem>
              <MenuItem value="Kisumu">Kisumu</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {filteredConsultants.length > 0 ? (
            filteredConsultants.map((consultant) => (
              <Grid item xs={12} sm={6} md={4} key={consultant.id} component="div"> {/* Added component="div" here */}
                <ConsultantCard>
                  <Avatar
                    alt={consultant.name}
                    src={consultant.avatar}
                    sx={{ width: 90, height: 90, margin: '0 auto 16px' }}
                  />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {consultant.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                    {consultant.certification} Certified
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {consultant.skills.map((s, idx) => (
                      <Chip key={idx} label={s} size="small" sx={{ m: 0.5 }} />
                    ))}
                  </Box>
                  <Chip
                    label={consultant.availability}
                    color={consultant.availability === 'Available' ? 'success' : 'warning'}
                    sx={{ mb: 2 }}
                  />
                  <Button variant="outlined" color="primary" size="small" sx={{ borderRadius: 3 }}>
                    View Profile
                  </Button>
                </ConsultantCard>
              </Grid>
            ))
          ) : (
            <Grid item xs={12} component="div"> {/* Added component="div" here */}
              <Typography variant="h6" color="textSecondary">
                No consultants match your criteria. Please adjust your filters.
              </Typography>
            </Grid>
          )}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Link href="/request-access" passHref>
            <Button variant="contained" color="secondary" size="large" sx={{ borderRadius: 3 }}>
              Request Access to Our Consultant Database
            </Button>
          </Link>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default HireConsultantSection;