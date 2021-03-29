import Image from 'next/image';
import { css, useTheme } from '@emotion/react';
import { ReactComponent as Logo } from 'icons/sharesLogo.svg';
import Paragraph from 'components/common/paragraph';
import { breakpointsMap } from 'constants/styles';

const AboutCompany = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        min-height: 366px;
        color: ${theme.colors.white};

        .aboutus__img-container {
          display: none;
          width: 100%;
          height: 100%;
          align-items: center;
        }

        &:before {
          position: absolute;
          z-index: -1;
          left: -10%;
          display: block;
          width: 110vw;
          min-height: 100%;
          background-image: url(/img/aboutusbg.png);
          background-repeat: no-repeat;
          background-size: cover;
          content: '';

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url(/img/aboutusbg@2x.png);
          }
        }

        ${breakpointsMap.TABLET} {
          .aboutus__img-container {
            display: flex;
          }
        }
      `}
    >
      <div
        css={css`
          display: flex;
          height: 100%;
          min-height: 344px;
          align-items: center;

          .aboutus__img {
            height: 190px;
            border-radius: 50%;
          }

          .aboutUs__logo {
            margin-bottom: 29px;
          }

          ${breakpointsMap.DESKTOP} {
            .aboutus__img {
              height: 296px;
            }
          }
        `}
      >
        <div>
          <Logo className="aboutUs__logo" width="216px" height="32px" />
          <h3
            css={css`
              margin-top: 0;
              margin-bottom: 29px;
              font-size: 16px;
              font-weight: 500;
            `}
          >
            Лечебно-диагностический центр «ЛабДиагностика»
          </h3>
          <Paragraph>
            Компания была создана в 2004 г. как частная лаборатория, оказывающая
            услуги по выполнению клинических лабораторных исследований для
            населения и медицинских учреждений. Сегодня к Вашим услугам
            современная лаборатория и многопрофильный медицинский центр, где Вы
            можете пройти медицинское обследование.
          </Paragraph>
        </div>
        <div className="aboutus__img-container">
          <Image
            src="/img/aboutusImg.png"
            className="aboutus__img"
            width="296"
            height="296"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
