import MainHeader from './MainHeader';
import Header from './Header';
import Footer from './Footer';

import styled from 'styled-components';

//height 임의 설정
const MainComponent = styled.div`
  /* width: 1100px;
  height: 2475px;
  margin-left: 165px;
  padding: 24px; */
`;

function Main() {
  return (
    <MainComponent>
      <Header />
      <MainHeader />
      <Footer />
    </MainComponent>
  );
}
export default Main;
