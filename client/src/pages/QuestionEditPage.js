import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import QuestionEditFrom from '../components/QuestionEdit/QuestionEditFrom';
import QuestionEditGuide from '../components/QuestionEdit/QuestionEditGuide';
import useAxios from '../hooks/useAxios';
import { useAuthContext } from '../hooks/useAuthContext';
import Error from '../components/Error/Error';
import { useState } from 'react';
import { patchQuestion } from '../utils/api';

const Article = styled.article`
  display: flex;
  max-width: 1264px;
  width: 100%;
  padding: 16px;
  gap: 24px;
`;

const EditFormController = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  const [editErrors, setEditErrors] = useState([]);

  const [{ title, content }, loading, error] = useAxios({
    url: `/api/questions/${questionId}`,
    method: 'get',
    headers: 'ngrok-skip-browser-warning: "12"',
  });

  const handleSubmit = async ({ title, content }) => {
    const { status, data } = await patchQuestion({
      title,
      content,
      questionId,
      refreshToken,
      accessToken,
    });

    if (status === 404) {
      setEditErrors([data.message]);
      return;
    }

    if (status !== 200) {
      setEditErrors(['서버 오류로 등록 실패']);
      console.log(status, data);
      return;
    }
    navigation(`/question/${questionId}`);
  };

  const handleCancel = () => {
    navigation(`/question/${questionId}`);
  };

  return (
    <Article>
      <EditFormController>
        {loading ? (
          <div>로딩중</div>
        ) : (
          <QuestionEditFrom
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            initTitle={title}
            initContent={content
              .replaceAll('&lt;', '<')
              .replaceAll('&gt;', '>')}
            tags={[]}
          />
        )}
        {error?.message && <Error messages={[error.message]} />}
        {editErrors.length > 0 && <Error messages={editErrors} />}
      </EditFormController>
      <QuestionEditGuide guides={GUIDE_DUMY} />
    </Article>
  );
}

export default QuestionEditPage;
