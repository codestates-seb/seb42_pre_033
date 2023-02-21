import styled from 'styled-components';

//height 임의 설정
const MainComponent = styled.main`
  width: 100%;
  min-width: 800px;
  height: calc(100vh - 50px);
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
`;

function Main({ children }) {
  return <MainComponent>{children}</MainComponent>;
}
export default Main;
