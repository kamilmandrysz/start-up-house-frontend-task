import { Switch, Route, Redirect } from 'react-router-dom';

import { APP_ROUTES } from 'Constants/routes';

import StocksPortfolioDashboard from 'App/StocksPortfolioDashboard';
import CompanyDetails from 'App/CompanyDetails';

const Routes = () => {
  return (
    <Switch>
      <Route path={APP_ROUTES.STOCKS_PORTFOLIO_DASHBOARD} component={StocksPortfolioDashboard} exact />
      <Route path={`${APP_ROUTES.COMPANY_DETAILS}/:symbol`} component={CompanyDetails} />

      <Redirect to={APP_ROUTES.STOCKS_PORTFOLIO_DASHBOARD} />
    </Switch>
  );
};

export default Routes;
