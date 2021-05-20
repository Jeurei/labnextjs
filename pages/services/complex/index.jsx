import Services from 'components/servicePage/services';
import Complex from 'components/servicePage/complex/index';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <Services>
      <Complex />
    </Services>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
