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

  const handleNext = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (reviews.length > 3) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Autoscroll every 5 seconds
      return () => clearInterval(interval);
    }
  }, [reviews.length, handleNext]);

  const getVisibleReviews = () => {
    const visible: Review[] = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(startIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          What Our Partners Say
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Real stories from professionals and businesses in the travel industry.
        </Typography>

        {reviews.length > 3 ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', maxWidth:"85vw" }}>
            <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: -40, zIndex: 1 }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', maxWidth:"80vw" }}
              >
                <Grid container spacing={4}>
                  {getVisibleReviews().map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
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
            <IconButton onClick={handleNext} sx={{ position: 'absolute', right: -40, zIndex: 1 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {reviews.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
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
        )}
      </Container>
    </StyledSection>
  );
};

export default ReviewsSection;
