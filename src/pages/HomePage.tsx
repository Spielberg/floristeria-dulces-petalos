import {
  Box,
  Grid,
  CircularProgress,
  CardMedia,
  Alert,
} from '@mui/material';
import { Link } from 'react-router-dom';
import useProducts from '@/helper/hooks/useProducts';

import { Product } from '@/types';

import Search from '@/components/Search';
import Layout from '@/Layout';
import { t } from 'i18next';

const Item = ({ product }: { product: Product }) => (
  <Box
    sx={{
      width: '100%',
      height: 120,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b3e5fc',
      borderRadius: 2,
      border: '1px solid #81d4fa'
    }}
  >
    <CardMedia
      component="img"
      sx={{ width: 150, height: 150 }}
      image={product.imgUrl}
      alt={product.name}
    />
    <pre>{JSON.stringify(product, null, 2)}</pre>
  </Box>
);

const HomePage = () => {
  const { filter, setFilter, error, products, isLoading } = useProducts();

  if (error) {
    return (
      <Alert severity="error">
        {error.message}
      </Alert>
    )
  }

  return (
    <Layout title="List view">
      <>
        <Box sx={{ mb: 3 }}>
          <Search filter={filter} setFilter={setFilter} />
        </Box>
        {isLoading && <CircularProgress />}
        {products?.length > 0 && (
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <Link className="product-link" to={`/flor/${product.id}`}>
                  <Item product={product} />
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
        {products?.length === 0 && (
          <Alert severity="info">
            {t('app.search.no-results')}
          </Alert>
        )}
      </>
    </Layout>
  );
}

export default HomePage;
