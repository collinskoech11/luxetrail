// Improved styling and design for HireConsultantSection
'use client';
import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Avatar, Chip, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #fff 100%)`,
}));

const ConsultantCard = styled(motion(Card))(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

import Link from 'next/link';

const HireConsultantSection = () => {
  const consultants = [
    {
      id: 1,
      name: 'Irene Gitau',
      skills: ['Tour Planning', 'Customer Service', 'Marketing'],
      certification: 'Advanced',
      availability: 'Available',
      avatar: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762415772/WhatsApp_Image_2025-11-06_at_10.55.42_ar5ypk.jpg',
      experience: 'Senior',
      location: 'Nairobi',
    },
    {
      id: 2,
      name: 'Emmah Karanja',
      skills: ['Logistics', 'Operations', 'Adventure Travel'],
      certification: 'Expert',
      availability: 'Available',
      avatar: '/avatars/john-smith.jpg',
      experience: 'Mid-Level',
      location: 'Mombasa',
    },
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" fontWeight={700} sx={{ mb: 2, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
            Hire an Experienced Consultant
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Access a pool of certified and experienced tour & travel consultants.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {consultants.map((consultant, index) => (
            <Grid item xs={12} sm={6} md={4} key={consultant.id}>
              <ConsultantCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Avatar
                  src={consultant.avatar}
                  alt={consultant.name}
                  sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                />

                <Typography variant="h5" fontWeight={600}>{consultant.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {consultant.certification} Certified
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {consultant.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} size="small" sx={{ m: 0.5 }} />
                  ))}
                </Box>

                <Chip
                  label={consultant.availability}
                  color={consultant.availability === 'Available' ? 'success' : 'warning'}
                  sx={{ mb: 2 }}
                  variant='outlined'
                />

                <Button variant="outlined" fullWidth>
                  View Profile
                </Button>
              </ConsultantCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Link href="/request-access" passHref>
            <Button variant="contained" size="large">
              Request Access to Our Consultant Database
            </Button>
          </Link>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default HireConsultantSection;
