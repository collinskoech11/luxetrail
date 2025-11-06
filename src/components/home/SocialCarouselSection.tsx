'use client';
import { motion } from "framer-motion";
import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
  overflow: "hidden",
}));

const CarouselContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  overflow: "hidden",
  width: "100%",
  position: "relative",
  padding: "20px 0",
});

const SocialCard = styled(Box)({
  position: "relative",
  width: "300px",
  height: "400px",
  borderRadius: "16px",
  overflow: "hidden",
  flex: "0 0 auto",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
  ".overlay": {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
    padding: "20px",
  },
});

const socialPosts = [
  { id: 1, type: 'instagram', imageUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412173/luxetrail4_f8osfo.jpg', caption: '#TravelGoals' },
  { id: 2, type: 'tiktok', videoUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412172/luxetrail2_x1jd01.jpg', caption: '#AdventureTime' },
  { id: 3, type: 'instagram', imageUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412172/luxetrail6_tvdl2k.jpg', caption: '#ExploreMore' },
  { id: 4, type: 'tiktok', videoUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412171/luxetrail5_pyg47z.jpg', caption: '#Wanderlust' },
  { id: 5, type: 'instagram', imageUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412170/luxetrail3_u7dtlo.jpg', caption: '#LuxeLife' },
];

// duplicate list for seamless looping
const duplicatedPosts = [...socialPosts, ...socialPosts];

const SocialCarouselSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.8rem' }, fontWeight: 600 }}>
          Our Journey in Action
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 6, fontSize: { xs: '1rem', md: '1.3rem' }, color: 'text.secondary' }}>
          Follow us on social media for the latest updates and travel inspirations.
        </Typography>

        <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
          <motion.div
            style={{ display: "flex", gap: "20px" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30, // adjust speed (higher = slower)
              repeat: Infinity,
            }}
          >
            {duplicatedPosts.map((post, index) => (
              <SocialCard key={index}>
                {post.type === "instagram" ? (
                  <img src={post.imageUrl} alt={post.caption} />
                ) : (
                  <img src={post.videoUrl} alt={post.caption} />
                )}
                <Box className="overlay">
                  <Typography variant="h6" color="white">
                    {post.caption}
                  </Typography>
                </Box>
              </SocialCard>
            ))}
          </motion.div>
        </Box>

        <Box sx={{ mt: 6 }}>
          <IconButton
            color="primary"
            size="large"
            sx={{ mx: 1 }}
            href="https://instagram.com/luxetrail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            size="large"
            sx={{ mx: 1 }}
            href="https://linkedin.com/company/luxetrail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default SocialCarouselSection;
