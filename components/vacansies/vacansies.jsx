import { css, useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VacansyBlock from './vacansy-block';
import Contacts from './contacts';

const Vacansies = ({ vacansies }) => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Вакансии</h2>
      <Contacts />
      <div
        css={css`
          display: inline-block;
          margin-bottom: 30px;
          box-shadow: ${theme.colors.boxShadow};
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

            &:hover {
              background-image: linear-gradient(264deg, #768bf8, #c23df1);
              color: ${theme.colors.white};
            }
          `}
        >
          Медицинская деятельность
        </button>
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

            &:hover {
              background-image: linear-gradient(264deg, #768bf8, #c23df1);
              color: ${theme.colors.white};
            }
          `}
        >
          Административный персонал
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
        {vacansies.map((el) => (
          <VacansyBlock data={el} />
        ))}
      </div>
    </>
  );
};

Vacansies.propTypes = {
  vacansies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { vacansies } = state;

  return { vacansies };
};

export default connect(mapStateToProps, null)(Vacansies);
