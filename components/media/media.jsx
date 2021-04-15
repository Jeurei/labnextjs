import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import DefaultSearch from 'components/common/default-search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuTabs from './menu-tabs';
import Article from './article';

const Media = ({ media }) => {
  return (
    <>
      <h2 className="main__title">Пресс центр</h2>
      <DefaultSearch />
      <MenuTabs routes={media} root="media" />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
          }
        `}
      >
        <Article />
      </div>
    </>
  );
};

Media.propTypes = {
  media: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    routes: {
      routes: { media },
    },
  } = state;

  return { media };
};

export default connect(mapStateToProps, null)(Media);
