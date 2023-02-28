import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QuestionAskForm from '../components/QuestionAsk/QuestionAskForm';
import QuestionAskHeadr from '../components/QuestionAsk/QuestionAskHeadr';
import AskQuetionNotice from '../components/QuestionAsk/QuestionAskNotice';
import { useAuthContext } from '../hooks/useAuthContext';

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
  const { accessToken, refreshToken } = useAuthContext();
  const navigate = useNavigate();

  const handleSumbit = ({ title, content }) => {
    if (!title || !content) {
      return;
    }
    axios({
      method: 'post',
      url: '/api/questions',
      data: {
        title: title,
        content: content.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
      },
      headers: {
        authorization: accessToken,
        refresh: refreshToken,
      },
    })
      .then((response) => {
        if (response.status === 409) {
          // error coming back from server
          console.log(response.message);
          return;
        }

        if (response.status === 400) {
          console.log('입력값 오류');
          return;
        }

        if (response.status !== 201) {
          console.log('서버 오류');
          return;
        }

        console.log(response.data);
        navigate(`/question/${response.data.data}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
