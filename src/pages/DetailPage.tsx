import * as React from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
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
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`product-${id}`],
    queryFn: () => fetchProduct(id!),
    enabled: !!id,
    retry: 1,
  });
  const fertilizerType = t(`app.fertilizer-type.${(product?.fertilizerType || '')}`);

  if (error) {
    return (
      <Layout title="">
        <Alert severity="error">
          {error.message}
        </Alert>
      </Layout>
    )
  }

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
      flexEndComponent={
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          {t('app.page.details.btn.back')}
        </Button>
      }>
        <Card sx={{ maxWidth: 800, mx: 'auto', boxShadow: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 10, md: 3, sm: 6 }}>
              <CardMedia
                component="img"
                image={product.imgUrl}
                alt={product.name}
                sx={{ borderRadius: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 9, sm: 6 }}>
              <CardContent>
                <Typography variant="overline" color="textSecondary">
                  {product.binomialName}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ my: 2 }}>
                  {t('app.page.details.watering', { count: product.wateringsPerWeek })}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{product.price}€</Typography>
                  <Chip avatar={<Avatar>{fertilizerType[0].toUpperCase()}</Avatar>} label={fertilizerType} />
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Layout>
    );
};

export default DetailPage;
