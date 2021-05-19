import MenuTabs from 'components/common/menu-tabs';
import InnerPageLayout from 'components/InnerPageLayout';
import SectionInner from 'containers/section-inner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Services = ({ children, services }) => {
  return (
    <InnerPageLayout title="Лабдиагностика | Услуги">
      <SectionInner>
        <h1 className="main__title">Услуги</h1>
        <MenuTabs routes={services} root="services" />
        {children}
      </SectionInner>
    </InnerPageLayout>
  );
};

Services.defaultProps = {
  children: undefined,
};

Services.propTypes = {
  children: PropTypes.node,
  services: PropTypes.objectOf(PropTypes.any).isRequired,
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
