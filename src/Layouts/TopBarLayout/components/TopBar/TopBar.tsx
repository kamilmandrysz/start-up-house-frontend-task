import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 2rem;
  background-color: #fff;

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
