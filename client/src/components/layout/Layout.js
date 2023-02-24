import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AsideRight from '../../pages/AsideRight';
import AsideLeft from './AsideLeft';
import Footer from './Footer';
import Header from './Header';
import Main from './Main/Main';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  background-color: unset;
  display: flex;
  width: 100%;
  margin: 0 auto;
  gap: 3px;
  max-width: ${(props) => (props.fullWidth ? 'max-content' : '1264px')};
  min-height: calc(100vh - 50px);
  justify-content: center;
`;

function Layout({
  displayHeader = true,
  displayFooter = false,
  displayLeftAside = false,
  displayRightAside = false,
  fullWidth = false,
}) {
  return (
    <Wrapper>
      {displayHeader && <Header />}
      <Container fullWidth={fullWidth}>
        {displayLeftAside && <AsideLeft />}
        <Main>
          <Outlet />
        </Main>
        {displayRightAside && <AsideRight />}
      </Container>
      {displayFooter && <Footer />}
    </Wrapper>
  );
}

export default Layout;
