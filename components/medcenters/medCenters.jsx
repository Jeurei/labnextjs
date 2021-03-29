import MedCenterLink from 'components/common/medCenter-link';
import Filter from './filter';

// TODO: разбить на компоненты

const MedCenters = () => {
  return (
    <>
      <h2 className="main__title">Медицинские центры</h2>
      <Filter />
      <MedCenterLink />
    </>
  );
};

export default MedCenters;
