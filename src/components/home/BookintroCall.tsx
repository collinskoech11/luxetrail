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

  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const [step, setStep] = useState<1 | 2>(1);

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
    border:"1px solid red",
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
    border:"1px solid red",
    m: "auto",
      "@media (max-width:600px)": {
    // top: "40% !important",        // ⬆ moves slightly higher
    width: "95% !important",      // ✅ full-width mobile
    // left: "50% !important",
    // transform: "translate(-50%, -40%) !important",
  },

  };

  const goToStep2 = () => {
    if (!date || !time) return;
    setStep(2);
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

          <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: "22px" }}>
            {/* ✅ STEP 1 */}
            {step === 1 && (
              <>
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

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={!date || !time}
                  onClick={goToStep2}
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
                  Continue
                </Button>
              </>
            )}

            {/* ✅ STEP 2 */}
            {step === 2 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 3,
                    mb: 2,
                  }}
                >
                  <TextField label="Full Name" fullWidth sx={inputStyles} />
                  <TextField label="Phone Number" fullWidth sx={inputStyles} />
                </Box>

                <TextField
                  label="Email Address"
                  fullWidth
                  sx={{ ...inputStyles, mb: 3 }}
                />

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
                  }}
                >
                  Confirm Booking
                </Button>
              </>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
