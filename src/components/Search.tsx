import * as React from 'react';
import { Paper, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = (): React.ReactElement => (
  <Paper
    sx={{
      padding: 1,
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <IconButton sx={{ padding: 1 }}>
      <SearchIcon />
    </IconButton>
    <TextField
      variant="outlined"
      placeholder="Buscar..."
      fullWidth
      InputProps={{
        style: { backgroundColor: '#e0f7fa' }
      }}
    />
  </Paper>
);

export default Search;