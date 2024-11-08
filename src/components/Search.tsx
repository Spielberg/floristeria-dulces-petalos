import * as React from 'react';
import { Paper, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Search = (props: Props): React.ReactElement<Props> => {
  const { filter, setFilter } = props;
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
        placeholder={t('app.search.input.placeholder')}
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        InputProps={{
          style: { backgroundColor: '#e0f7fa' }
        }}
      />
    </Paper>
  );
}

export default Search;