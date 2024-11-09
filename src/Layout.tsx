import * as React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import '@/helper/i18n/index';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbLink } from '@/types';

interface Props {
  children: React.ReactNode;
  breadcrumb?: BreadcrumbLink[];
  title: string;
}

const Layout = (props: Props): React.ReactElement<Props> => {
  const { breadcrumb, children, title } = props;
  
  return (
    <Container maxWidth="lg">
      <Header />
      <Breadcrumb links={breadcrumb} />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
}

export default Layout;
