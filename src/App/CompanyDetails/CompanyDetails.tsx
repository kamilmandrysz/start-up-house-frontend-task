import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import API from 'Lib/axios';

import { API_KEY } from 'config';

import { BREAKPOINTS } from 'Styles/breakpoints';

import TopBarLayout from 'Layouts/TopBarLayout';

type RouteParams = {
  symbol: string;
};

type DetailsProps = {
  Name: string;
  Address: string;
  MarketCapitalization: string;
  Description: string;
};

const CompanyDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  h2 {
    margin: 0;
  }

  @media ${BREAKPOINTS.LG} {
    padding: 3rem 5rem;
  }
`;

const GoBackButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 0;
  margin: 0;
  background-color: transparent;
  outline: 0;
  appearance: none;
  text-align: left;
  cursor: pointer;

  &:focus,
  &:active {
    outline: 0;
  }
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const CompanyDetails = () => {
  const { symbol } = useParams<RouteParams>();
  const history = useHistory();
  const [details, setDetails] = useState<DetailsProps>({
    Name: '',
    Address: '',
    MarketCapitalization: '',
    Description: '',
  });

  const handleGoBackClick = () => {
    history.goBack();
  };

  useEffect(() => {
    API.get(`query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`).then((res) => {
      setDetails(res.data);
    });
  }, [symbol]);

  return (
    <TopBarLayout>
      <section>
        <CompanyDetailsContainer>
          <GoBackButton type="button" onClick={handleGoBackClick}>
            Go Back
          </GoBackButton>
          {Object.keys(details).length === 0 ? (
            <h2>No information about company</h2>
          ) : (
            <>
              <h2>{details.Name}</h2>
              <p>
                <BoldSpan>Address:</BoldSpan> {details.Address}
              </p>
              <p>
                <BoldSpan>Market Capitalization:</BoldSpan> {details.MarketCapitalization}
              </p>
              <p>{details.Description}</p>
            </>
          )}
        </CompanyDetailsContainer>
      </section>
    </TopBarLayout>
  );
};

export default CompanyDetails;
