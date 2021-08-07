import styled from 'styled-components';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { CSSTransition } from 'react-transition-group';

import { COLORS } from 'Styles/colors';

const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 340px;
  background-color: #fff;
  border-radius: 0.5rem;

  h3 {
    font-weight: 400;
    font-size: 1.2rem;
    margin: 0.8rem 0;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: ${COLORS.LIGHT1};
  }
`;

const NoResults = () => {
  return (
    <CSSTransition in timeout={300} appear classNames="animation">
      <NoResultContainer>
        <ListAltIcon style={{ color: COLORS.LIGHT1, fontSize: 75 }} />
        <h3>Ooops... It&apos;s empty here</h3>
        <p>There are no companies on the portfolio</p>
      </NoResultContainer>
    </CSSTransition>
  );
};

export default NoResults;
