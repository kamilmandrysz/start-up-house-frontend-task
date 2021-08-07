import styled from 'styled-components';

import { useAppSelector } from 'Hooks/redux-hooks';

import { BREAKPOINTS } from 'Styles/breakpoints';

import PortfolioTable from 'App/StocksPortfolioDashboard/components/Portfolio/components/PortfolioTable';
import NoResults from 'App/StocksPortfolioDashboard/components/Portfolio/components/NoResults';

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3rem 2rem;

  @media ${BREAKPOINTS.MD} {
    padding: 3rem 3rem;
  }

  @media ${BREAKPOINTS.LG} {
    padding: 3rem 5rem;
  }
`;

const Portfolio = () => {
  const { portfolio } = useAppSelector((state) => state.stocksPortfolio);

  return <PortfolioContainer>{portfolio.length > 0 ? <PortfolioTable /> : <NoResults />}</PortfolioContainer>;
};

export default Portfolio;
