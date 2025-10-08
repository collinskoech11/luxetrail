'use client';
import React from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Using LinkedIn as a placeholder for TikTok if no specific icon is available
import Link from 'next/link';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const SocialCard = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: 280,
  height: 280,
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '& .overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const socialPosts = [
  { id: 1, type: 'instagram', imageUrl: 'https://via.placeholder.com/280?text=Instagram+Post+1', caption: '#TravelGoals' },
  { id: 2, type: 'tiktok', videoUrl: 'https://via.placeholder.com/280?text=TikTok+Video+1', caption: '#AdventureTime' },
  { id: 3, type: 'instagram', imageUrl: 'https://via.placeholder.com/280?text=Instagram+Post+2', caption: '#ExploreMore' },
  { id: 4, type: 'tiktok', videoUrl: 'https://via.placeholder.com/280?text=TikTok+Video+2', caption: '#Wanderlust' },
  { id: 5, type: 'instagram', imageUrl: 'https://via.placeholder.com/280?text=Instagram+Post+3', caption: '#LuxeLife' },
];

const SocialCarouselSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom>
          Our Journey in Action
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 6 }}>
          Follow us on social media for the latest updates and travel inspirations.
        </Typography>

        <CarouselContainer>
          {socialPosts.map((post) => (
            <SocialCard key={post.id}>
              {post.type === 'instagram' ? (
                <img src={post.imageUrl} alt={post.caption} />
              ) : (
                <img src={post.videoUrl} alt={post.caption} /> // Placeholder for video thumbnail
              )}
              <Box className="overlay">
                <Typography variant="h6" color="white">
                  {post.caption}
                </Typography>
              </Box>
            </SocialCard>
          ))}
        </CarouselContainer>

        <Box sx={{ mt: 6 }}>
          <Link href="https://instagram.com/luxetrail" target="_blank" rel="noopener noreferrer" passHref>
            <IconButton color="primary" size="large" sx={{ mx: 1 }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link href="https://tiktok.com/luxetrail" target="_blank" rel="noopener noreferrer" passHref>
            <IconButton color="primary" size="large" sx={{ mx: 1 }}>
              {/* Placeholder for TikTok icon */}
              <img src="/tiktok-icon.svg" alt="TikTok" style={{ width: 36, height: 36 }} />
            </IconButton>
          </Link>
          <Link href="https://linkedin.com/company/luxetrail" target="_blank" rel="noopener noreferrer" passHref>
            <IconButton color="primary" size="large" sx={{ mx: 1 }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default SocialCarouselSection;
