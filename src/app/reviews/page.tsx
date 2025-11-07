'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Rating,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import confetti from 'canvas-confetti';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  minHeight: 'calc(100vh - 200px)', // Adjust based on header/footer height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

function ReviewsPage() {
  const [state, handleSubmit] = useForm('mdkpqrnd');
  const [rating, setRating] = React.useState<number | null>(5);

  if (state.succeeded) {
    // Trigger confetti when the form is successfully submitted
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    return (
      <StyledContainer>
        <Alert severity="success" sx={{ width: '100%', maxWidth: '600px' }}>
          <Typography variant="h5" component="div">Thank you for your review!</Typography>
          <Typography sx={{ mt: 1 }}>
            We appreciate your feedback. It helps us improve our services.
          </Typography>
        </Alert>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Leave a Review
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center">
        We value your feedback. Let us know how we did!
      </Typography>

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Your Name"
          variant="outlined"
          fullWidth
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <TextField
          id="email"
          name="email"
          type="email"
          label="Your Email"
          variant="outlined"
          fullWidth
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography component="legend">Your Rating</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            size="large"
          />
           <input type="hidden" name="rating" value={rating || ''} />
        </Box>

        <TextField
          id="message"
          name="message"
          label="Your Review"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={state.submitting}
          size="large"
          sx={{ py: 1.5, fontWeight: 600 }}
        >
          Submit Review
        </Button>
      </StyledForm>
    </StyledContainer>
  );
}

export default ReviewsPage;
