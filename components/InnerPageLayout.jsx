import PropTypes from 'prop-types';
import FixedCircle from 'common/fixedCircle';
import SectionInner from 'components/header/section-inner';
import Discounts from 'common/discounts';
import Section from 'components/header/section';
import MainLayout from './MainLayout';
import BreadCrumbs from './common/breadCrumbs';

const InnerPageLayout = ({
  children,
  title = 'Лабдиагностика',
  isColumn = false,
  isLoading = false,
}) => {
  return (
    <>
      <MainLayout title={title} isLoading={isLoading}>
        <FixedCircle />
        <Section>
          <SectionInner>
            <BreadCrumbs />
          </SectionInner>
          {children}
          <SectionInner>
            <Discounts isColumn={isColumn} />
          </SectionInner>
        </Section>
      </MainLayout>
    </>
  );
};

InnerPageLayout.defaultProps = {
  title: 'Лабдиагностика',
  isColumn: false,
  isLoading: false,
};

InnerPageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  isColumn: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default InnerPageLayout;
