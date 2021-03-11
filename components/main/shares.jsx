import SectionInner from 'containers/section-inner';
import SharesList from './shares-list';

const Shares = () => {
  return (
    <section className="main__section main__section--inner section shares">
      <SectionInner>
        <h2 className="section__title shares__title">Акции</h2>
        <div className="shares__container">
          <SharesList />
        </div>
      </SectionInner>
    </section>
  );
};

export default Shares;
