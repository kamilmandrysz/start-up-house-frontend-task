import styled from 'styled-components';

import { useAppSelector } from 'Hooks/redux-hooks';

import Result from 'App/StocksPortfolioDashboard/components/SearchSection/components/SearchResults/components/Result';

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const SearchResults = () => {
  const { searchCompanies } = useAppSelector((state) => state.stocksPortfolio);

  return (
    <SearchResultsContainer>
      <p>Search result</p>

      {searchCompanies.map((e) => {
        return <Result key={e['1. symbol']} symbol={e['1. symbol']} name={e['2. name']} />;
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
