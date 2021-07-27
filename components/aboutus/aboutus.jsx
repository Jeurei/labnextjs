import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'components/header/section-inner';
import PropTypes from 'prop-types';

const AboutUs = ({ data }) => {
  return (
    <>
      <SectionInner>
        <h2 className="main__title">О компании</h2>
      </SectionInner>
      {data.page && data.page.length !== 0 && <PageBuilder data={data.page} />}
    </>
  );
};

AboutUs.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AboutUs;
