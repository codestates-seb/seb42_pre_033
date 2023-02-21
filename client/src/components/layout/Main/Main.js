import styled from 'styled-components';

//height 임의 설정
const MainComponent = styled.main`
  width: 100%;
  min-width: 800px;
  height: calc(100vh - 50px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Main({ children }) {
  return <MainComponent>{children}</MainComponent>;
}
export default Main;
