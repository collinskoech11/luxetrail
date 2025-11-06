// const images = [
//   'https://www.worldlandtrust.org/wp-content/uploads/2020/09/A-leopard-page.jpg',
//   'https://safariavventura.com/wp-content/uploads/2018/02/leone-africano-2.jpg',
//   'https://cdn.britannica.com/52/152452-050-9C11AEDD/Cheetah-acinonyx-jubatus-running-kenya.jpg',
// ]; // ← Add as many as you like
"use client";

import { Box, Button, Container, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "90vh", md: "100vh" },
        backgroundImage: `url('https://res.cloudinary.com/dqokryv6u/image/upload/v1762413242/luxetopbanner_jl8q2l.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Empower Your Career in Travel Consultancy
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: 400,
            maxWidth: "700px",
            mx: "auto",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Learn from industry professionals and become a certified travel
          consultant. Join our global network of experts shaping the future of
          travel.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: { xs: 3, md: 5 },
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: '0.9rem', md: '1rem' },
            fontWeight: 600,
            borderRadius: "50px",
            textTransform: "none",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          Enroll Now
        </Button>
      </Container>
    </Box>
  );
}
