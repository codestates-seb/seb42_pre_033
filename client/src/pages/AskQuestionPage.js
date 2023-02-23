import styled from 'styled-components';
import AskQuestion from '../components/AskQuestion/AskQuestion';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

function AskQuestionPage() {
  return (
    <Wrapper>
      <AskQuestion />
    </Wrapper>
  );
}

export default AskQuestionPage;
