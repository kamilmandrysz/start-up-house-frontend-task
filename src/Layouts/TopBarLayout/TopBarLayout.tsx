import styled from 'styled-components';

import { COLORS } from 'Styles/colors';

import TopBar from 'Layouts/TopBarLayout/components/TopBar';

type Props = {
  children: JSX.Element;
};

const TopBarLayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.BACKGROUND};
`;

const TopBarLayout = ({ children }: Props) => {
  return (
    <TopBarLayoutContainer>
      <TopBar />
      <main>{children}</main>
    </TopBarLayoutContainer>
  );
};

export default TopBarLayout;
