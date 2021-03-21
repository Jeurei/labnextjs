import Load from 'components/common/load';
import SectionInner from 'containers/section-inner';
import ActualOffersList from './actual-offers-list';

const ActualOffers = () => (
  <section className="main__section main__section--actual-offers section actual-offers">
    <SectionInner>
      <h2 className="actual-offers__title">Актуальные предложения</h2>
      <Load />
      <div className="actual-offers__container">
        <ActualOffersList />
      </div>
    </SectionInner>
  </section>
);

export default ActualOffers;
