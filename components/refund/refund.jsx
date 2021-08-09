import SectionInner from 'components/header/section-inner';
import RefundForm from './refundForm';

const Refund = () => {
  return (
    <SectionInner>
      <h2 className="main__title">
        Заявление для возврата денежных средств, оплаченных банковской картой на
        сайте
      </h2>
      <RefundForm />
    </SectionInner>
  );
};

export default Refund;
