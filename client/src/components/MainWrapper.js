import styled from 'styled-components';
import MainHeader from './MainHeader';
import AsideRight from '../pages/AsideRight';

const MainComponent = styled.div`
  width: 1264px;
  margin: 0 auto;
  display: flex;

  .side_left {
    width: 164px;
    height: 1000px;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
  }
`;

function MainWrapper() {
  return (
    <MainComponent>
      <div className='side_left'>사이드메뉴 영역</div>
      <MainHeader />
      <AsideRight />
    </MainComponent>
  );
}

export default MainWrapper;
