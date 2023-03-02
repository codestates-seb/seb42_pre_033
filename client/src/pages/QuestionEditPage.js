import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import QuestionEditFrom from '../components/QuestionEdit/QuestionEditFrom';
import QuestionEditGuide from '../components/QuestionEdit/QuestionEditGuide';
import useAxios from '../hooks/useAxios';
import { useAuthContext } from '../hooks/useAuthContext';

const Article = styled.article`
  display: flex;
  max-width: 1264px;
  width: 100%;
  padding: 16px;
  gap: 24px;
`;

const GUIDE_DUMY = [
  'Correct minor typos or mistakes',
  'Clarify meaning without changing it',
  'Add related resources or links',
  'Always respect the author’s intent',
  'Don’t use edits to reply to the author',
];

function QuestionEditPage() {
  let { questionId } = useParams();
  const navigation = useNavigate();
  const { accessToken, refreshToken } = useAuthContext();

  const [{ title, content }, loading, error] = useAxios({
    url: `/questions/${questionId}`,
    method: 'get',
  });

  const handleSubmit = ({ title, content }) => {
    axios({
      method: 'patch',
      url: `/questions/${questionId}`,
      data: { title, content },
      headers: {
        authorization: accessToken,
        refresh: refreshToken,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log('등록 실패');
          return;
        }
        navigation(`/question/${questionId}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleCancel = () => {
    navigation(`/question/${questionId}`);
  };

  return (
    <Article>
      {error && error.message}
      {loading ? (
        <div>로딩중</div>
      ) : (
        <QuestionEditFrom
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          initTitle={title}
          initContent={content}
          tags={[]}
        />
      )}
      <QuestionEditGuide guides={GUIDE_DUMY} />
    </Article>
  );
}

export default QuestionEditPage;
