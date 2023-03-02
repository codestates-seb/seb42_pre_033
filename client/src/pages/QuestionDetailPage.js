import { redirect, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../components/layout/Main/MainHeader';
import QuestionDetail from '../components/QuestionDetail/QuestionDetail';
import QuestionDetailInfo from '../components/QuestionDetail/QuestionDetailInfo';
import CommentForm from '../components/Comment/CommentForm';
import useAxios from '../hooks/useAxios';
import AsideRight from './AsideRight';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

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

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function QuestionDetailPage() {
  let { questionId } = useParams();
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useAuthContext();

  const [
    { title, content, createDate, score, viewCnt, answers, memberNickname },
    loading,
    error,
  ] = useAxios({
    url: `/api/questions/${questionId}`,
    method: 'get',
    headers: 'ngrok-skip-browser-warning: "12"',
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

  const handleSubmit = (content) => {
    axios({
      method: 'post',
      url: `/api/answers/${questionId}`,
      data: {
        answerContent: content,
      },
      headers: {
        authorization: accessToken,
        refresh: refreshToken,
      },
    })
      .then((response) => {
        if (response.status === 400) {
          console.log('입력값 오류');
          return;
        }

        if (response.status !== 201) {
          redirect('/*');
          return;
        }
      })
      .catch((error) => {
        console.log('asdasd');
        console.log(error.message);
        redirect('/*');
      });
  };

  return (
    <Article>
      <MainHeader title={title} displayDataController={false} />
      {error && error.message}
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <QuestionDetailInfo
            date={createDate}
            updateDate={createDate}
            viewed={viewCnt}
          />
          <Container>
            <QuestionContainer>
              <QuestionDetail
                question={{
                  tags: [],
                  content: content,
                  score: score,
                  nickname: memberNickname,
                }}
                answers={answers.filter(({ answerContent }) => answerContent)}
                onVoteUp={onVoteUp}
                onVoteDown={onVoteDown}
              />
              <CommentForm onSubmit={handleSubmit} />
            </QuestionContainer>
            <AsideRight />
          </Container>
        </>
      )}
    </Article>
  );
}

export default QuestionDetailPage;
