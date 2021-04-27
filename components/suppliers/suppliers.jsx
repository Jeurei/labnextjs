import { css, useTheme } from '@emotion/react';
import PageBuilder from 'components/common/pageBuilder';
import Paragraph from 'components/common/paragraph';
import SimpleForm from 'components/common/simple-form';
import PropTypes from 'prop-types';
import TCompany from './tCompany';

const Suppliers = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <h2 className="main__title">Поставщикам расходных материалов</h2>
      <Paragraph>
        Рассматриваем коммерческие предложения по поставке расходных материалов
        при условии:
      </Paragraph>
      <h3
        css={css`
          width: 100%;
          margin-bottom: 32px;
          color: ${theme.colors.colorText.hex};
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Отправить коммерческое предложение
      </h3>
      <SimpleForm wFile />
      <TCompany />
      {data.page && <PageBuilder data={data.page} />}
    </>
  );
};

Suppliers.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Suppliers;
