import styled from '@emotion/styled';
import { useTheme, css } from '@emotion/react';
import PropTypes from 'prop-types';
import Load from 'components/common/load';
import { getFlatArr } from 'components/utils/filter';

const SpecialistsNav = ({ specialists, isTop, isLoading }) => {
  const theme = useTheme();
  const alphabet = [
    ...new Set(
      getFlatArr(specialists.map((el) => el.job.map((elem) => elem[0]))),
    ),
  ].map((el) => ({
    word: el,
    job: [
      ...new Set(
        specialists
          .map((elem) => elem.job.find((element) => element[0] === el))
          .filter(Boolean),
      ),
    ],
  }));

  const SubNav = styled('ul')`
    position: absolute;
    z-index: 1000;
    top: ${isTop ? 'calc(110% - 2px)' : '100%'};
    left: calc(0% - 100px);
    display: none;
    min-width: 1170px;
    flex-wrap: wrap;
    padding: 0;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;

    &:hover {
      display: none;
    }
  `;

  const Item = styled('li')`
    display: flex;
    width: 25%;
    max-width: 25%;
    flex-direction: column;
    flex-grow: 1;
    padding-top: 41px;
    padding-right: 36px;
    padding-bottom: 36px;
    padding-left: 36px;
  `;

  const Span = styled.span`
    width: 100%;
    margin-bottom: 10px;
    font-size: 16px;
  `;

  const Title = styled('h3')`
    margin: 0;
    margin-bottom: 20px;
    color: ${theme.colors.blue};
    font-size: 22px;
    font-weight: 500;
  `;

  return (
    <SubNav>
      <Load state={isLoading}>
        {Object.values(alphabet).map((el) => (
          <Item>
            <Title>{el.word}</Title>
            {el.job.map((elem) => (
              <Span>{elem}</Span>
            ))}
          </Item>
        ))}
      </Load>
    </SubNav>
  );
};

SpecialistsNav.defaultProps = {
  isTop: false,
  isLoading: false,
};

SpecialistsNav.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
  isTop: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default SpecialistsNav;
