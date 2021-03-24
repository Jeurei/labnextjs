import PropTypes from 'prop-types';
import Link from 'next/link';
import { ReactComponent as SmallLogo } from 'icons/small-logo.svg';

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
            <SmallLogo alt="На главную" width="15" height="15" />
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
