import { css, useTheme } from '@emotion/react';
import VacansyBlock from './vacansy-block';
import Contacts from './contacts';

const Vacansies = () => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Вакансии</h2>
      <Contacts />
      <div
        css={css`
          margin-bottom: 30px;
        `}
      >
        <button
          type="button"
          css={css`
            padding-top: 21px;
            padding-right: 68px;
            padding-bottom: 22px;
            padding-left: 61px;
            border: none;
            appearance: none;
            background-color: ${theme.colors.white};
            box-shadow: ${theme.colors.boxShadow};

            &:hover {
              background-image: linear-gradient(264deg, #768bf8, #c23df1);
              color: ${theme.colors.white};
            }
          `}
        >
          Медицинская деятельность
        </button>
      </div>
      <div
        css={css`
          display: grid;
          margin-bottom: 30px;
          gap: 30px;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <VacansyBlock />
        <VacansyBlock />
        <VacansyBlock />
      </div>
    </>
  );
};

export default Vacansies;
