import styled from 'styled-components';
import AskQuestion from '../components/AskQuestion/AskQuestion';
import Main from '../components/layout/Main/Main';
import Footer from '../components/layout/Footer';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

function AskQuestionPage() {
  return (
    <>
      <Main>
        <Wrapper>
          <AskQuestion />
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default AskQuestionPage;
