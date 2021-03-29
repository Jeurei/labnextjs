import { css, useTheme } from '@emotion/react';
import Paragraph from 'components/common/paragraph';
import { breakpointsMap } from 'constants/styles';

const GradientBlock = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        color: ${theme.colors.white};

        &:before {
          position: absolute;
          z-index: -1;
          left: -10%;
          display: block;
          width: 110vw;
          min-height: 100%;
          background-image: url(img/aboutusSvgBg.svg),
            ${theme.colors.linearGradient};
          background-position: calc(100% - 230px) -15px, center;
          background-repeat: no-repeat, repeat;
          content: '';

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url(img/aboutusSvgBg.svg),
              ${theme.colors.linearGradient};
          }
        }
      `}
    >
      <div
        css={css`
          padding-top: 35px;
          padding-bottom: 35px;

          ${breakpointsMap.TABLET} {
            padding-right: 250px;
            padding-left: 0;
          }
        `}
      >
        <h3
          css={css`
            font-weight: 500;
          `}
        >
          Лаборатория
        </h3>
        <Paragraph>
          ЛАБОРАТОРИЯ выполняет профессиональные исследования от общеклинических
          до уникальных. Оборудование ведущих производителей обеспечивает
          высокое качество исследований.
        </Paragraph>
      </div>
    </div>
  );
};

export default GradientBlock;
