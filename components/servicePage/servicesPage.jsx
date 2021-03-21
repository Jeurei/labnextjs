import BreadCrumbs from 'common/breadCrumbs';
import MainContainer from 'containers/main-container';
import Section from 'containers/section';
import SectionInner from 'containers/section-inner';
import FixedCircle from 'common/fixedCircle';
import Discounts from 'common/discounts';
import Services from './services';

const ServicesPage = () => {
  return (
    <MainContainer>
      <FixedCircle />
      <Section>
        <SectionInner>
          <BreadCrumbs className="services" />
          <Services />
          <Discounts />
        </SectionInner>
      </Section>
    </MainContainer>
  );
};

export default ServicesPage;
