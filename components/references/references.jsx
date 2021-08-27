import { css, useTheme } from '@emotion/react';
import React from 'react';
import { breakpointsMap } from 'constants/styles';
import Paragraph from 'components/common/paragraph';
import SectionInner from 'components/header/section-inner';
import Form from './form';
import LinearTextBlock from './linear-text-block';

const References = () => {
  const theme = useTheme();
  return (
    <SectionInner>
      <h2 className="main__title">Справка в ФНС</h2>
      <div>
        <Paragraph>
          Справка об оплате медицинских услуг для представления в налоговые
          органы РФ выдаётся по требованию налогоплательщика, производившего
          оплату медицинских услуг, и оформляется бесплатно.
        </Paragraph>
        <Paragraph>
          Копия лицензии не предоставляется на основании разъяснений Федеральной
          Налоговой Службы.
        </Paragraph>
        <Paragraph>
          Справка оформляется в соответствии с Приказом Минздрава РФ N 289, МНС
          РФ N БГ-3-04/256 от 25.07.2001.
        </Paragraph>
      </div>
      <LinearTextBlock>
        Пожалуйста! Просьба запрос на справку делать ОДИН раз. Узнать о ее
        готовности вы можете по тел. 2 700 789, доб. 881, 882, 883.
      </LinearTextBlock>
      <div
        css={css`
          background-color: #f7f7f7;
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <h3
          css={css`
            position: relative;
            padding-top: 22px;
            padding-bottom: 20px;
            padding-left: 0.625em;
            margin: 0;
            font-size: 16px;
            font-weight: 500;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              display: block;
              width: 100%;
              height: 4px;
              background-image: ${theme.colors.linearGradient};
              content: '';
            }

            ${breakpointsMap.DESKTOP} {
              padding-left: 43px;
            }
          `}
        >
          Налогоплательщик
        </h3>
        <Form />
      </div>
      <LinearTextBlock>
        Пожалуйста! Просьба запрос на справку делать ОДИН раз. Узнать о ее
        готовности вы можете по тел. 2 700 789, доб. 881, 882, 883.
      </LinearTextBlock>
      <div
        css={css`
          background-color: ${theme.colors.white};
          background-color: #f7f7f7;
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <h3
          css={css`
            position: relative;
            padding-top: 22px;
            padding-bottom: 20px;
            padding-left: 39px;
            margin: 0;
            font-size: 16px;
            font-weight: 500;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              display: block;
              width: 100%;
              height: 4px;
              background-image: ${theme.colors.linearGradient};
              content: '';
            }
          `}
        >
          Порядок предоставления справок в налоговые органы
        </h3>
        <div
          css={css`
            padding-top: 30px;
            padding-right: 38px;
            padding-bottom: 30px;
            padding-left: 43px;
            margin-bottom: 20px;
            background-color: ${theme.colors.white};
          `}
        >
          <Paragraph>
            В соответствии с подпунктом 3 пункта 1 статьи 219 Налогового кодекса
            РФ налогоплательщик имеет право на получение социального налогового
            вычета в размере суммы, уплаченной им в налоговом периоде за
            медицинские услуги, оказанные медицинскими организациями ему, его
            супругу (супруге), родителям, детям (в том числе усыновленным) в
            возрасте до 18 лет, подопечным в возрасте до 18 лет (в соответствии
            с перечнем медицинских услуг, утвержденным Правительством РФ), с
            учетом ограничения по сумме, установленного пунктом 2 статьи 219
            Налогового кодекса РФ.
          </Paragraph>
        </div>
      </div>
    </SectionInner>
  );
};

export default References;
