import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { CSSTransition } from 'react-transition-group';

import { useAppSelector, useAppDispatch } from 'Hooks/redux-hooks';

import { splicePortfolioItemAction } from 'Store/stocksPortfolio/actions';

import { APP_ROUTES } from 'Constants/routes';

import { COLORS } from 'Styles/colors';
import { BREAKPOINTS } from 'Styles/breakpoints';

const TitleRowWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${COLORS.DARK_BLUE};
  color: #fff;
  font-weight: bold;

  @media ${BREAKPOINTS.MD} {
    padding: 1rem;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border-bottom: 1px solid ${COLORS.BORDER_COLOR};

  &:nth-of-type(odd) {
    background-color: #f9f9f9;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: none;
  }

  @media ${BREAKPOINTS.MD} {
    padding: 1rem;
  }
`;

const RemoveGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${BREAKPOINTS.LG} {
    justify-content: flex-start;
  }
`;

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

  &:hover {
    text-decoration: underline;
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
    <CSSTransition in timeout={300} appear classNames="animation">
      <Grid container>
        <TitleRowWrapper>
          <Grid xs={3} md={3} item>
            <span>Symbol</span>
          </Grid>
          <Grid xs={6} md={7} item>
            <span>Name</span>
          </Grid>
          <Grid xs={3} md={2} item>
            <span>Actions</span>
          </Grid>
        </TitleRowWrapper>
        {portfolio.map(({ symbol, name }, index) => {
          return (
            <CSSTransition in timeout={300} appear classNames="animation">
              <RowWrapper key={symbol}>
                <Grid xs={3} md={3} item style={{ display: 'flex', alignSelf: 'center' }}>
                  <CompanyDetailsButton type="button" onClick={() => handleCompanyClick(symbol)}>
                    {symbol}
                  </CompanyDetailsButton>
                </Grid>
                <Grid xs={6} md={7} item style={{ display: 'flex', alignSelf: 'center' }}>
                  <CompanyDetailsButton type="button" onClick={() => handleCompanyClick(symbol)}>
                    {name}
                  </CompanyDetailsButton>
                </Grid>
                <RemoveGrid xs={3} md={2} item>
                  <RemoveButton type="button" onClick={() => handleRemoveClick(index)}>
                    <DeleteIcon />
                  </RemoveButton>
                </RemoveGrid>
              </RowWrapper>
            </CSSTransition>
          );
        })}
      </Grid>
    </CSSTransition>
  );
};

export default PortfolioTable;
