import * as React from 'react';
import {
  TextField,
  InputAdornment,
} from '@mui/material';
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
    <TextField
      fullWidth
      variant="outlined"
      placeholder={t('app.search.input.placeholder')}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;