import styled from 'styled-components';
import MainHeader from './MainHeader';
import AsideRight from '../pages/AsideRight';
import AsideLeft from './AsideLeft';

const MainComponent = styled.div`
  width: 1264px;
  margin: 0 auto;
  display: flex;
`;

function MainWrapper() {
  return (
    <MainComponent>
      <AsideLeft />
      <MainHeader />
      <AsideRight />
    </MainComponent>
  );
}

export default MainWrapper;
