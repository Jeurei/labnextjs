import InnerPageLayout from 'components/InnerPageLayout';
import PropTypes from 'prop-types';
import ServicesTabs from './servicesTabs';

const Services = ({ children }) => {
  return (
    <InnerPageLayout title="Лабдиагностика">
      <h1 className="main__title">Услуги</h1>
      <ServicesTabs />
      {children}
    </InnerPageLayout>
  );
};

Services.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Services;
