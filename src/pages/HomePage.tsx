import {
  Box,
  Grid,
  CircularProgress,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Product } from '@/types';
import { fetchAll } from '@/api/products';

import Search from '@/components/Search';
import Layout from '@/Layout';

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
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchAll
  });

  return (
    <Layout title="List view">
      <>
        <Box sx={{ mb: 3 }}>
          <Search />
        </Box>
        {isLoading && <CircularProgress />}
        {products?.length && (
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <Link to={`/flor/${product.id}`}>
                  <Item product={product} />
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </>
    </Layout>
  );
}

export default HomePage;
