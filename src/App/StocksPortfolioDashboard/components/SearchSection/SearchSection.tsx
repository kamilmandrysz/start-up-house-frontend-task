import styled from 'styled-components';

import { BREAKPOINTS } from 'Styles/breakpoints';

import Search from 'App/StocksPortfolioDashboard/components/SearchSection/components/Search';
import SearchResults from 'App/StocksPortfolioDashboard/components/SearchSection/components/SearchResults';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;

  @media ${BREAKPOINTS.LG} {
    padding: 3rem 5rem;
  }
`;

const SearchSection = () => {
  return (
    <section>
      <SearchContainer>
        <Search />
        <SearchResults />
      </SearchContainer>
    </section>
  );
};

export default SearchSection;
