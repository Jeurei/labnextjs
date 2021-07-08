import InnerPageLayout from 'components/InnerPageLayout';
import Online from 'components/online/online';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Index = () => {
  return (
    <InnerPageLayout>
      <Online />
    </InnerPageLayout>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
