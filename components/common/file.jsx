import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const File = () => {
  const theme = useTheme();
  return (
    <a
      href="/img/file.svg"
      download
      css={css`
        display: block;
        padding: 30px 64px;
        margin-bottom: 30px;
        background-image: url('img/file.svg');
        background-position: 25px 32px;
        background-repeat: no-repeat;
        background-size: 21px 26px;
        box-shadow: ${theme.colors.boxShadow};

        ${breakpointsMap.TABLET} {
          background-position: 25px 24px;
        }
      `}
    >
      ФЗ No323 «Об основах охраны здоровья граждан в Российской Федерации».
    </a>
  );
};

export default File;
