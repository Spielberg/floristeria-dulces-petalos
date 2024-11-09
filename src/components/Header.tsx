import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = (): React.ReactElement => {
  const { t } = useTranslation();
  
  return(
    <Box>
      <Link to="/">
        <img src="/public/logotipo.png" width="350px" alt={t('app.header.img.alt')} />
      </Link>
    </Box>
  );
}

export default Header;