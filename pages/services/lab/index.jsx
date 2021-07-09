import Lab from 'components/servicePage/lab/index';
import Services from 'components/servicePage/services';
import { wrapper } from 'Redux/index';
import { getInitialPropsForApp } from 'api';

const Index = () => {
  return (
    <Services>
      <Lab />
    </Services>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await getInitialPropsForApp(store);
  },
);

export default Index;
