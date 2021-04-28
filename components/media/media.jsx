import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import DefaultSearch from 'components/common/default-search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import MenuTabs from './menu-tabs';
import Article from './article';

const Media = ({ media, articles }) => {
  const router = useRouter();

  const articlesMap = {
    media: () => articles.map((el) => <Article data={el} />),
    news: () => articles.map((el) => el.isNews && <Article data={el} />),
    blog: () => articles.map((el) => el.isBlog && <Article data={el} />),
    useful: () => articles.map((el) => el.isUseful && <Article data={el} />),
  };

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
        {articlesMap[router.pathname.split('/').pop()]()}
      </div>
    </>
  );
};

Media.propTypes = {
  media: PropTypes.objectOf(PropTypes.object).isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    routes: {
      routes: { media },
    },
    articles,
  } = state;

  return { media, articles };
};

export default connect(mapStateToProps, null)(Media);
