import styled from 'styled-components';
import AskQuestion from '../components/AskQuestion/AskQuestion';
import Main from '../components/layout/Main/Main';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AskQuestionPage() {
  return (
    <Main>
      <Wrapper>
        <AskQuestion />
      </Wrapper>
    </Main>
  );
}

export default AskQuestionPage;
