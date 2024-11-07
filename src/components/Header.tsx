import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const Header = (): React.ReactElement => (
  <Box
    sx={{
      backgroundColor: '#f8d7da',
      padding: 2,
      textAlign: 'center'
    }}
  >
    <Typography variant="h4" color="primary">
      Floristería Dulces Pétalos
    </Typography>
  </Box>
);

export default Header;