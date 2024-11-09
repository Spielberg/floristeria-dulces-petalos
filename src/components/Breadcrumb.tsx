import { Breadcrumbs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BreadcrumbLink } from '@/types';

interface Props {
  links?: BreadcrumbLink[];
}

const CustomLink = (props: BreadcrumbLink) => {
  return (
    <Link to={props.to} style={{ textDecoration: 'none' }}>
      {props.label}
    </Link>
  );
}

const Breadcrumb = (props: Props): React.ReactElement<Props> => {
  const { links = [] } = props;
  const { t } = useTranslation();
  
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <CustomLink to="/" label={t('app.breadcrumb.links.home')} />
      {links.map((link, index) => (
        <CustomLink key={index} {...link} />
      ))}
    </Breadcrumbs>
    );
  };

export default Breadcrumb;