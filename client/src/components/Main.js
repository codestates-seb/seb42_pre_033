import MainHeader from './MainHeader';
import styled from 'styled-components';

//height 임의 설정
const MainComponent = styled.div`
  width: 1100px;
  height: 2475px;
  margin-left: 165px;
  padding: 24px;
`;

function Main() {
  return (
    <MainComponent>
      <MainHeader />
    </MainComponent>
  );
}
export default Main;
