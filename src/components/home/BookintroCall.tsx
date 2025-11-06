"use client";

import { useState } from "react";
import { Box, Button, Typography, Container, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { motion } from "framer-motion";
import dayjs, { Dayjs } from "dayjs";

export default function BookIntroCall() {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);

  const inputStyles = {
    background: "transparent",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255, 0.3)",
    color: "white",

    "& .MuiInputBase-input": {
      color: "white",
      "::placeholder": {
        color: "white",
        opacity: 1,
      },
    },

    "& .MuiInputLabel-root": {
      color: "white",
      opacity: 0.8,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiInputLabel-root.MuiFormLabel-filled": {
      color: "white",
    },

    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
    },

    "& .MuiSvgIcon-root": {
      color: "white",
    },
  };

  return (
    <Box
      id="book-slot"
      sx={{
        py: { xs: 4, md: 6 },
        mt: 4,
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.12)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              background: "linear-gradient(90deg,#0d47a1,#00acc1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Book an Intro Call
          </Typography>

          {/* <Typography
            sx={{
              textAlign: "center",
              maxWidth: "650px",
              mx: "auto",
              mb: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Let’s talk about your journey into the world of travel consultancy
            and how we can help you get started.
          </Typography> */}

          <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: "22px" }}>
            {/* ✅ User Details Inputs */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
                mb: 2,
              }}
            >
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                sx={inputStyles}
              />

              <TextField
                label="Phone Number"
                fullWidth
                variant="outlined"
                sx={inputStyles}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <TextField
                label="Email Address"
                fullWidth
                variant="outlined"
                sx={inputStyles}
              />
            </Box>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                  mb: 4,
                }}
              >
                {/* Date Picker */}
                <DatePicker
                  label="Choose a Date"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: inputStyles,
                    },
                  }}
                />

                {/* Time Picker */}
                <TimePicker
                  label="Choose a Time"
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: inputStyles,
                    },
                  }}
                />
              </Box>
            </LocalizationProvider>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                py: 2,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                background: "linear-gradient(90deg,#0d47a1,#00acc1)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                "&:hover": {
                  background: "linear-gradient(90deg,#0c3a81,#0093a6)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.2)",
                },
              }}
            >
              Confirm Booking
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
