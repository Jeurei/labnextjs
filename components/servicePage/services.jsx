import MenuTabs from 'components/common/menu-tabs';
import InnerPageLayout from 'components/InnerPageLayout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Services = ({ children, services }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Услуги">
      <h1 className="main__title">Услуги</h1>
      <MenuTabs routes={services} root="services" />
      {children}
    </InnerPageLayout>
  );
};

Services.propTypes = {
  children: PropTypes.node.isRequired,
  services: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    routes: {
      routes: { services },
    },
  } = state;

  return { services };
};

export default connect(mapStateToProps, null)(Services);
