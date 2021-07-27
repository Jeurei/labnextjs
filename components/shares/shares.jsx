import { css } from '@emotion/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Share from 'components/main/share';
import SectionInner from 'components/header/section-inner';

const Shares = ({ shares }) => {
  return (
    <>
      <SectionInner>
        <h2 className="main__title">Акции</h2>
        <ul
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            padding: 0;
            list-style: none;

            .shares__list-item {
              min-width: 381px;
              min-height: 100%;
              margin-right: 37px;
            }
          `}
        >
          {shares.map((el) => (
            <Share data={el} key={el.title} />
          ))}
        </ul>
      </SectionInner>
    </>
  );
};

Shares.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { shares } = state;

  return { shares };
};

export default connect(mapStateToProps, null)(Shares);
