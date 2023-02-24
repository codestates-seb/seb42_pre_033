import styled from 'styled-components';

//height 임의 설정
const MainComponent = styled.main`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
`;

function Main({ children }) {
  return <MainComponent>{children}</MainComponent>;
}
export default Main;
