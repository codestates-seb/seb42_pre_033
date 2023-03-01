import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error/Error';
import QuestionAskForm from '../components/QuestionAsk/QuestionAskForm';
import QuestionAskHeadr from '../components/QuestionAsk/QuestionAskHeadr';
import AskQuetionNotice from '../components/QuestionAsk/QuestionAskNotice';
import { useAuthContext } from '../hooks/useAuthContext';
import { postQuestion } from '../utils/api';

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
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSumbit = async ({ title, content }) => {
    const { data, status } = await postQuestion({
      title,
      content,
      accessToken,
      refreshToken,
    });

    if (status !== 201) {
      setErrors([
        '게시판 글생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요',
      ]);
      return;
    }

    setErrors([]);
    navigate(`/question/${data.data}`);
  };

  return (
    <Wrapper>
      <Container>
        <QuestionAskHeadr />
        <AskQuetionNotice />
        <Error messages={errors} />
        <QuestionAskForm onSubmit={handleSumbit} />
      </Container>
    </Wrapper>
  );
}

export default QuestionAskPage;
