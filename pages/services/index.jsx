import Services from 'components/servicePage/services';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Index = () => {
  return <Services />;
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
