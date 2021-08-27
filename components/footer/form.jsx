import SectionInner from 'components/header/section-inner';
import Form from 'components/common/Form';

const FooterForm = () => {
  return (
    <section className="footer__section footer__section--form section form-section">
      <SectionInner>
        <h2 className="section__title">Задайте свой вопрос</h2>
        <Form />
      </SectionInner>
    </section>
  );
};

export default FooterForm;
