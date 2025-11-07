"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import BookIntroCall from "./BookintroCall";
import TiltCard from "./HeroSection/TiltCard";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dqokryv6u/image/upload/v1762419494/luxbannerHeader_pxtebl.png",
    title: "Empower Your Career in Travel Consultancy",
    subtitle:
      "Learn from industry professionals and become a certified travel consultant. Join our global network shaping the future of travel.",
  },
  {
    image:
      "https://res.cloudinary.com/dqokryv6u/image/upload/v1762419816/luxbannerHeader2_ujmwwz.png",
    title: "Learn From Global Travel Experts",
    subtitle:
      "Gain real-world experience and build a thriving career with guidance from seasoned consultants.",
  },
  {
    image:
      "https://res.cloudinary.com/dqokryv6u/image/upload/v1762420021/luxbannerHeader3_w7bs73.png",
    title: "Join a Worldwide Network",
    subtitle:
      "Connect with top-tier professionals and unlock opportunities in the global travel industry.",
  },
  {
    image:
      "https://res.cloudinary.com/dqokryv6u/image/upload/v1762420107/luxbannerHeader4_wclg77.png",
    title: "Shape the Future of Travel",
    subtitle:
      "Become part of a new generation of certified travel experts equipped for tomorrow.",
  },
  {
    image:
      "https://res.cloudinary.com/dqokryv6u/image/upload/v1762413242/luxetopbanner_jl8q2l.png",
    title: "Start Your Journey Today",
    subtitle:
      "Take the first step toward becoming a world-class travel consultant.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // booking states
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "100vh", md: "100vh" },
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transition: "background-image 1s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          pt: 15,
          pb: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          {/* SLIDES */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  minHeight: "220px",
                }}
              >
              <Typography
                sx={{
                  fontWeight: 700,
                  minHeight: "80px",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "3.5rem" },
                }}
              >
                {slides[currentSlide].title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 5,
                  fontWeight: 400,
                  maxWidth: "700px",
                  mx: "auto",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                {slides[currentSlide].subtitle}
              </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* CALL TO ACTION */}
          <Link to="book-slot" smooth={true} duration={500}>
          <TiltCard maxTilt={15}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: { xs: 3, md: 5 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 600,
                borderRadius: "50px",
                textTransform: "none",
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
            >
              Enroll Now
            </Button>
          </TiltCard>
          </Link>

          <BookIntroCall />
        </Container>
      </Box>
    </LocalizationProvider>
  );
}
