import * as React from 'react';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '@/Layout';
import { useTranslation } from 'react-i18next';

// Detail View Component
const DetailPage = (): React.ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Layout title={`Flor: ${id}`}>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate(-1)}
        >
          {t("app.page.details.btn.back")}
        </Button>
      </Box>
      <Grid container spacing={2}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              height: 300,
              backgroundColor: '#b3e5fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            elevation={3}
          >
            <Typography variant="h5">Imagen</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 2,
              backgroundColor: '#e1bee7',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            elevation={3}
          >
            <Typography variant="body1" color="textPrimary">
              Descripción detallada del ítem seleccionado.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DetailPage;
