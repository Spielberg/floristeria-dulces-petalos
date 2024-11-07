import * as React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = (): React.ReactElement => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f9f9f9"
    >
      <Typography variant="h3" color="primary.dark" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {error?.statusText || error?.message || 'Not Found'}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ mt: 2 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
