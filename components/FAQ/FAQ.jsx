import PageBuilder from 'components/common/pageBuilder';

import PropTypes from 'prop-types';

const FAQ = ({ data }) => {
  return data.page && <PageBuilder data={data.page} />;
};

FAQ.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FAQ;
