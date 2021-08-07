import styled from 'styled-components';

import { useAppSelector } from 'Hooks/redux-hooks';

import { BREAKPOINTS } from 'Styles/breakpoints';

import PortfolioTable from 'App/StocksPortfolioDashboard/components/Portfolio/components/PortfolioTable';

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;

  @media ${BREAKPOINTS.LG} {
    padding: 3rem 5rem;
  }
`;

const Portfolio = () => {
  const { portfolio } = useAppSelector((state) => state.stocksPortfolio);

  return <PortfolioContainer>{portfolio.length > 0 ? <PortfolioTable /> : <p>No Items</p>}</PortfolioContainer>;
};

export default Portfolio;
