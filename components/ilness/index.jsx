import PageBuilder from 'components/common/pageBuilder';
import PropTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import SectionInner from 'components/header/section-inner';

const Illness = ({ data }) => {
  const theme = useTheme();

  return (
    <>
      <SectionInner>
        <h2
          className="main__title"
          css={css`
            margin-bottom: 40px;
          `}
        >
          {data.title}
        </h2>
      </SectionInner>
      {data.page && <PageBuilder data={data.page} />}
      <SectionInner>
        <div
          css={css`
            display: flex;
            width: 100%;
            min-height: 195px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 42px;
            margin-bottom: 36px;
            background-image: url('img/analyze-q-bg.png'),
              linear-gradient(
                to left,
                RGBA(250, 0, 235, 1),
                RGBA(154, 102, 245, 1),
                RGBA(43, 215, 255, 1)
              );
            background-position: 0 0;
            background-repeat: no-repeat;
            background-size: cover;
            @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
              background-image: url('img/analyze-q-bg@2x.png'),
                linear-gradient(
                  to left,
                  RGBA(250, 0, 235, 1),
                  RGBA(154, 102, 245, 1),
                  RGBA(43, 215, 255, 1)
                );
            }
          `}
        >
          <p
            css={css`
              color: ${theme.colors.white};
              font-size: 22px;
              font-weight: 500;
            `}
          >
            Хотите записаться на прием к Эндокринологу
          </p>
          <div
            css={css`
              display: flex;
              width: 100%;
              justify-content: center;
            `}
          >
            <button
              type="button"
              className="button"
              css={css`
                padding: 14px 33px 18px 35px;
                border: none;
                margin-right: 24px;
              `}
            >
              Да
            </button>
            <button
              type="button"
              css={css`
                padding-bottom: 4px;
                border: none;
                appearance: none;
                background: transparent;
                color: ${theme.colors.white};
                text-decoration: underline;
                text-transform: uppercase;
              `}
            >
              Нет
            </button>
          </div>
        </div>
      </SectionInner>
    </>
  );
};

Illness.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Illness;
