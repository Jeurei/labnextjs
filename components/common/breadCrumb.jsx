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
      <Link className="breadcrumb__link" href={`${data.path}`}>
        {(data.path === '/' && (
          <a>
            <Picture src="img/breadCrumbLogo" alt="На главную" />
          </a>
        )) || <a>{data.name}</a>}
      </Link>
    </li>
  );
};

BreadCrumb.defaultProps = {
  isActive: false,
};

BreadCrumb.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
};

export default BreadCrumb;
