'use client';
import { motion } from "framer-motion";
import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: "linear-gradient(135deg, #ffffff 0%, #f7f9fc 100%)",
  textAlign: "center",
  overflow: "hidden",
}));

const SocialCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "280px",
  height: "380px",
  flex: "0 0 auto",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
  transition: "all 0.4s ease",
  cursor: "pointer",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },

  "&:hover img": {
    transform: "scale(1.08)",
  },

  ".overlay": {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "24px 18px",
    background: "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.7) 100%)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "220px",
    height: "320px",
  },
}));

// Carousel duplicated list
const socialPosts = [
  { id: 1, type: 'instagram', imageUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412173/luxetrail4_f8osfo.jpg', caption: '#TravelGoals' },
  { id: 2, type: 'tiktok', videoUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412172/luxetrail2_x1jd01.jpg', caption: '#AdventureTime' },
  { id: 3, type: 'instagram', imageUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412172/luxetrail6_tvdl2k.jpg', caption: '#ExploreMore' },
  { id: 4, type: 'tiktok', videoUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412171/luxetrail5_pyg47z.jpg', caption: '#Wanderlust' },
  { id: 5, type: 'instagram', imageUrl: 'https://res.cloudinary.com/dqokryv6u/image/upload/v1762412170/luxetrail3_u7dtlo.jpg', caption: '#LuxeLife' },
];

const duplicatedPosts = [...socialPosts, ...socialPosts];

const SocialCarouselSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">

        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.9rem", md: "3rem" },
            mb: 2,
            background: "linear-gradient(90deg, #0d47a1 0%, #00acc1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Journey in Action
        </Typography>

        <Typography
          sx={{
            mb: 8,
            fontSize: { xs: "1rem", md: "1.3rem" },
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Follow us on social media for the latest updates and travel inspirations.
        </Typography>

        {/* Auto-scrolling carousel */}
        <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
          <motion.div
            style={{ display: "flex", gap: "24px" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 34,
              repeat: Infinity,
            }}
          >
            {duplicatedPosts.map((post, index) => (
              <SocialCard key={index}>
                <img
                  src={post.type === "instagram" ? post.imageUrl : post.videoUrl}
                  alt={post.caption}
                />
                <Box className="overlay">
                  <Typography variant="h6" color="white">
                    {post.caption}
                  </Typography>
                </Box>
              </SocialCard>
            ))}
          </motion.div>
        </Box>

        {/* Social media buttons */}
        <Box sx={{ mt: 7 }}>
          <IconButton
            href="https://instagram.com/luxetrail"
            target="_blank"
            sx={{
              mx: 1,
              p: 2,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.4)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "0.3s",
              "&:hover": {
                background: "rgba(255,255,255,0.7)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <InstagramIcon fontSize="large" color="primary" />
          </IconButton>

          <IconButton
            href="https://linkedin.com/company/luxetrail"
            target="_blank"
            sx={{
              mx: 1,
              p: 2,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.4)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "0.3s",
              "&:hover": {
                background: "rgba(255,255,255,0.7)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <LinkedInIcon fontSize="large" color="primary" />
          </IconButton>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default SocialCarouselSection;
