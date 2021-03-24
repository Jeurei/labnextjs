import PropTypes from 'prop-types';
import Routes from 'constants/routes';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import BreadCrumb from './breadCrumb';

// TODO: предположительно сдесь будет ещё один роутинг который предусмотрен на этой странице, типа условно /specialists/1 и тк это рута не будет в родителе переключаться будет только мейн страниы

const BreadCrumbs = ({ className }) => {
  const router = useRouter();
  const currentPath = router.pathname.split('/');

  const getArrayOfCurrentBreadCrumbs = (arr) => {
    const subRoutes = [];
    const currArr = [...arr].filter((el) => {
      if (
        currentPath.includes(el.route.replace('/', '')) &&
        Object.prototype.hasOwnProperty.call(el, 'subRoutes')
      ) {
        subRoutes.push(
          getArrayOfCurrentBreadCrumbs(Object.values(el.subRoutes)),
        );
        return true;
      }
      if (currentPath.includes(el.route.replace('/', ''))) {
        return true;
      }
      return false;
    });

    return [...currArr, ...subRoutes];
  };

  const routesArr = [
    ...new Set(
      []
        .concat(...getArrayOfCurrentBreadCrumbs(Object.values(Routes)))
        .map((el) => JSON.stringify(el)),
    ),
  ].map((el) => JSON.parse(el));

  return (
    <ul
      className={className && `${className}__breadcrumbs breadcrumbs`}
      css={css`
        display: flex;
        flex-direction: row;
        padding: 0;
        margin-bottom: 16px;
        list-style: none;
      `}
    >
      {routesArr.map((el) => {
        return (
          <BreadCrumb
            data={el}
            isActive={
              el.route.replace('/', '') === currentPath[currentPath.length - 1]
            }
          />
        );
      })}
    </ul>
  );
};

BreadCrumbs.defaultProps = {
  className: '',
};

BreadCrumbs.propTypes = {
  className: PropTypes.string,
};

export default BreadCrumbs;
