'use client';
import React, { useState } from 'react';
import { Box, Typography, Button, Container, TextField, MenuItem, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0), // Even vertical padding
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const FormWrapper = styled('form')(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.common.white,
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
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors: FormErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is not valid';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.bookingType) tempErrors.bookingType = 'Booking Type is required';
    if (!formData.preferredDateTime) tempErrors.preferredDateTime = 'Preferred Date & Time is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call or email submission
      console.log('Form Data Submitted:', formData);
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

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <SectionWrapper id="book-slot">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.8rem' }, fontWeight: 600  }}>
          Ready to Begin Your Journey?
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 6, fontSize: { xs: '1rem', md: '1.3rem' }, color: 'text.secondary' }}>
          Reserve your slot for our next training or consultation.
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
            required
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
            required
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
            required
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
            required
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
            InputLabelProps={{
              shrink: true,
            }}
            required
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
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Book My Slot
          </Button>
        </FormWrapper>

        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </SectionWrapper>
  );
};

export default BookSlotSection;