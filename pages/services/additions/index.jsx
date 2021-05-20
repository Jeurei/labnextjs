import Additions from 'components/servicePage/addition/additions';
import Services from 'components/servicePage/services';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'utils/common';

const Index = () => {
  return (
    <Services>
      <Additions />
    </Services>
  );
};

Index.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await getInitialPropsForApp(store);
});

export default Index;
