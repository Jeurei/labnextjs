import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';

const FileInput = () => {
  const theme = useTheme();
  return (
    <>
      <input
        type="file"
        id="file"
        name="file"
        css={css`
          display: none;
        `}
      />
      <label
        htmlFor="file"
        css={css`
          position: relative;
          width: 100%;
          height: 46px;
          padding-top: 14px;
          padding-bottom: 15px;
          padding-left: 17px;
          margin-bottom: 15px;
          background-color: rgba(${theme.colors.colorText.rgb}, 0.07);

          &:after {
            position: absolute;
            top: 15px;
            right: 11px;
            display: block;
            color: rgba(${theme.colors.colorText.rgb}, 0.55);
            content: '+';
            font-size: 22px;
          }

          ${breakpointsMap.DESKTOP} {
            margin-top: 25px;
            margin-bottom: 0;
          }
        `}
      >
        Прикрепить документ
      </label>
    </>
  );
};

export default FileInput;
