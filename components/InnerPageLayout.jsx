import PropTypes from 'prop-types';
import Head from 'next/head';
import MainContainer from 'containers/main-container';
import FixedCircle from 'common/fixedCircle';
import SectionInner from 'containers/section-inner';
import Discounts from 'common/discounts';
import Section from 'containers/section';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';

const InnerPageLayout = ({
  children,
  title = 'Лабдиагностика',
  isColumn = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <MainContainer>
        <FixedCircle />
        <Section>
          <SectionInner>
            {children}
            <Discounts isColumn={isColumn} />
          </SectionInner>
        </Section>
      </MainContainer>
      <Footer />
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
