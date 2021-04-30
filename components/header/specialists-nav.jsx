import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import Load from 'components/common/load';

const SpecialistsNav = ({ specialists, isTop, isLoading }) => {
  const theme = useTheme();
  const alphabet = [
    ...new Set(Object.values(specialists).map((el) => el.name[0])),
  ].map((el) => {
    return {
      word: el,
      job: Object.values(specialists)
        .map((elem) => elem.name[0] === el && elem.name)
        .filter(Boolean),
    };
  });

  const SubNav = styled('ul')`
    position: absolute;
    z-index: 1000;
    top: ${isTop ? 'calc(110% - 7px)' : '100%'};
    left: 50%;
    display: none;
    width: 1170px;
    min-width: 1170px;
    flex-wrap: wrap;
    padding: 0;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;
    transform: translateX(-50%);

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
