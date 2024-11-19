import React from 'react';
import { Box, Typography, Stack, Paper, Button } from '@mui/material';
import { Link } from 'next/link'; // For navigation to the event details page




const FirstsInCity = ({ city }) => {
  const firstEvent = city.firstsInCity?.[0];
  const handleNavigate = () => {
    if (firstEvent?.eventId) {
      router.push(`/event-details/${firstEvent.eventId}`);
    }
  };

  return (
    <Box sx={{ padding: '16px' }} > 
      {firstEvent ? (
        <Stack direction="row" spacing={3} alignItems="center">
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '300px',
              height: 'auto',
            }}
          >
            <img
              src={firstEvent.image || "/path/to/default-image.jpg"}
              alt="Première"
              style={{ maxWidth: '100%', height: '220px', borderRadius: '8px' }}
            />
          </Box>

          <Box sx={{ flex: 2 }}>
            <Paper elevation={2} sx={{ padding: '16px' }}>
              <Typography variant="h6" color="secondary" gutterBottom>
                {firstEvent.event}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {firstEvent.details}
              </Typography>

              {/* Button to navigate to the event details page */}
                <Button 
                variant="contained" 
                color="primary"
                onClick={handleNavigate}
                >
                  En savoir plus
                </Button>
            </Paper>
          </Box>
        </Stack>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Aucune information disponible sur les premières de cette ville.
        </Typography>
      )}
    </Box>
  );
};

export default FirstsInCity;
