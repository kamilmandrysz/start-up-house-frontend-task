import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CircularProgress } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';

import API from 'Lib/axios';

import { API_KEY } from 'config';

import { APP_ROUTES } from 'Constants/routes';

import { BREAKPOINTS } from 'Styles/breakpoints';
import { COLORS } from 'Styles/colors';

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
  padding: 2rem 2rem;
  h2 {
    font-size: 2.5rem;
    margin: 3rem 0 0.8rem 0;
  }

  @media ${BREAKPOINTS.LG} {
    padding: 3rem 5rem;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  margin: 0;
  background-color: ${COLORS.LIGHT_BLUE};
  color: #fff;
  outline: 0;
  appearance: none;
  text-align: left;
  cursor: pointer;
  transition: background 300ms ease;

  &:focus,
  &:active {
    outline: 0;
  }

  &:hover {
    background-color: ${COLORS.DARK_BLUE};
  }

  span {
    margin: 0 0.5rem;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 0.8rem 0;
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
  const [isReady, setIsReady] = useState(false);

  const handleGoBackClick = () => {
    history.push(APP_ROUTES.STOCKS_PORTFOLIO_DASHBOARD);
  };

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    API.get(`query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`).then((res) => {
      setDetails(res.data);
      setIsReady(true);
    });
  }, [symbol]);

  return (
    <TopBarLayout>
      <section>
        {isReady ? (
          <CSSTransition in timeout={300} appear classNames="animation">
            <CompanyDetailsContainer>
              <ButtonWrapper>
                <GoBackButton type="button" onClick={handleGoBackClick}>
                  <ArrowBackIcon />
                  <span>Go Back</span>
                </GoBackButton>
              </ButtonWrapper>
              {Object.keys(details).length === 0 ? (
                <h2>No information about company</h2>
              ) : (
                <>
                  <h2>{details.Name}</h2>
                  <Paragraph>
                    <BoldSpan>Address:</BoldSpan> {details.Address}
                  </Paragraph>
                  <Paragraph>
                    <BoldSpan>Market Capitalization:</BoldSpan>{' '}
                    {priceFormatter.format(Number(details.MarketCapitalization))}
                  </Paragraph>
                  <p>{details.Description}</p>
                </>
              )}
            </CompanyDetailsContainer>
          </CSSTransition>
        ) : (
          <LoaderContainer>
            <CircularProgress size={80} />
          </LoaderContainer>
        )}
      </section>
    </TopBarLayout>
  );
};

export default CompanyDetails;
