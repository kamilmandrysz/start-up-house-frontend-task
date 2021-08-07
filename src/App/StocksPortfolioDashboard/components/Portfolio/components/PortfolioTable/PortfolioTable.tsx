import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'Hooks/redux-hooks';

import { splicePortfolioItemAction } from 'Store/stocksPortfolio/actions';

import { APP_ROUTES } from 'Constants/routes';

const RemoveButton = styled.button`
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

const CompanyDetailsButton = styled.button`
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

const PortfolioTable = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { portfolio } = useAppSelector((state) => state.stocksPortfolio);

  const handleRemoveClick = (index: number) => {
    dispatch(splicePortfolioItemAction(index));
  };

  const handleCompanyClick = (symbol: string) => {
    history.push(`${APP_ROUTES.COMPANY_DETAILS}/${symbol}`);
  };

  return (
    <>
      <Grid container>
        <Grid xs={5} item>
          <span>Symbol</span>
        </Grid>
        <Grid xs={5} item>
          <span>Name</span>
        </Grid>
        <Grid xs={2} item>
          <span>Actions</span>
        </Grid>
        {portfolio.map(({ symbol, name }, index) => {
          return (
            <React.Fragment key={symbol}>
              <Grid xs={5} item>
                <CompanyDetailsButton type="button" onClick={() => handleCompanyClick(symbol)}>
                  {symbol}
                </CompanyDetailsButton>
              </Grid>
              <Grid xs={5} item>
                <span>{name}</span>
              </Grid>
              <Grid xs={2} item>
                <RemoveButton type="button" onClick={() => handleRemoveClick(index)}>
                  Remove
                </RemoveButton>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </>
  );
};

export default PortfolioTable;
