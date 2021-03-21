import PropTypes from 'prop-types';
import Select from 'common/select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUserFormState } from 'Redux/actions/actions';
import { useState } from 'react';
import { filterDublicatesObjects, getFlatArr } from '../utils/filter';
import SpecialistShedule from './specialist-shedule';

const SpecialistWorkTime = ({
  time,
  adresses,
  userForm,
  setFormState,
  specialist = null,
}) => {
  const data = filterDublicatesObjects(
    getFlatArr(
      adresses.map((city) =>
        city.center.map((center) => ({
          value: `${city.city}, ${center.adress}, ${center.adress}`,
          label: `${city.city}, ${center.adress}, ${center.name}`,
        })),
      ),
    ),
  );
  const [selectedAdress, setSelectedAdress] = useState(null);

  return (
    <div className="specialist__work-time">
      <Select
        selectClass="specialist__adress"
        data={data}
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
  userForm: PropTypes.objectOf(PropTypes.object).isRequired,
  setFormState: PropTypes.func.isRequired,
  specialist: PropTypes.objectOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { userForm } = state;

  return { userForm };
};

const mapDispatchToProps = (dispatch) => ({
  setFormState: bindActionCreators(setUserFormState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecialistWorkTime);
