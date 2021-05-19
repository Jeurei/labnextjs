import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

import PropTypes from 'prop-types';

const File = ({ data }) => {
  const theme = useTheme();
  return (
    <a
      href="/img/file.svg"
      download
      css={css`
        display: block;
        padding: 30px 64px;
        margin-bottom: 30px;
        background-image: url(${data.icon});
        background-position: 25px 32px;
        background-repeat: no-repeat;
        background-size: 21px 26px;
        box-shadow: ${theme.colors.boxShadow};

        ${breakpointsMap.TABLET} {
          background-position: 25px 24px;
        }
      `}
    >
      {data.title}
    </a>
  );
};

File.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default File;
