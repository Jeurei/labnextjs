import { css, useTheme } from '@emotion/react';

const TCompany = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        min-height: 262px;
        align-items: center;
        padding-left: 167px;
        margin-bottom: 31px;
        background-image: url('/img/utk.svg'), url('/img/utkbg.png');
        background-position: 60px center, center;
        background-repeat: no-repeat;
        background-size: 79px 121px, cover;
        color: ${theme.colors.white};
        font-size: 33px;

        @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
          background-image: url('/img/utk.svg'), url('/img/utkbg@2x.png');
        }
      `}
    >
      <p
        css={css`
          line-height: 44px;
        `}
      >
        С доставкой грузов нам помогает
        <br />
        Удобная транспортная служба
      </p>
    </div>
  );
};

export default TCompany;
