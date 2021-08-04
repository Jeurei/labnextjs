import PropTypes from 'prop-types';
import Select from 'common/select';
import { useState } from 'react';
import SpecialistShedule from './specialist-shedule';

const SpecialistWorkTime = ({ time, specialist = null }) => {
  const [selectedAdress, setSelectedAdress] = useState(null);

  return (
    <div className="specialist__work-time">
      <Select
        selectClass="specialist__adress"
        data={specialist.cities}
        placeholder="Выберите адрес"
        action={(value) => setSelectedAdress(value)}
      />
      <SpecialistShedule
        time={time}
        specialist={specialist}
        adress={selectedAdress}
      />
    </div>
  );
};

SpecialistWorkTime.defaultProps = {
  specialist: null,
};

SpecialistWorkTime.propTypes = {
  time: PropTypes.arrayOf(PropTypes.any).isRequired,

  specialist: PropTypes.objectOf(PropTypes.any),
};

export default SpecialistWorkTime;
