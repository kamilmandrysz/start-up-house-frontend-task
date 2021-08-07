import { Grid } from '@material-ui/core';

import TopBar from 'App/StocksPortfolioDashboard/components/TopBar';
import SearchSection from 'App/StocksPortfolioDashboard/components/SearchSection';
import Portfolio from 'App/StocksPortfolioDashboard/components/Portfolio';

const StocksPortfolioDashboard = () => {
  return (
    <>
      <TopBar />
      <main>
        <Grid container>
          <Grid item xs={12} md={6}>
            <SearchSection />
          </Grid>
          <Grid item xs={12} md={6}>
            <Portfolio />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default StocksPortfolioDashboard;
