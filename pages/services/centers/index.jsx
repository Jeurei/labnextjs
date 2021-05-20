import Centers from 'components/servicePage/centers/index';
import Services from 'components/servicePage/services';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <Services>
      <Centers />
    </Services>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
