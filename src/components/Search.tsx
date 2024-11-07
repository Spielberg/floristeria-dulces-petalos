import * as React from 'react';
import { Paper, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const Search = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
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
        placeholder={t("app.search.input.placeholder")}
        fullWidth
        InputProps={{
          style: { backgroundColor: '#e0f7fa' }
        }}
      />
    </Paper>
  );
}

export default Search;