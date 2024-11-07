import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import Search from '@/components/Search';
import Layout from '@/Layout';

const Item = ({ name }: { name: string }) => (
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
    <Typography>{name}</Typography>
  </Box>
);

const HomePage = () => (
  <Layout title="List view">
    <>
      <Box sx={{ mb: 3 }}>
        <Search />
      </Box>

      <Grid container spacing={2}>
        {[...Array(8)].map((_, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Link to={`/flor/${index + 1}`}>
              <Item name={`Item ${index + 1}`} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  </Layout>
);

export default HomePage;
