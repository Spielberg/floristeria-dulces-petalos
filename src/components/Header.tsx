import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';


const Header = (): React.ReactElement => {
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        backgroundColor: '#f8d7da',
        padding: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" color="primary">
        {t("app.header.title")}
      </Typography>
    </Box>
  );
}

export default Header;