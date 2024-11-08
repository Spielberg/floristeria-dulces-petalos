import { Breadcrumbs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BreadcrumbLink } from '@/types';

interface Props {
  links?: BreadcrumbLink[];
}

const Breadcrumb = (props: Props): React.ReactElement<Props> => {
  const { links = [] } = props;
  const { t } = useTranslation();
  
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/" color="inherit">
        {t('app.breadcrumb.links.home')}
      </Link>
      {links.map((link, index) => (
        <Link key={index} to={link.to} color="inherit">
          {link.label}
        </Link>
      ))}
    </Breadcrumbs>
    );
  };

export default Breadcrumb;