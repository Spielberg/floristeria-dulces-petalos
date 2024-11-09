import {
  Box,
  Grid2 as Grid,
  CircularProgress,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Product } from '@/types';
import { fetchAll } from '@/api/products';

import Search from '@/components/Search';
import Layout from '@/Layout';
import { useTranslation } from 'react-i18next';

const Item = ({ product }: { product: Product }) => {
  const { t } = useTranslation();

  return (
    <Grid size={{ xs: 12, md: 3, sm: 6 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={product.name}
          subheader={product.binomialName}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.imgUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {product.price}€
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link to={`/flor/${product.id}`}>
            <Button size="small">
              {t('app.page.home.btn.details')}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

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
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {products.map((product) => 
              <Item key={product.id} product={product} />
            )}
          </Grid>
        )}
      </>
    </Layout>
  );
}

export default HomePage;
