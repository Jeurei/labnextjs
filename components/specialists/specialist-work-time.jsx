import PropTypes from 'prop-types';
import Select from 'common/select';
import SpecialistShedule from './specialist-shedule';
import { filterDublicatesObjects, getFlatArr } from '../utils/filter';

const SpecialistWorkTime = ({ time, adresses }) => {
  const data = filterDublicatesObjects(
    getFlatArr(
      adresses.map((city) =>
        city.center.map((center) => ({
          value: `${city.city}-${center.adress}`,
          label: `${city.city}, ${center.adress}, ${center.name}`,
        })),
      ),
    ),
  );

  return (
    <div className="specialist__work-time">
      <Select
        selectClass="specialist__adress"
        data={data}
        placeholder="Выберите адрес"
      />
      <SpecialistShedule time={time} />
    </div>
  );
};

SpecialistWorkTime.propTypes = {
  time: PropTypes.objectOf(PropTypes.object).isRequired,
  adresses: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      center: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          adress: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

export default SpecialistWorkTime;
