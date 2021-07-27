import PropTypes from 'prop-types';
import InnerPageLayout from 'components/InnerPageLayout';
import { isEmpty } from 'components/utils/common';
import PageBuilder from 'components/common/pageBuilder';
import SectionInner from 'components/header/section-inner';
import { wrapper } from 'Redux/index';
import { getInitialPropsDynamic, getInitialPropsForApp } from 'api/';

const News = ({ initialProps: { pageData } }) => {
  return (
    <InnerPageLayout>
      <SectionInner>
        <h2 className="main__title">{pageData.title}</h2>
      </SectionInner>
      {pageData.page && !isEmpty(pageData.page) && (
        <PageBuilder data={pageData.page} />
      )}
    </InnerPageLayout>
  );
};

News.getInitialProps = wrapper.getInitialPageProps(
  (store) => async ({ query: { id } }) => {
    await getInitialPropsForApp(store);
    const pageData = await getInitialPropsDynamic(id);
    return { pageData };
  },
);

News.propTypes = {
  initialProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default News;
