import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import DefaultSearch from 'components/common/default-search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SectionInner from 'containers/section-inner';
import MenuTabs from './menu-tabs';
import Article from './article';

const Media = ({ media, articles }) => {
  const router = useRouter();

  const articlesMap = {
    media: () =>
      articles.map((el) => <Article data={el} key={JSON.stringify(el)} />),
    news: () =>
      articles.map(
        (el) => el.isNews && <Article data={el} key={JSON.stringify(el)} />,
      ),
    blog: () =>
      articles.map(
        (el) => el.isBlog && <Article data={el} key={JSON.stringify(el)} />,
      ),
    useful: () =>
      articles.map(
        (el) => el.isUseful && <Article data={el} key={JSON.stringify(el)} />,
      ),
  };

  return (
    <>
      <SectionInner>
        <DefaultSearch />
        <MenuTabs routes={media} root="media" />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            column-gap: 20px;

            ${breakpointsMap.TABLET} {
              grid-template-columns: repeat(2, 1fr);
            }

            ${breakpointsMap.DESKTOP} {
              grid-template-columns: repeat(4, 1fr);
            }
          `}
        >
          {articlesMap[router.pathname.split('/').pop()]()}
        </div>
      </SectionInner>
    </>
  );
};

Media.propTypes = {
  media: PropTypes.objectOf(PropTypes.any).isRequired,
  articles: PropTypes.arrayOf(PropTypes.any).isRequired,
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
