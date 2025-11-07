"use client";

import { useState, useEffect } from "react";
import { Box, Button, Typography, Container, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { motion } from "framer-motion";
import dayjs, { Dayjs } from "dayjs";
import { useForm, ValidationError } from '@formspree/react';
import confetti from 'canvas-confetti';

export default function BookIntroCall() {
  const [state, handleSubmit] = useForm("mdkpqrnd");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);

  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.4 },
      });

      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 120,
          origin: { x: 0.2, y: 0.4 },
        });
        confetti({
          particleCount: 120,
          spread: 120,
          origin: { x: 0.8, y: 0.4 },
        });
      }, 300);
    }
  }, [state.succeeded]);

  const inputStyles = {
    background: "transparent",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255, 0.3)",
    color: "white",

    "& .MuiInputBase-input": { color: "white" },
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiSvgIcon-root": { color: "white" },
  };

  const centeredPaper = {
    position: "fixed",
    top: "50% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    m: "auto",
    "@media (max-width:600px)": {
      top: "40% !important",        // ⬆ moves slightly higher
      width: "95% !important",      // ✅ full-width mobile
      left: "50% !important",
      transform: "translate(-50%, -40%) !important",
    },

  };


  const centeredPaperDesk = {
    transform: "translate(150%, 150%) !important",
    top: "150% !important",
    left: "150% !important",
    position: "fixed",
    m: "auto",
    "@media (max-width:600px)": {
      // top: "40% !important",        // ⬆ moves slightly higher
      width: "95% !important",      // ✅ full-width mobile
      // left: "50% !important",
      // transform: "translate(-50%, -40%) !important",
    },

  };

  if (state.succeeded) {
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
          <Typography
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              color: "white",
            }}
          >
            Thanks for your submission, our team will reach out to you shortly.
          </Typography>
        </Container>
      </Box>
    );
  }


  return (
    <Box
      id="book-slot"
      sx={{
        py: { xs: 2, md: 2 },
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
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.8rem" },
              background: "linear-gradient(90deg,#ff8f00,#fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Book an Intro Call
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, md: 5 }, borderRadius: "22px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* ✅ Hidden Date Picker */}
              <DatePicker
                open={openDate}
                onClose={() => setOpenDate(false)}
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                  setOpenDate(false);
                }}
                slotProps={{
                  textField: { sx: { display: "none" } },
                  desktopPaper: { sx: centeredPaperDesk },
                  mobilePaper: { sx: centeredPaper },
                }}
              />

              {/* ✅ Hidden Time Picker */}
              <TimePicker
                open={openTime}
                onClose={() => setOpenTime(false)}
                value={time}
                onChange={(newTime) => {
                  setTime(newTime);
                  setOpenTime(false);
                }}
                slotProps={{
                  textField: { sx: { display: "none" } },
                  desktopPaper: { sx: centeredPaperDesk },
                  mobilePaper: { sx: centeredPaper },
                }}
              />

              {/* ✅ Visible Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                  mb: 4,
                }}
              >
                <Button
                  fullWidth
                  onClick={() => setOpenDate(true)}
                  sx={{
                    py: 2,
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "white",
                    textTransform: "none",
                    fontSize: "1.05rem",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  {date ? date.format("DD MMM YYYY") : "Pick a Date"}
                </Button>

                <Button
                  fullWidth
                  onClick={() => setOpenTime(true)}
                  sx={{
                    py: 2,
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "white",
                    textTransform: "none",
                    fontSize: "1.05rem",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  {time ? time.format("hh:mm A") : "Pick a Time"}
                </Button>
              </Box>
            </LocalizationProvider>
            <input type="hidden" name="date" value={date ? date.format("DD MMM YYYY") : ""} />
            <input type="hidden" name="time" value={time ? time.format("hh:mm A") : ""} />

            {date && time && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      mb: 2,
                    }}
                  >
                    <TextField name="fullName" label="Full Name" fullWidth sx={inputStyles} required />
                    <ValidationError prefix="FullName" field="fullName" errors={state.errors} />

                    <TextField name="phoneNumber" label="Phone Number" fullWidth sx={inputStyles} required />
                    <ValidationError prefix="PhoneNumber" field="phoneNumber" errors={state.errors} />
                  </Box>
                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    sx={{ ...inputStyles, mb: 3 }}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </motion.div>
              </>
            )}


            <Button
              variant="contained"
              fullWidth
              size="large"
              type="submit"
              disabled={state.submitting || !date || !time}
              sx={{
                py: 2,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                background:
                  !date || !time
                    ? "rgba(255,255,255,0.3)"
                    : "linear-gradient(90deg,#0d47a1,#00acc1)",
                color: "white",
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