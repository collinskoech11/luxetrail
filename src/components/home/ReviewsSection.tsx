'use client';
import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Sample reviews data
interface Review {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  review: string;
}

const reviews: Review[] = [
  {
    name: 'Sarah L.',
    title: 'Tour Operator, Kenya',
    avatar: '/avatars/sarah.jpg', // Placeholder - will use initials
    rating: 5,
    review: 'LuxeTrail\'s training transformed my approach to client engagement. The insights on digital marketing and sustainable tourism were invaluable. Highly recommended for any tour professional looking to upskill.',
  },
  {
    name: 'John M.',
    title: 'Freelance Guide, Tanzania',
    avatar: '/avatars/john.jpg',
    rating: 5,
    review: 'The one-on-one consultancy was a game-changer. I received practical advice that helped me streamline my operations and enhance my online presence. My bookings have increased by 40%!',
  },
  {
    name: 'Fatima A.',
    title: 'Travel Agency Owner, Zanzibar',
    avatar: '/avatars/fatima.jpg',
    rating: 5,
    review: 'As a B2B partner, LuxeTrail has consistently provided us with top-tier talent. The consultants we hire are professional, knowledgeable, and ready to deliver exceptional experiences from day one.',
  },
  {
    name: 'David C.',
    title: 'Boutique Hotel Manager, Rwanda',
    avatar: '/avatars/david.jpg',
    rating: 4,
    review: 'The workshop on guest experience was fantastic. We\'ve implemented several of the suggestions and have seen a noticeable improvement in our guest feedback scores. A very worthwhile investment.',
  },
  {
    name: 'Amina K.',
    title: 'Eco-Lodge Founder, Uganda',
    avatar: '/avatars/amina.jpg',
    rating: 5,
    review: 'I was looking for guidance on sustainable practices, and LuxeTrail delivered. Their expertise in eco-tourism is unmatched. They helped us develop a strategy that is both environmentally and economically sound.',
  },
];

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.default, // Soft Gray-Blue
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
  },
}));

const ReviewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const reviewsToShow = isMobile ? 1 : 3;
    if (reviews.length > reviewsToShow) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Autoscroll every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile, handleNext]);

  const getVisibleReviews = useCallback(() => {
    const visible: Review[] = [];
    const reviewsToShow = isMobile ? 1 : 3;
    for (let i = 0; i < reviewsToShow; i++) {
      visible.push(reviews[(startIndex + i) % reviews.length]);
    }
    return visible;
  }, [startIndex, isMobile]);

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What Our Partners Say
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Real stories from professionals and businesses in the travel industry.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: isMobile ? -20 : -60,
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Grid container spacing={4} justifyContent="center">
                {getVisibleReviews().map((item, index) => (
                  <Grid item xs={12} sm={8} md={4} key={index}>
                    <ReviewCard>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Rating value={item.rating} readOnly sx={{ mb: 2 }} />
                        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                          `{item.review}`
                        </Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#f9f9f9' }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                          {item.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.title}
                          </Typography>
                        </Box>
                      </Box>
                    </ReviewCard>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: isMobile ? -20 : -60,
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </StyledSection>
  );
};

export default ReviewsSection;
