import { redirect, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../components/layout/Main/MainHeader';
import QuestionDetail from '../components/QuestionDetail/QuestionDetail';
import QuestionDetailInfo from '../components/QuestionDetail/QuestionDetailInfo';
import CommentForm from '../components/Comment/CommentForm';
import useAxios from '../hooks/useAxios';
import AsideRight from './AsideRight';
import { useAuthContext } from '../hooks/useAuthContext';
import { Fragment, useState } from 'react';
import QeustionDetailAnswer from '../components/QuestionDetail/QeustionDetailAnswers';
import { postAnswer } from '../utils/api';
import Error from '../components/Error/Error';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1264px;
  width: 100%;
  padding: 16px;
  gap: 3px;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 0;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function QuestionDetailPage() {
  let { questionId } = useParams();
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useAuthContext();
  const [answerErrors, setAnswerErrors] = useState([]);

  const [
    { title, content, createDate, score, viewCnt, answers, nickname },
    loading,
    error,
  ] = useAxios({
    url: `https://b8fd-125-177-118-22.jp.ngrok.io/questions/${questionId}`,
    method: 'get',
    headers: { 'ngrok-skip-browser-warning': '12' },
  });

  if (error && error.length > 0) {
    navigate('/*');
  }

  const onVoteUp = (id) => {
    console.log(id);
  };

  const onVoteDown = (id) => {
    console.log(id);
  };

  const handleSubmit = async (content) => {
    const { status, data } = await postAnswer({
      accessToken,
      refreshToken,
      questionId,
      content,
    });

    console.log(status, data);

    if (status === 400) {
      setAnswerErrors(['입력값 오류']);
      return;
    }

    if (status === 404) {
      redirect('/*');
      return;
    }

    if (status !== 201) {
      setAnswerErrors(['서버 오류입니다. 잠시 후 다시 시도해주세요']);
      return;
    }
  };

  return (
    <Article>
      {loading ? (
        <div>로딩중</div>
      ) : (
        <Fragment>
          <MainHeader title={title} displayDataController={false} />
          {error && error.message}

          <QuestionDetailInfo
            date={createDate}
            updateDate={createDate}
            viewed={viewCnt}
          />
          <Container>
            <QuestionWrapper>
              <QuestionContainer>
                <QuestionDetail
                  question={{
                    tags: [],
                    content: content,
                    score: score,
                    nickname: nickname,
                    id: questionId,
                  }}
                  onVoteUp={onVoteUp}
                  onVoteDown={onVoteDown}
                />
                <QeustionDetailAnswer
                  answers={answers.filter(({ answerContent }) => answerContent)}
                  onVoteUp={onVoteUp}
                  onVoteDown={onVoteDown}
                />
              </QuestionContainer>
              <CommentForm onSubmit={handleSubmit} />
              {answerErrors && <Error messages={answerErrors} />}
            </QuestionWrapper>
            <AsideRight />
          </Container>
        </Fragment>
      )}
    </Article>
  );
}

export default QuestionDetailPage;
