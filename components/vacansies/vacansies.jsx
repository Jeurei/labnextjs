import { css, useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import VacansyBlock from './vacansy-block';
import Contacts from './contacts';

const Vacansies = ({ vacansies }) => {
  const theme = useTheme();
  const [vacansiesType, setVacansiesType] = useState(0);

  const vacansiesMap = {
    0: () => [...vacansies].filter((el) => el.vacancyType === 'medical'),
    1: () => [...vacansies].filter((el) => el.vacancyType === 'administration'),
  };

  return (
    <SectionInner>
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
            border-right: 1px solid #4a4a4a;
            appearance: none;
            background-color: ${theme.colors.white};
            ${vacansiesType === 0
              ? 'background-image: linear-gradient(264deg, #768bf8, #c23df1);color:#fff;'
              : ''}

            &:hover {
              border-right: 1px solid #fff;
              background-image: linear-gradient(264deg, #768bf8, #c23df1);
              color: ${theme.colors.white};
            }
          `}
          onClick={() => setVacansiesType(0)}
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
            ${vacansiesType === 1
              ? 'background-image: linear-gradient(264deg, #768bf8, #c23df1);color:#fff;'
              : ''}

            &:hover {
              background-image: linear-gradient(264deg, #768bf8, #c23df1);
              color: ${theme.colors.white};
            }
          `}
          onClick={() => setVacansiesType(1)}
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
        {vacansiesMap[vacansiesType]().map((el) => (
          <VacansyBlock data={el} key={JSON.stringify(el)} />
        ))}
      </div>
    </SectionInner>
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
