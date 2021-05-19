import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'containers/section-inner';
import PropTypes from 'prop-types';

const AboutUs = ({ data }) => {
  return (
    <>
      <SectionInner>
        <h2 className="main__title">О компании</h2>
      </SectionInner>
      {data.page && data.page.length !== 0 && <PageBuilder data={data.page} />}
      {/* <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 36px;
          padding-bottom: 11px;
        `}
      >
        <h3
          css={css`
            margin-bottom: 33px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Документы
        </h3>
        <File />
      </div>
      <div
        css={css`
          position: relative;
          padding-top: 10px;

          &:before {
            position: absolute;
            z-index: -1;
            top: 0;
            left: -10%;
            display: block;
            width: 110vw;
            min-height: 100%;
            background-color: #f7f7f7;
            content: '';
          }
        `}
      >
        <div
          css={css`
            display: flex;
            width: 100%;
            flex-direction: column;
            padding-right: 5px;
            padding-left: 5px;

            & > div {
              width: 100%;
            }

            .swiper-slide {
              justify-content: space-between !important;
            }
          `}
        >
          <ReferencesSlider title="Лицензия" quantity={4} />
        </div>
      </div>
      <div
        css={css`
          padding-top: 10px;
        `}
      >
        <h3
          css={css`
            margin: 0;
            margin-bottom: 29px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Отзывы
        </h3>
        <div
          css={css`
            display: grid;
            column-gap: 40px;
            grid-template-columns: repeat(2, 1fr);
          `}
        >
          <Comment />
          <Comment />
        </div>
      </div> */}
    </>
  );
};

AboutUs.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AboutUs;
