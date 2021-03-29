import { css } from '@emotion/react';
import LinearBottomButton from 'components/common/linear-bottom-button';
import { breakpointsMap } from 'constants/styles';

const ButtonsBlock = () => {
  return (
    <div
      css={css`
        position: relative;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 51px;

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

        ${breakpointsMap.TABLET} {
          padding-right: 0;
          padding-left: 0;
        }
      `}
    >
      <div>
        <h3
          css={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Многопрофильный медицинский центр
        </h3>
        <p
          css={css`
            font-size: 13px;
          `}
        >
          МНОГОПРОФИЛЬНЫЙ МЕДИЦИНСКИЙ ЦЕНТР. Основное направление услуг
          медицинского центра - здоровье пациентов репродуктивного возраста, а
          также услуги необходимых для рождения здорового ребенка. Вы можете
          получить консультации докторов более 20 врачебных специальностей,
          выполнить ультразвуковое исследование внутренних органов, посетить
          физкабинет.
        </p>
        <div
          css={css`
            display: flex;
            margin-top: 40px;
          `}
        >
          <LinearBottomButton>
            Правила предоставления платных
            <br />
            медицинских услуг
          </LinearBottomButton>
          <LinearBottomButton>
            Политика обработки персональных
            <br /> данных
          </LinearBottomButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBlock;
