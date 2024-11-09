import * as React from 'react';
import { Box, Button, Typography, Grid, Paper, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Layout from '@/Layout';
import { useTranslation } from 'react-i18next';
import { Product } from '@/types';
import { fetchProduct } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { BreadcrumbLink } from '@/types';


const DetailPage = (): React.ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`product-${id}`],
    queryFn: () => fetchProduct(id!),
    enabled: !!id
  });

  if (isLoading || !product) {
    return (
      <Layout title="">
        <Typography variant="body1" color="textPrimary">
          {t('app.page.details.loading')}
        </Typography>
      </Layout>
    );
  }

  return (
    <Layout
      breadcrumb={[
        { to: `/flor/${id}`, label: product.name } as BreadcrumbLink
      ]}
      title={`Flor: ${id}`}
      >
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate(-1)}
        >
          {t('app.page.details.btn.back')}
        </Button>
      </Box>
      <Grid container spacing={2}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150 }}
          image={product.imgUrl}
          alt={product.name}
        />
        </Grid>

        <Grid className="product-details" item xs={12} md={6}>
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
            <Typography variant="h5" color="textPrimary">
              {product.name}
            </Typography>
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
