import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { CSSTransition } from 'react-transition-group';

import { useAppDispatch, useAppSelector } from 'Hooks/redux-hooks';

import { pushPortfolioItemAction } from 'Store/stocksPortfolio/actions';

import { COLORS } from 'Styles/colors';

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
  border: 1px solid ${COLORS.BORDER_COLOR};
`;

const AddButton = styled.button`
  display: flex;
  padding: 0.1rem;
  border: 0;
  border-radius: 0;
  margin: 0 0 0 1rem;
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 0.5rem;
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

  &:disabled {
    background-color: ${COLORS.LIGHT1};
    cursor: not-allowed;
  }
`;

type ResultProps = {
  symbol: string;
  name: string;
};

const Result = ({ symbol, name }: ResultProps) => {
  const dispatch = useAppDispatch();
  const { portfolio } = useAppSelector((state) => state.stocksPortfolio);

  const handleAddClick = () => {
    const result = { symbol, name };

    dispatch(pushPortfolioItemAction(result));
  };

  return (
    <CSSTransition in timeout={300} appear classNames="animation">
      <ResultContainer>
        <span>
          {symbol} - {name}
        </span>
        <AddButton type="button" onClick={handleAddClick} disabled={portfolio.some((e) => e.symbol === symbol)}>
          <AddIcon style={{ color: '#fff' }} />
        </AddButton>
      </ResultContainer>
    </CSSTransition>
  );
};

export default Result;
