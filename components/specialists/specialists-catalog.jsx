import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Card from 'containers/card';
import Specialist from './specialist';

// TODO: COMPONENT CARD!!!!!!

const SpecialistsCatalog = ({ specialists }) => {
  return (
    <section className="specialists__catalog">
      {specialists.map((el) => (
        <Card>
          <Specialist data={el} />
        </Card>
      ))}
    </section>
  );
};

SpecialistsCatalog.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpecialistsCatalog;
