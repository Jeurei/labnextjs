import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'containers/section-inner';

const Corpo = ({ data }) => {
  return (
    <>
      <SectionInner>
        <h2 className="main__title">{data.title}</h2>
      </SectionInner>
      {data.page && <PageBuilder data={data.page} />}
    </>
  );
};

Corpo.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Corpo;
