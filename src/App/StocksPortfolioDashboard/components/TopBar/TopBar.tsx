import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #000;

  h2 {
    margin: 0;
  }
`;

const TopBar = () => {
  return (
    <header>
      <HeaderContainer>
        <h2>SDH Frontend Homework</h2>
      </HeaderContainer>
    </header>
  );
};

export default TopBar;
