import PropTypes from 'prop-types';
import Link from 'next/link';
import Picture from './picture';

const BreadCrumb = ({ data, isActive }) => {
  return (
    <li
      className={`breadcrumbs__breadcrumb breadcrumb ${
        isActive ? 'breadcrumb--active' : ''
      }`}
    >
      <Link href={`${data.route}`}>
        {(data.route === '/' && (
          <a className="breadcrumb__link">
            <Picture src="img/breadCrumbLogo" alt="На главную" />
          </a>
        )) || <a className="breadcrumb__link">{data.name}</a>}
      </Link>
    </li>
  );
};

BreadCrumb.defaultProps = {
  isActive: false,
};

BreadCrumb.propTypes = {
  data: PropTypes.shape({
    route: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
};

export default BreadCrumb;
