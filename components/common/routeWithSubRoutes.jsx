import { Route } from 'react-router-dom';

const RoutesWithSubRoutes = (rout) => {
  return <Route path={rout.path} render={() => <rout.Component />} />;
};

export default RoutesWithSubRoutes;
