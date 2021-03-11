import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { breakpointsMap } from 'constants/styles';

const Section = ({ children }) => {
  const SectionContainer = styled.section`
    padding-top: 80px;

    ${breakpointsMap.TABLET} {
      padding-top: 55px;
    }

    ${breakpointsMap.DESKTOP} {
      padding-top: 90px;
    }
  `;

  return <SectionContainer>{children}</SectionContainer>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
