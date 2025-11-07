'use client';
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import confetti from 'canvas-confetti';
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, ${theme.palette.grey[200]} 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

const FormWrapper = styled('form')(({ theme }) => ({
  maxWidth: 650,
  margin: '0 auto',
  padding: theme.spacing(5),
  borderRadius: 20,
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.08)',
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const BookSlotSection = () => {
  const [state, handleSubmit] = useForm("mdkpqrnd");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

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

  useEffect(() => {
    if (state.succeeded || state.errors) {
      setSnackbarOpen(true);
    }
  }, [state.succeeded, state.errors]);

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  if (state.succeeded) {
    return (
        <SectionWrapper id="book-slot">
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" gutterBottom>
                    Thanks for your submission, our team will reach out to you shortly.
                </Typography>
            </Container>
        </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="book-slot">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '1.9rem', md: '2rem' },
            letterSpacing: '-0.5px',
          }}
        >
          Ready to Begin Your Journey?
        </Typography>

        <Typography
          sx={{
            mb: 7,
            pb:6,
            color: 'text.secondary',
            fontSize: { xs: '1.05rem' },
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          Reserve your slot for our next training or consultation — we’ll get in touch shortly.
        </Typography>

        <FormWrapper onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            margin="normal"
            required
          />
          <ValidationError
            prefix="FullName"
            field="fullName"
            errors={state.errors}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            margin="normal"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            margin="normal"
            required
          />
          <ValidationError
            prefix="PhoneNumber"
            field="phoneNumber"
            errors={state.errors}
          />

          <TextField
            fullWidth
            select
            label="Booking Type"
            name="bookingType"
            margin="normal"
            defaultValue=""
            required
          >
            <MenuItem value="" disabled>
              <em>Select a type</em>
            </MenuItem>
            <MenuItem value="Training">Training</MenuItem>
            <MenuItem value="Corporate">Corporate</MenuItem>
            <MenuItem value="Hire Consultant">Hire Consultant</MenuItem>
            <MenuItem value="Advertisement">Advertisement</MenuItem>
          </TextField>
          <ValidationError
            prefix="BookingType"
            field="bookingType"
            errors={state.errors}
          />

          <TextField
            fullWidth
            label="Preferred Date & Time"
            name="preferredDateTime"
            type="datetime-local"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <ValidationError
            prefix="PreferredDateTime"
            field="preferredDateTime"
            errors={state.errors}
          />

          <TextField
            fullWidth
            label="Optional Message"
            name="message"
            multiline
            rows={4}
            margin="normal"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={state.submitting}
            sx={{
              mt: 4,
              py: 1.6,
              px: 4,
              fontSize: '1.1rem',
              borderRadius: 30,
              textTransform: 'none',
              boxShadow: '0px 8px 25px rgba(0,0,0,0.15)',
            }}
          >
            Book My Slot
          </Button>
        </FormWrapper>

        <Snackbar open={snackbarOpen} autoHideDuration={5500} onClose={handleCloseSnackbar}>
          <Alert
            onClose={handleCloseSnackbar}
            severity={state.succeeded ? 'success' : 'error'}
            sx={{ width: '100%' }}
          >
            {state.succeeded
              ? 'Your booking request has been sent successfully!'
              : 'An error occurred. Please try again.'}
          </Alert>
        </Snackbar>
      </Container>
    </SectionWrapper>
  );
};

export default BookSlotSection;

