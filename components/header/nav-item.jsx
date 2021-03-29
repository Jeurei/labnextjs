import PropTypes from 'prop-types';
import Link from 'next/link';
import SubMenu from './submenu';

// TODO: Роутинг сабменю

const NavItem = ({ data }) => {
  return (
    <li className="nav__item">
      <Link href={data.path} aria-label="Ссылка на страницу услуг">
        <a className="nav__link">{data.name}</a>
      </Link>
      {data.children && data.children.length !== 0 && (
        <SubMenu
          subMenuTitle={data.name}
          data={data.children}
          root={data.path}
        />
      )}
    </li>
  );
};

NavItem.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.object),
    ]).isRequired.isRequired,
  }).isRequired,
};

export default NavItem;
