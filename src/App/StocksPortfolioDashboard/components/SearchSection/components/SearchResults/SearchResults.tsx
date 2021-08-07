import styled from 'styled-components';

import { useAppSelector } from 'Hooks/redux-hooks';

import Result from 'App/StocksPortfolioDashboard/components/SearchSection/components/SearchResults/components/Result';

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const SearchResults = () => {
  const { searchCompanies } = useAppSelector((state) => state.stocksPortfolio);

  return (
    <SearchResultsContainer>
      {searchCompanies.map((e) => {
        return <Result key={e['1. symbol']} symbol={e['1. symbol']} name={e['2. name']} />;
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
