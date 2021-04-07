import { css, useTheme } from '@emotion/react';
import Socials from 'components/common/socials';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';

const Share = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 35px;
        padding-bottom: 35px;
        border-top: 1px dashed ${theme.colors.colorText.hex};
        border-bottom: 1px dashed ${theme.colors.colorText.hex};
        margin-top: 26px;
        margin-bottom: 26px;

        @media (min-width: 360px) {
          flex-direction: row;
          justify-content: flex-start;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;

          @media (min-width: 360px) {
            justify-content: flex-start;
            margin-right: auto;
          }
        `}
      >
        <Link href="/vacansies">
          <a
            className="vacansy__link"
            css={css`
              position: relative;
              padding-bottom: 9px;
              cursor: pointer;
              font-size: 13px;

              &:before {
                position: absolute;
                bottom: 0;
                left: 0;
                display: block;
                width: 102px;
                height: 4px;
                background-image: ${theme.colors.linearGradient};
                content: '';
              }

              ${breakpointsMap.DESKTOP} {
                &:before {
                  right: 0;
                  left: auto;
                }
              }
            `}
          >
            Вернуться к другим вакансиям
          </a>
        </Link>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;

          .socials {
            margin-top: 0;
          }

          .social__link {
            color: ${theme.colors.colorText.hex};
          }

          @media (min-width: 360px) {
            justify-content: flex-start;
          }
        `}
      >
        <a
          className="vacansy__link"
          href="/"
          css={css`
            position: relative;
            padding-bottom: 9px;
            font-size: 13px;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              display: block;
              width: 46px;
              height: 4px;
              background-image: ${theme.colors.linearGradient};
              content: '';
            }
          `}
        >
          Поделиться
        </a>
        <Socials />
        <ShareIcon width="30px" height="30px" />
      </div>
    </div>
  );
};

export default Share;
