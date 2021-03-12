import PropTypes from 'prop-types';
import FixedCircle from 'common/fixedCircle';
import SectionInner from 'containers/section-inner';
import Discounts from 'common/discounts';
import Section from 'containers/section';
import MainLayout from './MainLayout';

const InnerPageLayout = ({
  children,
  title = 'Лабдиагностика',
  isColumn = false,
}) => {
  return (
    <>
      <MainLayout title={title}>
        <FixedCircle />
        <Section>
          <SectionInner>
            {children}
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
};

InnerPageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  isColumn: PropTypes.bool,
};

export default InnerPageLayout;
