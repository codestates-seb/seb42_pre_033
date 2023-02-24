import styled from 'styled-components';
import QuestionAskForm from '../components/QuestionAsk/QuestionAskForm';
import QuestionAskHeadr from '../components/QuestionAsk/QuestionAskHeadr';
import AskQuetionNotice from '../components/QuestionAsk/QuestionAskNotice';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  width: 100%;
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  width: 70%;
  gap: 24px;
`;

function QuestionAskPage() {
  const handleSumbit = ({ title, body }) => {
    console.log(title, body);
  };

  return (
    <Wrapper>
      <Container>
        <QuestionAskHeadr />
        <AskQuetionNotice />
        <QuestionAskForm onSubmit={handleSumbit} />
      </Container>
    </Wrapper>
  );
}

export default QuestionAskPage;
