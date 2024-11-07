import * as React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import Header from '@/components/Header';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout = (props: Props): React.ReactElement<Props> => {
  const { children, title } = props;
  
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" color="secondary" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
}

export default Layout;
