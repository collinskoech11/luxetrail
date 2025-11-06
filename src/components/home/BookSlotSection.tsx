'use client';
import React, { useState } from 'react';
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

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  bookingType: string;
  preferredDateTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  bookingType?: string;
  preferredDateTime?: string;
  message?: string;
}

const BookSlotSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    bookingType: '',
    preferredDateTime: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    'success' | 'error' | 'warning' | 'info'
  >('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors: FormErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Invalid Email';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.bookingType) tempErrors.bookingType = 'Booking Type is required';
    if (!formData.preferredDateTime) tempErrors.preferredDateTime = 'Preferred Date & Time is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSnackbarMessage('Your booking request has been sent successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        bookingType: '',
        preferredDateTime: '',
        message: '',
      });
      setErrors({});
    } else {
      setSnackbarMessage('Please correct the errors in the form.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

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
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            margin="normal"
          />

          <TextField
            fullWidth
            select
            label="Booking Type"
            name="bookingType"
            value={formData.bookingType}
            onChange={handleChange}
            error={!!errors.bookingType}
            helperText={errors.bookingType}
            margin="normal"
          >
            <MenuItem value="">
              <em>Select a type</em>
            </MenuItem>
            <MenuItem value="Training">Training</MenuItem>
            <MenuItem value="Corporate">Corporate</MenuItem>
            <MenuItem value="Hire Consultant">Hire Consultant</MenuItem>
            <MenuItem value="Advertisement">Advertisement</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Preferred Date & Time"
            name="preferredDateTime"
            type="datetime-local"
            value={formData.preferredDateTime}
            onChange={handleChange}
            error={!!errors.preferredDateTime}
            helperText={errors.preferredDateTime}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            fullWidth
            label="Optional Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
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
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </SectionWrapper>
  );
};

export default BookSlotSection;
