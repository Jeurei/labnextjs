import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleForm from 'components/common/simple-form';
import FeaturesBlock from 'components/common/features-block';
import WorkingWithUs from 'components/common/working-with-us';
import Paragraph from 'components/common/paragraph';

// TODO: разбить на компоненты

const Corpo = () => {
  return (
    <>
      <h2 className="main__title">Корпоративным клиентам</h2>
      <Paragraph
        text={`Лечебно-диагностический центр « Лабдиагностика» предлагает широкий
        спектр сотрудничества по оказанию медицинских услуг для корпоративных
        клиентов. Приглашаем к\n
        сотрудничеству, телефон отдела договоров - 204 7 201.`}
      />
      <SimpleForm title="Получить коммерческое предложение" />
      <FeaturesBlock />
      <WorkingWithUs />
    </>
  );
};

export default Corpo;
