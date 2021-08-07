import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import { useAppDispatch } from 'Hooks/redux-hooks';

import { pushPortfolioItemAction } from 'Store/stocksPortfolio/actions';

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
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

type ResultProps = {
  symbol: string;
  name: string;
};

const Result = ({ symbol, name }: ResultProps) => {
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    const result = { symbol, name };

    dispatch(pushPortfolioItemAction(result));
  };

  return (
    <ResultContainer>
      <span>
        {symbol} - {name}
      </span>
      <AddButton type="button" onClick={handleAddClick}>
        <AddIcon />
      </AddButton>
    </ResultContainer>
  );
};

export default Result;
