import { Grid } from '@material-ui/core';

import TopBarLayout from 'Layouts/TopBarLayout';

import SearchSection from 'App/StocksPortfolioDashboard/components/SearchSection';
import Portfolio from 'App/StocksPortfolioDashboard/components/Portfolio';

const StocksPortfolioDashboard = () => {
  return (
    <TopBarLayout>
      <Grid container>
        <Grid item xs={12} md={6}>
          <SearchSection />
        </Grid>
        <Grid item xs={12} md={6}>
          <Portfolio />
        </Grid>
      </Grid>
    </TopBarLayout>
  );
};

export default StocksPortfolioDashboard;
