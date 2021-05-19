import MedCenterLink from 'components/common/medCenter-link';
import SectionInner from 'containers/section-inner';
import Filter from './filter';

// TODO: разбить на компоненты

const MedCenters = () => {
  return (
    <SectionInner>
      <h2 className="main__title">Медицинские центры</h2>
      <Filter />
      <MedCenterLink />
    </SectionInner>
  );
};

export default MedCenters;
