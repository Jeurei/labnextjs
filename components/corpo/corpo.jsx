import SimpleForm from 'components/common/simple-form';
import FeaturesBlock from 'components/common/features-block';
import WorkingWithUs from 'components/common/working-with-us';
import Paragraph from 'components/common/paragraph';

import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';

// TODO: разбить на компоненты

const Corpo = ({ data }) => {
  return (
    <>
      <h2 className="main__title">{data.title}</h2>
      {data.page && <PageBuilder data={data.page} />}
      {/* <Paragraph
        text={`Лечебно-диагностический центр « Лабдиагностика» предлагает широкий
        спектр сотрудничества по оказанию медицинских услуг для корпоративных
        клиентов. Приглашаем к\n
        сотрудничеству, телефон отдела договоров - 204 7 201.`}
      />
      <SimpleForm title="Получить коммерческое предложение" />
      <FeaturesBlock />
      <WorkingWithUs /> */}
    </>
  );
};

Corpo.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Corpo;
